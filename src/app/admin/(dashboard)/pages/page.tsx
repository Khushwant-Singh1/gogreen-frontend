'use client';

import { useState, useEffect } from 'react';

interface IContent {
  _id: string;
  key: string;
  value: string;
  type: string;
}

export default function PagesAdmin() {
  const [contents, setContents] = useState<IContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    key: '',
    value: '',
    type: 'text'
  });

  useEffect(() => {
    fetchContents();
  }, []);

  const fetchContents = async () => {
    try {
      const res = await fetch('/api/admin/content');
      const data = await res.json();
      setContents(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching content:', error);
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this content?')) return;
    try {
      await fetch(`/api/admin/content/${id}`, { method: 'DELETE' });
      fetchContents();
    } catch (error) {
      console.error('Error deleting content:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setFormData({ key: '', value: '', type: 'text' });
        fetchContents();
      }
    } catch (error) {
      console.error('Error adding content:', error);
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Content Management</h1>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Add New Content Entry</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Key (e.g., home_hero_title)"
            className="border p-2 rounded"
            value={formData.key}
            onChange={e => setFormData({ ...formData, key: e.target.value })}
            required
          />
          <textarea
            placeholder="Value"
            className="border p-2 rounded h-32"
            value={formData.value}
            onChange={e => setFormData({ ...formData, value: e.target.value })}
            required
          />
          <select
            className="border p-2 rounded"
            value={formData.type}
            onChange={e => setFormData({ ...formData, type: e.target.value })}
          >
            <option value="text">Text</option>
            <option value="image">Image URL</option>
            <option value="video">Video URL</option>
          </select>
          <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
            Save Content
          </button>
        </form>
      </section>

      <section className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <tr><td colSpan={4} className="px-6 py-4 text-center">Loading...</td></tr>
            ) : contents.length === 0 ? (
              <tr><td colSpan={4} className="px-6 py-4 text-center">No content entries found.</td></tr>
            ) : contents.map((item) => (
              <tr key={item._id}>
                <td className="px-6 py-4 whitespace-nowrap font-medium">{item.key}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.type}</td>
                <td className="px-6 py-4 max-w-xs truncate">{item.value}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleDelete(item._id)}
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
