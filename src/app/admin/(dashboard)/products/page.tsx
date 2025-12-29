'use client';

import { useState, useEffect } from 'react';

interface ILink {
  name: string;
  url: string;
}

interface IProduct {
  _id: string;
  title: string;
  category: string;
  subCategory?: string;
  image?: string;
  links: ILink[];
  order: number;
}

export default function ProductsAdmin() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    category: 'drip-irrigation',
    subCategory: '',
    linksText: ''
  });
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/admin/products');
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;
    try {
      await fetch(`/api/admin/products/${id}`, { method: 'DELETE' });
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const links = formData.linksText.split('\n').filter(l => l.includes('|')).map(l => {
      const [name, url] = l.split('|');
      return { name: name.trim(), url: url.trim() };
    });

    const fd = new FormData();
    fd.append('title', formData.title);
    fd.append('category', formData.category);
    fd.append('subCategory', formData.subCategory);
    fd.append('links', JSON.stringify(links));
    if (imageFile) {
      fd.append('image', imageFile);
    }

    try {
      const res = await fetch('/api/admin/products', {
        method: 'POST',
        body: fd
      });
      if (res.ok) {
        setFormData({ title: '', category: 'drip-irrigation', subCategory: '', linksText: '' });
        setImageFile(null);
        // Reset file input
        const fileInput = document.getElementById('productImage') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
        fetchProducts();
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Products Management</h1>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Product Title (e.g., Drip Tubing)"
            className="border p-2 rounded"
            value={formData.title}
            onChange={e => setFormData({ ...formData, title: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Category (e.g., drip-irrigation)"
            className="border p-2 rounded"
            value={formData.category}
            onChange={e => setFormData({ ...formData, category: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Sub Category (optional)"
            className="border p-2 rounded"
            value={formData.subCategory}
            onChange={e => setFormData({ ...formData, subCategory: e.target.value })}
          />
          <input
            id="productImage"
            type="file"
            className="border p-2 rounded"
            onChange={e => setImageFile(e.target.files?.[0] || null)}
          />
          <textarea
            placeholder="Links (Format: Name | URL, one per line)"
            className="border p-2 rounded h-32"
            value={formData.linksText}
            onChange={e => setFormData({ ...formData, linksText: e.target.value })}
          />
          <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
            Add Product
          </button>
        </form>
      </section>

      <section className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Links</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <tr><td colSpan={4} className="px-6 py-4 text-center">Loading...</td></tr>
            ) : products.length === 0 ? (
              <tr><td colSpan={4} className="px-6 py-4 text-center">No products found.</td></tr>
            ) : products.map((product) => (
              <tr key={product._id}>
                <td className="px-6 py-4 whitespace-nowrap">{product.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{product.category}</td>
                <td className="px-6 py-4">
                  <ul className="text-sm">
                    {product.links.map((link, idx) => (
                      <li key={idx}>{link.name} ({link.url})</li>
                    ))}
                  </ul>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleDelete(product._id)}
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
