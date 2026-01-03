'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useAuth } from '@/contexts/AuthContext';
import { UserRole } from '@/types/auth';

interface ICategory {
  id: string;
  name: string;
  slug: string;
}

interface ISubcategory {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
}

interface IProduct {
  id: string;
  subcategoryId: string;
  name: string;
  slug: string;
  description?: string | null;
  shortDescription?: string | null;
  price?: string | null;
  images?: string[] | null;
  specifications?: any;
  features?: string[] | null;
  displayOrder?: string | null;
  isActive: boolean;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function ProductsAdmin() {
  const router = useRouter();
  const { user, hasRole } = useAuth();
  const isAdmin = user?.role === UserRole.ADMIN;

  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [subcategories, setSubcategories] = useState<ISubcategory[]>([]);
  const [filteredSubcategories, setFilteredSubcategories] = useState<ISubcategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [filterSubcategoryId, setFilterSubcategoryId] = useState<string>('');
  const [formData, setFormData] = useState({
    categoryId: '',
    subcategoryId: '',
    name: '',
    slug: '',
    description: '',
    shortDescription: '',
    price: '',
    images: '',
    features: '',
    displayOrder: '0',
    isFeatured: false
  });

  useEffect(() => {
    fetchCategories();
    fetchSubcategories();
    fetchProducts();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get('/api/admin/categories', { withCredentials: true });
      setCategories(res.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchSubcategories = async () => {
    try {
      const res = await axios.get('/api/admin/subcategories', { withCredentials: true });
      setSubcategories(res.data);
    } catch (error) {
      console.error('Error fetching subcategories:', error);
    }
  };

  const fetchProducts = async (subcategoryId?: string) => {
    try {
      const url = subcategoryId 
        ? `/api/admin/products?subcategoryId=${subcategoryId}`
        : '/api/admin/products';
      const res = await axios.get(url, { withCredentials: true });
      setProducts(res.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  const handleCategoryChange = (categoryId: string) => {
    setFormData({ ...formData, categoryId, subcategoryId: '' });
    const filtered = subcategories.filter(s => s.categoryId === categoryId);
    setFilteredSubcategories(filtered);
  };

  const handleFilterChange = (subcategoryId: string) => {
    setFilterSubcategoryId(subcategoryId);
    if (subcategoryId) {
      fetchProducts(subcategoryId);
    } else {
      fetchProducts();
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;
    try {
      if (isAdmin) {
        await axios.delete(`/api/admin/products/${id}`, { withCredentials: true });
        fetchProducts(filterSubcategoryId || undefined);
      } else {
         await axios.post('/api/admin/pending-changes', {
          action: 'delete',
          resourceType: 'product',
          resourceId: id,
          changeData: {}, // Delete doesn't need data, but schema might require object
        });
        alert('Delete request submitted for approval');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product');
    }
  };

  const handleToggleActive = async (id: string, currentStatus: boolean) => {
    try {
      await axios.patch(`/api/admin/products/${id}/toggle`, {
        isActive: !currentStatus
      }, { withCredentials: true });
      fetchProducts(filterSubcategoryId || undefined);
    } catch (error) {
      console.error('Error toggling product status:', error);
      alert('Failed to toggle product status');
    }
  };

  const handleEdit = (product: IProduct) => {
    setEditingId(product.id);
    const subcat = subcategories.find(s => s.id === product.subcategoryId);
    const categoryId = subcat?.categoryId || '';
    
    if (categoryId) {
      const filtered = subcategories.filter(s => s.categoryId === categoryId);
      setFilteredSubcategories(filtered);
    }
    
    setFormData({
      categoryId,
      subcategoryId: product.subcategoryId,
      name: product.name,
      slug: product.slug,
      description: product.description || '',
      shortDescription: product.shortDescription || '',
      price: product.price || '',
      images: product.images?.join('\n') || '',
      features: product.features?.join('\n') || '',
      displayOrder: product.displayOrder || '0',
      isFeatured: product.isFeatured
    });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFilteredSubcategories([]);
    setFormData({
      categoryId: '',
      subcategoryId: '',
      name: '',
      slug: '',
      description: '',
      shortDescription: '',
      price: '',
      images: '',
      features: '',
      displayOrder: '0',
      isFeatured: false
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.subcategoryId) {
      alert('Please select a category and subcategory');
      return;
    }
    
    try {
      const imagesArray = formData.images
        .split('\n')
        .map(i => i.trim())
        .filter(i => i.length > 0);
      
      const featuresArray = formData.features
        .split('\n')
        .map(f => f.trim())
        .filter(f => f.length > 0);

      const payload = {
        subcategoryId: formData.subcategoryId,
        name: formData.name,
        slug: formData.slug,
        description: formData.description || undefined,
        shortDescription: formData.shortDescription || undefined,
        price: formData.price || undefined,
        images: imagesArray.length > 0 ? imagesArray : undefined,
        features: featuresArray.length > 0 ? featuresArray : undefined,
        displayOrder: formData.displayOrder || undefined,
        isFeatured: formData.isFeatured,
      };

      if (isAdmin) {
        if (editingId) {
          await axios.patch(`/api/admin/products/${editingId}`, payload, { withCredentials: true });
        } else {
          await axios.post('/api/admin/products', payload, { withCredentials: true });
        }
        fetchProducts(filterSubcategoryId || undefined);
      } else {
        // Editor Workflow
         await axios.post('/api/admin/pending-changes', {
          action: editingId ? 'update' : 'create',
          resourceType: 'product',
          resourceId: editingId || undefined,
          changeData: payload,
        });
        alert('Change submitted for approval');
      }
      
      handleCancelEdit();
    } catch (error: any) {
      console.error('Error saving product:', error);
      alert(error.response?.data?.error || 'Failed to save product');
    }
  };

  const getSubcategoryName = (subcategoryId: string) => {
    const subcategory = subcategories.find(s => s.id === subcategoryId);
    return subcategory?.name || 'Unknown';
  };

  const getCategoryName = (subcategoryId: string) => {
    const subcategory = subcategories.find(s => s.id === subcategoryId);
    if (!subcategory) return 'Unknown';
    const category = categories.find(c => c.id === subcategory.categoryId);
    return category?.name || 'Unknown';
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Products Management</h1>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">
          {editingId ? 'Edit Product' : 'Add New Product'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              className="border p-2 rounded"
              value={formData.categoryId}
              onChange={e => handleCategoryChange(e.target.value)}
              required
            >
              <option value="">Select Category</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
            <select
              className="border p-2 rounded"
              value={formData.subcategoryId}
              onChange={e => setFormData({ ...formData, subcategoryId: e.target.value })}
              required
              disabled={!formData.categoryId}
            >
              <option value="">Select Subcategory</option>
              {filteredSubcategories.map(subcat => (
                <option key={subcat.id} value={subcat.id}>{subcat.name}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Product Name"
              className="border p-2 rounded"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Slug (e.g., product-name)"
              className="border p-2 rounded"
              value={formData.slug}
              onChange={e => setFormData({ ...formData, slug: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Price (e.g., $99.99)"
              className="border p-2 rounded"
              value={formData.price}
              onChange={e => setFormData({ ...formData, price: e.target.value })}
            />
            <input
              type="text"
              placeholder="Display Order"
              className="border p-2 rounded"
              value={formData.displayOrder}
              onChange={e => setFormData({ ...formData, displayOrder: e.target.value })}
            />
            <div className="flex items-center col-span-2">
              <input
                type="checkbox"
                id="isFeatured"
                checked={formData.isFeatured}
                onChange={e => setFormData({ ...formData, isFeatured: e.target.checked })}
                className="mr-2"
              />
              <label htmlFor="isFeatured">Featured Product</label>
            </div>
          </div>
          <textarea
            placeholder="Short Description"
            className="border p-2 rounded w-full"
            rows={2}
            value={formData.shortDescription}
            onChange={e => setFormData({ ...formData, shortDescription: e.target.value })}
          />
          <textarea
            placeholder="Full Description"
            className="border p-2 rounded w-full"
            rows={4}
            value={formData.description}
            onChange={e => setFormData({ ...formData, description: e.target.value })}
          />
          <textarea
            placeholder="Image URLs (one per line)"
            className="border p-2 rounded w-full"
            rows={3}
            value={formData.images}
            onChange={e => setFormData({ ...formData, images: e.target.value })}
          />
          <textarea
            placeholder="Features (one per line)"
            className="border p-2 rounded w-full"
            rows={4}
            value={formData.features}
            onChange={e => setFormData({ ...formData, features: e.target.value })}
          />
          <div className="flex gap-2">
            <button 
              type="submit" 
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              {editingId ? (isAdmin ? 'Update Product' : 'Submit Update for Approval') : (isAdmin ? 'Add Product' : 'Submit for Approval')}
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

      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Filter by Subcategory
          </label>
          <select
            className="border p-2 rounded"
            value={filterSubcategoryId}
            onChange={e => handleFilterChange(e.target.value)}
          >
            <option value="">All Products</option>
            {subcategories.map(subcat => (
              <option key={subcat.id} value={subcat.id}>
                {getCategoryName(subcat.id)} → {subcat.name}
              </option>
            ))}
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subcategory</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Featured</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr><td colSpan={7} className="px-6 py-4 text-center">Loading...</td></tr>
              ) : products.length === 0 ? (
                <tr><td colSpan={7} className="px-6 py-4 text-center">No products found.</td></tr>
              ) : products.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{getCategoryName(product.subcategoryId)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{getSubcategoryName(product.subcategoryId)}</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{product.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{product.price || '-'}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      product.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {product.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {product.isFeatured ? '⭐ Yes' : 'No'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => router.push(`/admin/products/${product.id}/specifications`)}
                      className="text-purple-600 hover:text-purple-900"
                    >
                      Specs
                    </button>
                    {isAdmin && (
                      <button
                        onClick={() => handleToggleActive(product.id, product.isActive)}
                        className="text-yellow-600 hover:text-yellow-900"
                      >
                        {product.isActive ? 'Deactivate' : 'Activate'}
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
