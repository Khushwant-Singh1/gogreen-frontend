'use client';

import { useState, useEffect, useRef } from 'react';
import axiosInstance from '@/lib/axios';
import { useAuth } from '@/contexts/AuthContext';
import { UserRole } from '@/types/auth';
import { useCategories } from '@/hooks/useCategories';
import { useQueryClient } from '@tanstack/react-query';
import { generateSlug } from '@/lib/slug';

interface ICategory {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  image?: string | null;
  displayOrder?: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function CategoriesAdmin() {
  const { user, hasRole } = useAuth();
  const isAdmin = user?.role === UserRole.ADMIN;
  const queryClient = useQueryClient();

  const { data: categories = [], isLoading: loading, error } = useCategories();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    displayOrder: '0',
    image: ''
  });

  // Auto-generate slug from name when name changes (unless slug was manually edited)
  useEffect(() => {
    if (!slugManuallyEdited && formData.name) {
      setFormData(prev => ({
        ...prev,
        slug: generateSlug(formData.name)
      }));
    }
  }, [formData.name, slugManuallyEdited]);



  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this category?')) return;
    try {
      if (isAdmin) {
         await axiosInstance.delete(`/admin/categories/${id}`);
         queryClient.invalidateQueries({ queryKey: ['categories'] });
      } else {
        await axiosInstance.post('/admin/pending-changes', {
          action: 'delete',
          resourceType: 'category',
          resourceId: id,
          changeData: {},
        });
        alert('Delete request submitted for approval');
      }
    } catch (error) {
      console.error('Error deleting category:', error);
      alert('Failed to delete category');
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const file = e.target.files[0];
    const uploadData = new FormData();
    uploadData.append('file', file);
    
    setUploadingImage(true);
    setUploadingImage(true);
    try {
      const res = await axiosInstance.post('/admin/upload', uploadData);
      setFormData(prev => ({ ...prev, image: res.data.url }));
      alert('Image uploaded successfully!');
    } catch (error) {
      console.error('Image upload failed:', error);
      alert('Failed to upload image');
    } finally {
      setUploadingImage(false);
    }
  };

  const handleToggleActive = async (id: string, currentStatus: boolean) => {
    try {
      await axiosInstance.patch(`/admin/categories/${id}/toggle`, {
        isActive: !currentStatus
      });
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    } catch (error) {
      console.error('Error toggling category status:', error);
      alert('Failed to toggle category status');
    }
  };

  const handleEdit = (category: ICategory) => {
    setEditingId(category.id);
    setSlugManuallyEdited(true); // Preserve existing slug when editing
    setFormData({
      name: category.name,
      slug: category.slug,
      description: category.description || '',
      displayOrder: category.displayOrder || '0',
      image: category.image || ''
    });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setSlugManuallyEdited(false);
    setFormData({
      name: '',
      slug: '',
      description: '',
      displayOrder: '0',
      image: ''
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const payload = {
        name: formData.name,
        slug: formData.slug,
        description: formData.description || undefined,
        displayOrder: formData.displayOrder || undefined,
        image: formData.image || undefined,
      };

      if (isAdmin) {
        if (editingId) {
            await axiosInstance.patch(`/admin/categories/${editingId}`, payload);
        } else {
            await axiosInstance.post('/admin/categories', payload);
        }
        queryClient.invalidateQueries({ queryKey: ['categories'] });
      } else {
         await axiosInstance.post('/admin/pending-changes', {
          action: editingId ? 'update' : 'create',
          resourceType: 'category',
          resourceId: editingId || undefined,
          changeData: payload,
        });
        alert('Change submitted for approval');
      }
      
      handleCancelEdit();
    } catch (error: any) {
      console.error('Error saving category:', error);
      alert(error.response?.data?.error || 'Failed to save category');
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Categories Management</h1>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">
          {editingId ? 'Edit Category' : 'Add New Category'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Category Name (e.g., Drip Irrigation)"
              className="border p-2 rounded"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Slug (e.g., drip-irrigation)"
              className="border p-2 rounded"
              value={formData.slug}
              onChange={e => {
                setSlugManuallyEdited(true);
                setFormData({ ...formData, slug: e.target.value });
              }}
              required
            />
            <input
              type="text"
              placeholder="Display Order (e.g., 1)"
              className="border p-2 rounded"
              value={formData.displayOrder}
              onChange={e => setFormData({ ...formData, displayOrder: e.target.value })}
            />
          </div>
          <div className="border p-4 rounded bg-gray-50">
            <label className="block text-sm font-medium text-gray-700 mb-2">Category Image</label>
            <div className="flex items-center gap-4 mb-2">
              <input 
                type="file" 
                accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
                onChange={handleImageUpload}
                disabled={uploadingImage}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
              />
              {uploadingImage && <span className="text-sm text-gray-500">Uploading...</span>}
            </div>
            <input
              type="text"
              placeholder="Or enter image URL directly"
              className="border p-2 rounded w-full text-sm"
              value={formData.image}
              onChange={e => setFormData({ ...formData, image: e.target.value })}
            />
            {formData.image && (
              <div className="mt-2">
                <img src={formData.image} alt="Preview" className="h-24 w-24 object-cover rounded border" />
              </div>
            )}
          </div>
          <textarea
            placeholder="Description (optional)"
            className="border p-2 rounded w-full"
            rows={3}
            value={formData.description}
            onChange={e => setFormData({ ...formData, description: e.target.value })}
          />
          <div className="flex gap-2">
            <button 
              type="submit" 
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              {editingId ? (isAdmin ? 'Update Category' : 'Submit Update for Approval') : (isAdmin ? 'Add Category' : 'Submit for Approval')}
            </button>
            {editingId && (
              <button 
                type="button"
                onClick={handleCancelEdit}
                className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </section>

      <section className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Slug</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Display Order</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <tr><td colSpan={5} className="px-6 py-4 text-center">Loading...</td></tr>
            ) : categories.length === 0 ? (
              <tr><td colSpan={5} className="px-6 py-4 text-center">No categories found.</td></tr>
            ) : categories.map((cat) => (
              <tr key={cat.id}>
                <td className="px-6 py-4 whitespace-nowrap">{cat.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cat.slug}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cat.displayOrder || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    cat.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {cat.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button
                    onClick={() => handleEdit(cat)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    Edit
                  </button>
                  {isAdmin && (
                    <button
                        onClick={() => handleToggleActive(cat.id, cat.isActive)}
                        className="text-yellow-600 hover:text-yellow-900"
                    >
                        {cat.isActive ? 'Deactivate' : 'Activate'}
                    </button>
                   )}
                  <button
                    onClick={() => handleDelete(cat.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
