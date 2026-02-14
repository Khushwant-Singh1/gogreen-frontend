'use client';

import React, { useState, useEffect } from 'react';
import axiosInstance from '@/lib/axios';
import { useRouter, useParams } from 'next/navigation';
import { TableData, TableCell, ProductSpecification, ImageData } from '@/types/specification';
import { SpecificationTable } from '@/components/SpecificationTable';
import Image from 'next/image';



export default function ProductSpecificationsPage() {
  const router = useRouter();
  const params = useParams();
  const productId = params.id as string;

  const [specifications, setSpecifications] = useState<ProductSpecification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);

  // Form state
  const [title, setTitle] = useState('');
  const [type, setType] = useState<'grid' | 'matrix' | 'image'>('grid');
  const [displayOrder, setDisplayOrder] = useState('0');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);

  // Table builder state
  const [headerRows, setHeaderRows] = useState(1);
  const [headerCols, setHeaderCols] = useState(3);
  const [bodyRows, setBodyRows] = useState(3);
  const [bodyCols, setBodyCols] = useState(3);
  const [tableData, setTableData] = useState<TableData>({
    headers: [],
    rows: [],
  });

  // Image upload state
  const [imageUrl, setImageUrl] = useState<string>('');
  const [imageAltText, setImageAltText] = useState<string>('');
  const [uploadingImage, setUploadingImage] = useState(false);

  useEffect(() => {
    fetchSpecifications();
  }, [productId]);

  const fetchSpecifications = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/specifications/product/${productId}?includeInactive=true`);

      setSpecifications(response.data.data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load specifications');
    } finally {
      setLoading(false);
    }
  };

  const initializeTable = () => {
    const headers: TableCell[][] = [];
    for (let i = 0; i < headerRows; i++) {
      const row: TableCell[] = [];
      for (let j = 0; j < headerCols; j++) {
        row.push({
          id: `h${i}-${j}`,
          value: '',
          colSpan: 1,
          rowSpan: 1,
          align: 'center',
        });
      }
      headers.push(row);
    }

    const rows: TableCell[][] = [];
    for (let i = 0; i < bodyRows; i++) {
      const row: TableCell[] = [];
      for (let j = 0; j < bodyCols; j++) {
        row.push({
          id: `r${i}-${j}`,
          value: '',
          colSpan: 1,
          rowSpan: 1,
          align: 'center',
          isHeader: j === 0,
        });
      }
      rows.push(row);
    }

    setTableData({ headers, rows });
  };

  const updateCell = (
    section: 'headers' | 'rows',
    rowIdx: number,
    colIdx: number,
    field: keyof TableCell,
    value: any
  ) => {
    setTableData((prev) => {
      const newData = { ...prev };
      const newSection = [...newData[section]];
      const newRow = [...newSection[rowIdx]];
      newRow[colIdx] = { ...newRow[colIdx], [field]: value };
      newSection[rowIdx] = newRow;
      newData[section] = newSection;
      return newData;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let content: TableData | ImageData;

    if (type === 'image') {
      // Validate and prepare image data
      if (!title || !imageUrl.trim()) {
        alert('Please fill in all required fields for the image specification');
        return;
      }

      content = {
        imageUrl: imageUrl.trim(),
        altText: imageAltText.trim() || title,
        description: description || undefined,
      };
    } else {
      // Validate table data
      if (!title || tableData.headers.length === 0 || tableData.rows.length === 0) {
        alert('Please fill in all required fields and create the table structure');
        return;
      }
      content = { ...tableData, description };
    }

    try {
      const url = editingId
        ? `/specifications/${editingId}`
        : `/specifications`;

      const method = editingId ? 'put' : 'post';

      // Type assertion for dynamic method access on axiosInstance
      await (axiosInstance as any)[method](url, {
        productId,
        title,
        type,
        content,
        displayOrder,
      });

      setShowForm(false);
      setTitle('');
      setType('grid');
      setDisplayOrder('0');
      setEditingId(null);
      setTableData({ headers: [], rows: [] });
      setImageUrl('');
      setImageAltText('');
      setDescription('');
      fetchSpecifications();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to save specification');
    }
  };

  const toggleStatus = async (id: string) => {
    try {
      await axiosInstance.patch(`/specifications/${id}/toggle-active`, {});

      fetchSpecifications();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to update status');
    }
  };

  const deleteSpecification = async (id: string) => {
    if (!confirm('Are you sure you want to delete this specification?')) {
      return;
    }

    try {
      await axiosInstance.delete(`/specifications/${id}`);

      fetchSpecifications();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to delete specification');
    }
  };

  const editSpecification = (spec: ProductSpecification) => {
    setEditingId(spec.id);
    setTitle(spec.title);
    setType(spec.type as 'grid' | 'matrix' | 'image');
    setDisplayOrder(spec.displayOrder || '0');
    
    if (spec.type === 'image') {
      const imageContent = spec.content as ImageData;
      setImageUrl(imageContent.imageUrl || '');
      setImageAltText(imageContent.altText || '');
      setDescription(imageContent.description || '');
    } else {
      setTableData(spec.content as TableData);
      setDescription((spec.content as TableData).description || '');
      
      // Set dimensions based on content
      if (spec.content && typeof spec.content === 'object') {
        const content = spec.content as TableData;
        if (content.headers && content.headers.length > 0) {
          setHeaderRows(content.headers.length);
          setHeaderCols(content.headers[0].length);
        }
        if (content.rows && content.rows.length > 0) {
          setBodyRows(content.rows.length);
          setBodyCols(content.rows[0].length);
        }
      }
    }
    
    setShowForm(true);
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <button
            onClick={() => router.push('/admin/products')}
            className="text-blue-600 hover:text-blue-800 mb-2"
          >
            ← Back to Products
          </button>
          <h1 className="text-3xl font-bold text-green-900">Product Specifications</h1>
        </div>
        <button
          onClick={() => {
            setShowForm(!showForm);
            if (!showForm) {
              setEditingId(null);
              setTitle('');
              setDescription('');
              setTableData({ headers: [], rows: [] });
              setImageUrl('');
              setImageAltText('');
            }
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium"
        >
          {showForm ? 'Cancel' : 'Add Specification'}
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {/* Specification Form */}
      {showForm && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            {editingId ? 'Edit Specification' : 'Create New Specification'}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value as any)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="grid">Grid Table</option>
                  <option value="matrix">Matrix Table</option>
                  <option value="image">Image</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {type === 'image' ? 'Image' : 'Table'} Description (optional)
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder={type === 'image' 
                  ? "Add image caption or description"
                  : "Add table description or features (one per line)\nExample:\n• Flow Rate: 2-4 LPH\n• Working Pressure: 1.0-3.0 Bar\n• Material: PE (Polyethylene)"}
              />
              <p className="text-xs text-gray-500 mt-1">
                {type === 'image' 
                  ? 'Add a caption or description for the image.'
                  : 'Add one feature or detail per line. Each line will appear as a bullet point below the table title.'}
              </p>
            </div>

            {type === 'image' && (
              <div className="border border-gray-300 rounded-lg p-4 mb-4">
                <h3 className="text-lg font-semibold mb-3">Specification Image</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Image
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={async (e) => {
                        if (!e.target.files || e.target.files.length === 0) return;
                        
                        const file = e.target.files[0];
                        const uploadData = new FormData();
                        uploadData.append('file', file);
                        
                        setUploadingImage(true);
                        try {
                          const res = await axiosInstance.post('/admin/upload', uploadData);
                          setImageUrl(res.data.url);
                        } catch (error) {
                          console.error('Image upload failed:', error);
                          alert('Failed to upload image');
                        } finally {
                          setUploadingImage(false);
                        }
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      disabled={uploadingImage}
                    />
                    {uploadingImage && (
                      <p className="text-sm text-blue-600 mt-2">Uploading image...</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Or Enter Image URL
                    </label>
                    <input
                      type="text"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="https://example.com/image.jpg"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Alt Text (optional)
                    </label>
                    <input
                      type="text"
                      value={imageAltText}
                      onChange={(e) => setImageAltText(e.target.value)}
                      placeholder="Description of the image for accessibility"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {imageUrl && (
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Image Preview
                      </label>
                      <div className="border border-gray-300 rounded-lg p-2 bg-gray-50">
                        <Image
                          src={imageUrl}
                          alt={imageAltText || title || 'Specification image'}
                          width={400}
                          height={300}
                          className="max-w-full h-auto rounded"
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {(type === 'grid' || type === 'matrix') && (
              <div className="border border-gray-300 rounded-lg p-4 mb-4">
                <h3 className="text-lg font-semibold mb-3">Table Builder</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  <div>
                    <label className="block text-sm mb-1">Header Rows</label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={headerRows}
                      onChange={(e) => setHeaderRows(parseInt(e.target.value))}
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Header Cols</label>
                    <input
                      type="number"
                      min="1"
                      max="20"
                      value={headerCols}
                      onChange={(e) => setHeaderCols(parseInt(e.target.value))}
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Body Rows</label>
                    <input
                      type="number"
                      min="1"
                      max="50"
                      value={bodyRows}
                      onChange={(e) => setBodyRows(parseInt(e.target.value))}
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Body Cols</label>
                    <input
                      type="number"
                      min="1"
                      max="20"
                      value={bodyCols}
                      onChange={(e) => setBodyCols(parseInt(e.target.value))}
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={initializeTable}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mb-4"
                >
                  Initialize Table
                </button>

                {tableData.headers.length > 0 && (
                  <div className="overflow-x-auto">
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Headers</h4>
                      {tableData.headers.map((row, rowIdx) => (
                        <div key={rowIdx} className="mb-4">
                          <div className="flex gap-2 mb-2">
                            {row.map((cell, colIdx) => (
                              <div key={cell.id} className="flex flex-col gap-1">
                                <input
                                  type="text"
                                  value={cell.value as string}
                                  onChange={(e) =>
                                    updateCell('headers', rowIdx, colIdx, 'value', e.target.value)
                                  }
                                  placeholder={`H${rowIdx + 1}-${colIdx + 1}`}
                                  className="px-2 py-1 border rounded text-sm"
                                />
                                {type === 'matrix' && (
                                  <div className="flex gap-1">
                                    <input
                                      type="number"
                                      min="1"
                                      max="10"
                                      value={cell.colSpan || 1}
                                      onChange={(e) =>
                                        updateCell('headers', rowIdx, colIdx, 'colSpan', parseInt(e.target.value))
                                      }
                                      placeholder="colspan"
                                      className="w-16 px-1 py-0.5 border rounded text-xs"
                                      title="Column Span"
                                    />
                                    <input
                                      type="number"
                                      min="1"
                                      max="10"
                                      value={cell.rowSpan || 1}
                                      onChange={(e) =>
                                        updateCell('headers', rowIdx, colIdx, 'rowSpan', parseInt(e.target.value))
                                      }
                                      placeholder="rowspan"
                                      className="w-16 px-1 py-0.5 border rounded text-xs"
                                      title="Row Span"
                                    />
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Body Rows</h4>
                      {tableData.rows.map((row, rowIdx) => (
                        <div key={rowIdx} className="mb-4">
                          <div className="flex gap-2 mb-2">
                            {row.map((cell, colIdx) => (
                              <div key={cell.id} className="flex flex-col gap-1">
                                <input
                                  type="text"
                                  value={cell.value as string}
                                  onChange={(e) =>
                                    updateCell('rows', rowIdx, colIdx, 'value', e.target.value)
                                  }
                                  placeholder={`R${rowIdx + 1}-${colIdx + 1}`}
                                  className="px-2 py-1 border rounded text-sm"
                                />
                                <div className="flex gap-1 items-center">
                                  <input
                                    type="color"
                                    value={cell.backgroundColor || '#ffffff'}
                                    onChange={(e) =>
                                      updateCell('rows', rowIdx, colIdx, 'backgroundColor', e.target.value)
                                    }
                                    className="w-8 h-6 border rounded cursor-pointer"
                                    title="Cell Background Color"
                                  />
                                  {cell.backgroundColor && cell.backgroundColor !== '#ffffff' && (
                                    <button
                                      type="button"
                                      onClick={() => updateCell('rows', rowIdx, colIdx, 'backgroundColor', '#ffffff')}
                                      className="text-xs text-red-500 hover:text-red-700"
                                      title="Clear color"
                                    >
                                      ✕
                                    </button>
                                  )}
                                </div>
                                {type === 'matrix' && (
                                  <div className="flex gap-1">
                                    <input
                                      type="number"
                                      min="1"
                                      max="10"
                                      value={cell.colSpan || 1}
                                      onChange={(e) =>
                                        updateCell('rows', rowIdx, colIdx, 'colSpan', parseInt(e.target.value))
                                      }
                                      placeholder="colspan"
                                      className="w-16 px-1 py-0.5 border rounded text-xs"
                                      title="Column Span"
                                    />
                                    <input
                                      type="number"
                                      min="1"
                                      max="10"
                                      value={cell.rowSpan || 1}
                                      onChange={(e) =>
                                        updateCell('rows', rowIdx, colIdx, 'rowSpan', parseInt(e.target.value))
                                      }
                                      placeholder="rowspan"
                                      className="w-16 px-1 py-0.5 border rounded text-xs"
                                      title="Row Span"
                                    />
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium"
              >
                {editingId ? 'Update' : 'Create'} Specification
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg font-medium"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Specifications List */}
      <div className="space-y-6">
        {specifications.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            No specifications found. Create one to get started.
          </div>
        ) : (
          specifications.map((spec) => (
            <div key={spec.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{spec.title}</h3>
                  <span className="text-sm text-gray-500">Type: {spec.type}</span>
                </div>
                <div className="flex gap-2">
                  <span
                    className={`px-3 py-1 text-sm rounded-full ${
                      spec.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {spec.isActive ? 'Active' : 'Inactive'}
                  </span>
                  <button
                    type="button"
                    onClick={() => editSpecification(spec)}
                    className="text-blue-600 hover:text-blue-800 px-3 font-medium"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleStatus(spec.id)}
                    className="text-yellow-600 hover:text-yellow-800 px-3 font-medium"
                  >
                    Toggle
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteSpecification(spec.id)}
                    className="text-red-600 hover:text-red-800 px-3 font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* Preview */}
              <SpecificationTable
                title={spec.title}
                data={spec.content as TableData | ImageData}
                type={spec.type as 'grid' | 'matrix' | 'image'}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
