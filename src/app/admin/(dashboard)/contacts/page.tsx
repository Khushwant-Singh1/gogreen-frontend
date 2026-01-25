'use client';

import { useState, useEffect } from 'react';

interface IContact {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  status: string;
  createdAt: string;
}

import axios from 'axios';

// ... (existing imports and interface)

export default function ContactsAdmin() {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  // Check if env var is defined, otherwise fallback to localhost:3001
  const API_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001'}/api`;

  const fetchContacts = async () => {
    try {
      const res = await axios.get(`${API_URL}/contact`, { withCredentials: true });
      setContacts(res.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      setLoading(false);
    }
  };

  const handleStatusChange = async (id: string, status: string) => {
    try {
      await axios.patch(`${API_URL}/contact/${id}`, { status }, { withCredentials: true });
      fetchContacts();
    } catch (error) {
      console.error('Error updating contact status:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this contact?')) return;
    try {
      await axios.delete(`${API_URL}/contact/${id}`, { withCredentials: true });
      fetchContacts();
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Contact Submissions</h1>

      <section className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name/Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <tr><td colSpan={5} className="px-6 py-4 text-center">Loading...</td></tr>
            ) : contacts.length === 0 ? (
              <tr><td colSpan={5} className="px-6 py-4 text-center">No contacts found.</td></tr>
            ) : contacts.map((contact) => (
              <tr key={contact._id} className={contact.status === 'new' ? 'bg-blue-50' : ''}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(contact.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{contact.name}</div>
                  <div className="text-sm text-gray-500">{contact.email}</div>
                  <div className="text-sm text-gray-500">{contact.phone}</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                  {contact.message}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    contact.status === 'new' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {contact.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex gap-2">
                    {contact.status === 'new' && (
                      <button
                        onClick={() => handleStatusChange(contact._id, 'read')}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Mark as Read
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(contact._id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
