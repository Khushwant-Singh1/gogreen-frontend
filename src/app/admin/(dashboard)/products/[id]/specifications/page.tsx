'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { TableData, TableCell, ProductSpecification } from '@/types/specification';
import { SpecificationTable } from '@/components/SpecificationTable';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

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
  const [type, setType] = useState<'grid' | 'matrix' | 'chart'>('grid');
  const [displayOrder, setDisplayOrder] = useState('0');
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

  useEffect(() => {
    fetchSpecifications();
  }, [productId]);

  const fetchSpecifications = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/specifications/product/${productId}?includeInactive=true`, {
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch specifications');
      }

      const data = await response.json();
      setSpecifications(data.data || []);
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

    if (!title || tableData.headers.length === 0 || tableData.rows.length === 0) {
      alert('Please fill in all required fields and create the table structure');
      return;
    }

    try {
      const url = editingId
        ? `${API_BASE_URL}/specifications/${editingId}`
        : `${API_BASE_URL}/specifications`;

      const method = editingId ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          productId,
          title,
          type,
          content: tableData,
          displayOrder,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save specification');
      }

      setShowForm(false);
      setTitle('');
      setType('grid');
      setDisplayOrder('0');
      setEditingId(null);
      setTableData({ headers: [], rows: [] });
      fetchSpecifications();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to save specification');
    }
  };

  const toggleStatus = async (id: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/specifications/${id}/toggle-active`, {
        method: 'PATCH',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to update status');
      }

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
      const response = await fetch(`${API_BASE_URL}/specifications/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to delete specification');
      }

      fetchSpecifications();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to delete specification');
    }
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
          <h1 className="text-3xl font-bold text-gray-900">Product Specifications</h1>
        </div>
        <button
          onClick={() => {
            setShowForm(!showForm);
            if (!showForm) {
              setEditingId(null);
              setTitle('');
              setTableData({ headers: [], rows: [] });
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
                  <option value="chart">Chart</option>
                </select>
              </div>
            </div>

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
                        <div key={rowIdx} className="flex gap-2 mb-2">
                          {row.map((cell, colIdx) => (
                            <input
                              key={cell.id}
                              type="text"
                              value={cell.value as string}
                              onChange={(e) =>
                                updateCell('headers', rowIdx, colIdx, 'value', e.target.value)
                              }
                              placeholder={`H${rowIdx + 1}-${colIdx + 1}`}
                              className="px-2 py-1 border rounded text-sm"
                            />
                          ))}
                        </div>
                      ))}
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Body Rows</h4>
                      {tableData.rows.map((row, rowIdx) => (
                        <div key={rowIdx} className="flex gap-2 mb-2">
                          {row.map((cell, colIdx) => (
                            <input
                              key={cell.id}
                              type="text"
                              value={cell.value as string}
                              onChange={(e) =>
                                updateCell('rows', rowIdx, colIdx, 'value', e.target.value)
                              }
                              placeholder={`R${rowIdx + 1}-${colIdx + 1}`}
                              className="px-2 py-1 border rounded text-sm"
                            />
                          ))}
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
                    onClick={() => toggleStatus(spec.id)}
                    className="text-yellow-600 hover:text-yellow-800 px-3"
                  >
                    Toggle
                  </button>
                  <button
                    onClick={() => deleteSpecification(spec.id)}
                    className="text-red-600 hover:text-red-800 px-3"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* Preview */}
              {(spec.type === 'grid' || spec.type === 'matrix') && (
                <SpecificationTable
                  title={spec.title}
                  data={spec.content as TableData}
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
