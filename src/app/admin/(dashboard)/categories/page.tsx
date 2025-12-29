'use client';

import { useState, useEffect } from 'react';

interface ICategory {
  _id: string;
  name: string;
  slug: string;
  banner?: string;
  order: number;
}

export default function CategoriesAdmin() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    order: 0
  });
  const [bannerFile, setBannerFile] = useState<File | null>(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/admin/categories');
      const data = await res.json();
      setCategories(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this category?')) return;
    try {
      await fetch(`/api/admin/categories/${id}`, { method: 'DELETE' });
      fetchCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('name', formData.name);
    fd.append('slug', formData.slug);
    fd.append('order', formData.order.toString());
    if (bannerFile) {
      fd.append('banner', bannerFile);
    }

    try {
      const res = await fetch('/api/admin/categories', {
        method: 'POST',
        body: fd
      });
      if (res.ok) {
        setFormData({ name: '', slug: '', order: 0 });
        setBannerFile(null);
        const fileInput = document.getElementById('categoryBanner') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
        fetchCategories();
      }
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Categories Management</h1>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Add New Category</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            onChange={e => setFormData({ ...formData, slug: e.target.value })}
            required
          />
          <input
            id="categoryBanner"
            type="file"
            className="border p-2 rounded col-span-2"
            onChange={e => setBannerFile(e.target.files?.[0] || null)}
          />
          <input
            type="number"
            placeholder="Order"
            className="border p-2 rounded"
            value={formData.order}
            onChange={e => setFormData({ ...formData, order: parseInt(e.target.value) })}
          />
          <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition col-span-2">
            Add Category
          </button>
        </form>
      </section>

      <section className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Slug</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <tr><td colSpan={4} className="px-6 py-4 text-center">Loading...</td></tr>
            ) : categories.length === 0 ? (
              <tr><td colSpan={4} className="px-6 py-4 text-center">No categories found.</td></tr>
            ) : categories.map((cat) => (
              <tr key={cat._id}>
                <td className="px-6 py-4 whitespace-nowrap">{cat.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{cat.slug}</td>
                <td className="px-6 py-4 whitespace-nowrap">{cat.order}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleDelete(cat._id)}
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
