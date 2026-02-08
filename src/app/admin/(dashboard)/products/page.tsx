'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axiosInstance from '@/lib/axios';
import { useAuth } from '@/contexts/AuthContext';
import { UserRole } from '@/types/auth';
import { generateSlug } from '@/lib/slug';
import Link from 'next/link';

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
  seoKeywords?: string[] | null;
  pdfUrl?: string | null;
  staticPageUrl?: string | null;
  displayOrder?: string | null;
  isActive: boolean;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}

interface IStaticRoute {
  route: string;
  name: string;
}

export default function ProductsAdmin() {
  const router = useRouter();
  const { user, hasRole } = useAuth();
  const isAdmin = user?.role === UserRole.ADMIN;

  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [subcategories, setSubcategories] = useState<ISubcategory[]>([]);
  const [filteredSubcategories, setFilteredSubcategories] = useState<ISubcategory[]>([]);
  const [staticRoutes, setStaticRoutes] = useState<IStaticRoute[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [filterSubcategoryId, setFilterSubcategoryId] = useState<string>('');
  const [uploadingPdf, setUploadingPdf] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);
  const [formData, setFormData] = useState({
    categoryId: '',
    subcategoryId: '',
    name: '',
    slug: '',
    description: '',
    shortDescription: '',
    price: '',
    images: '',
    pdfUrl: '',
    features: '',
    seoKeywords: '',
    staticPageUrl: '',
    displayOrder: '0',
    isFeatured: false
  });

  // Auto-generate slug from name when name changes
  useEffect(() => {
    if (!slugManuallyEdited && formData.name) {
      setFormData(prev => ({
        ...prev,
        slug: generateSlug(formData.name)
      }));
    }
  }, [formData.name, slugManuallyEdited]);

  useEffect(() => {
    fetchCategories();
    fetchSubcategories();
    fetchProducts();
    fetchStaticRoutes();
  }, []);

  const fetchStaticRoutes = async () => {
    try {
      const res = await axiosInstance.get('/admin/static-routes');
      console.log('Static routes fetched:', res.data);
      setStaticRoutes(res.data);
    } catch (error) {
      console.error('Error fetching static routes:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await axiosInstance.get('/admin/categories');
      setCategories(res.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchSubcategories = async () => {
    try {
      const res = await axiosInstance.get('/admin/subcategories');
      setSubcategories(res.data);
    } catch (error) {
      console.error('Error fetching subcategories:', error);
    }
  };

  const fetchProducts = async (subcategoryId?: string) => {
    try {
      const url = subcategoryId 
        ? `/admin/products?subcategoryId=${subcategoryId}`
        : '/admin/products';
      const res = await axiosInstance.get(url);
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
        await axiosInstance.delete(`/admin/products/${id}`);
        fetchProducts(filterSubcategoryId || undefined);
      } else {
         await axiosInstance.post('/admin/pending-changes', {
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
      await axiosInstance.patch(`/admin/products/${id}/toggle`, {
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
    setSlugManuallyEdited(true);
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
      pdfUrl: product.pdfUrl || '',
      features: product.features?.join('\n') || '',
      seoKeywords: product.seoKeywords?.join('\n') || '',
      staticPageUrl: product.staticPageUrl || '',
      displayOrder: product.displayOrder || '0',
      isFeatured: product.isFeatured
    });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setSlugManuallyEdited(false);
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
      pdfUrl: '',
      features: '',
      seoKeywords: '',
      staticPageUrl: '',
      displayOrder: '0',
      isFeatured: false
    });
  };

  const handlePdfUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const file = e.target.files[0];
    const uploadData = new FormData();
    uploadData.append('file', file);
    
    setUploadingPdf(true);
    setUploadingPdf(true);
    try {
      const res = await axiosInstance.post('/upload', uploadData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setFormData(prev => ({ ...prev, pdfUrl: res.data.url }));
    } catch (error) {
      console.error('PDF upload failed:', error);
      alert('Failed to upload PDF');
    } finally {
      setUploadingPdf(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const files = Array.from(e.target.files);
    setUploadingImage(true);
    
    try {
      const API_URL = `${process.env.NEXT_PUBLIC_NEXT_PUBLIC_BASE_URL || 'http://localhost:3001'}/api`;
      const uploadedUrls: string[] = [];
      
      // Upload each file
      for (const file of files) {
        const uploadData = new FormData();
        uploadData.append('file', file);
        
        const res = await axiosInstance.post('/upload', uploadData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        
        uploadedUrls.push(res.data.url);
      }
      
      // Append new URLs to existing ones
      const currentImages = formData.images ? formData.images.split('\n').filter(url => url.trim()) : [];
      const allImages = [...currentImages, ...uploadedUrls].join('\n');
      setFormData(prev => ({ ...prev, images: allImages }));
      
      alert(`Successfully uploaded ${uploadedUrls.length} image(s)`);
    } catch (error) {
      console.error('Image upload failed:', error);
      alert('Failed to upload image(s)');
    } finally {
      setUploadingImage(false);
    }
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

      const seoKeywordsArray = formData.seoKeywords
        .split('\n')
        .map(k => k.trim())
        .filter(k => k.length > 0);

      const payload = {
        subcategoryId: formData.subcategoryId,
        name: formData.name,
        slug: formData.slug,
        description: formData.description || undefined,
        shortDescription: formData.shortDescription || undefined,
        price: formData.price || undefined,
        images: imagesArray.length > 0 ? imagesArray : undefined,
        pdfUrl: formData.pdfUrl || undefined,
        features: featuresArray.length > 0 ? featuresArray : undefined,
        seoKeywords: seoKeywordsArray.length > 0 ? seoKeywordsArray : undefined,
        staticPageUrl: formData.staticPageUrl || undefined,
        displayOrder: formData.displayOrder || undefined,
        isFeatured: formData.isFeatured,
      };

      if (isAdmin) {
        if (editingId) {
          await axiosInstance.patch(`/admin/products/${editingId}`, payload);
        } else {
          await axiosInstance.post('/admin/products', payload);
        }
        fetchProducts(filterSubcategoryId || undefined);
      } else {
        // Editor Workflow
         await axiosInstance.post('/admin/pending-changes', {
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

  // Handle static route selection - auto-fills name and slug from the route
  const handleStaticRouteSelect = (route: string) => {
    if (!route) {
      setFormData(prev => ({ ...prev, staticPageUrl: '' }));
      return;
    }
    
    const selectedRoute = staticRoutes.find(r => r.route === route);
    if (selectedRoute) {
      // Extract slug from route (e.g., "/products/adjustable-dripper" -> "adjustable-dripper")
      const slugFromRoute = route.split('/').pop() || '';
      
      setFormData(prev => ({
        ...prev,
        staticPageUrl: route,
        name: prev.name || selectedRoute.name, // Only set if empty
        slug: prev.slug || slugFromRoute, // Only set if empty
      }));
      
      if (!formData.name) {
        setSlugManuallyEdited(true); // Prevent auto-generation from overwriting
      }
    }
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
              onChange={e => {
                setSlugManuallyEdited(true);
                setFormData({ ...formData, slug: e.target.value });
              }}
              required
            />
          </div>
          
          {/* Static Route Selector */}
          <div className="border p-4 rounded bg-purple-50">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Link to Existing Static Product Page (Optional)
            </label>
            <div className="flex gap-2">
              <select
                className="border p-2 rounded flex-1"
                value={formData.staticPageUrl}
                onChange={e => handleStaticRouteSelect(e.target.value)}
              >
                <option value="">-- No Static Page Link --</option>
                {staticRoutes.map(route => (
                  <option key={route.route} value={route.route}>
                    {route.name} ({route.route})
                  </option>
                ))}
              </select>
              {formData.staticPageUrl && (
                <Link
                  href={formData.staticPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition text-sm"
                >
                  Preview
                </Link>
              )}
            </div>
            <p className="text-xs text-gray-600 mt-2">
              Select an existing static product page to link with this product. This will auto-fill the name and slug if empty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <div className="border p-4 rounded bg-gray-50">
            <label className="block text-sm font-medium text-gray-700 mb-2">Product Images</label>
            <div className="flex items-center gap-4 mb-2">
              <input 
                type="file" 
                accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
                multiple
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
            <textarea
              placeholder="Image URLs (one per line, or use upload button above)"
              className="border p-2 rounded w-full text-sm"
              rows={3}
              value={formData.images}
              onChange={e => setFormData({ ...formData, images: e.target.value })}
            />
            {formData.images && (
              <div className="mt-2 text-sm text-gray-600">
                <strong>Images:</strong> {formData.images.split('\n').filter(url => url.trim()).length} uploaded
              </div>
            )}
          </div>
          <div className="border p-4 rounded bg-gray-50">
             <label className="block text-sm font-medium text-gray-700 mb-2">Product Brochure (PDF)</label>
             <div className="flex items-center gap-4">
               <input 
                 type="file" 
                 accept="application/pdf"
                 onChange={handlePdfUpload}
                 disabled={uploadingPdf}
                 className="block w-full text-sm text-gray-500
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-green-50 file:text-green-700
                   hover:file:bg-green-100"
               />
               {uploadingPdf && <span className="text-sm text-gray-500">Uploading...</span>}
             </div>
             <input
               type="text"
               placeholder="Or enter PDF URL directly"
               className="border p-2 rounded w-full mt-2 text-sm"
               value={formData.pdfUrl}
               onChange={e => setFormData({ ...formData, pdfUrl: e.target.value })}
             />
             {formData.pdfUrl && (
               <Link href={formData.pdfUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm mt-1 inline-block hover:underline">
                 View Current PDF
               </Link>
             )}
          </div>
          <textarea
            placeholder="Features (one per line)"
            className="border p-2 rounded w-full"
            rows={4}
            value={formData.features}
            onChange={e => setFormData({ ...formData, features: e.target.value })}
          />
          <div className="border p-4 rounded bg-blue-50">
            <label className="block text-sm font-medium text-gray-700 mb-2">SEO Keywords</label>
            <textarea
              placeholder="SEO Keywords (one per line, e.g., drip irrigation, water management, agriculture)"
              className="border p-2 rounded w-full"
              rows={4}
              value={formData.seoKeywords}
              onChange={e => setFormData({ ...formData, seoKeywords: e.target.value })}
            />
            <p className="text-xs text-gray-600 mt-2">Enter one keyword per line. These will be used for search engine optimization.</p>
          </div>
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Static Page</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Featured</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr><td colSpan={8} className="px-6 py-4 text-center">Loading...</td></tr>
              ) : products.length === 0 ? (
                <tr><td colSpan={8} className="px-6 py-4 text-center">No products found.</td></tr>
              ) : products.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{getCategoryName(product.subcategoryId)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{getSubcategoryName(product.subcategoryId)}</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{product.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {product.staticPageUrl ? (
                      <Link
                        href={product.staticPageUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-900 hover:underline"
                        title={product.staticPageUrl}
                      >
                        🔗 Linked
                      </Link>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
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
