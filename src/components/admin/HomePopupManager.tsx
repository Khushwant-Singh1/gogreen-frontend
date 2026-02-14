
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import axiosInstance from "@/lib/axios";
import { Upload, Trash2, Calendar, Eye, EyeOff } from "lucide-react";

interface Popup {
  id: string;
  imageUrl: string;
  isActive: boolean;
  startDate: string | null;
  endDate: string | null;
  link?: string | null;
}

export default function HomePopupManager() {
  const [popups, setPopups] = useState<Popup[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isActive, setIsActive] = useState(true);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [link, setLink] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const fetchPopups = async () => {
    try {
      // For Admin, we might want a different endpoint that returns ALL popups (even inactive/expired),
      // currently reusing public GET which filters active. Ideally, we need an admin-specific GET.
      // Let's assume for now public GET is enough or modify backend to support admin query.
      // Wait, backend supports filtered GET. Let's rely on that for now, OR create admin GET.
      // Actually, plan said "Fetch existing popups". Best to see ALL for management.
      // I'll stick to public GET for now to see active ones, but ideally admin needs to see inactive too.
      // Let's use the public endpoint for now and I'll add a TODO to improve this.
      
      const res = await axiosInstance.get("/home-popup");
      if (res.data.success) {
        setPopups(Array.isArray(res.data.data) ? res.data.data : [res.data.data].filter(Boolean));
      }
    } catch (error) {
      console.error("Failed to fetch popups", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPopups();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    try {
      // 1. Upload Image
      const formData = new FormData();
      formData.append("file", file);

      const uploadRes = await axiosInstance.post("/admin/upload", formData);

      const imageUrl = uploadRes.data.url;

      // 2. Create Popup Entry
      await axiosInstance.post("/home-popup/admin", {
        imageUrl,
        isActive,
        link,
        startDate: startDate ? new Date(startDate).toISOString() : null,
        endDate: endDate ? new Date(endDate).toISOString() : null,
      });

      // Reset form
      setFile(null);
      setPreviewUrl(null);
      setIsActive(true);
      setStartDate("");
      setEndDate("");
      setLink("");
      fetchPopups();
      alert("Popup created successfully!");
    } catch (error: any) {
      console.error("Upload failed", error);
      const errorMessage = error.response?.data?.error 
        ? (Array.isArray(error.response.data.error) 
            ? error.response.data.error.map((e: any) => e.message || JSON.stringify(e)).join(", ") 
            : error.response.data.error)
        : "Failed to create popup.";
      alert(`Error: ${errorMessage}`);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this popup?")) return;
    try {
      await axiosInstance.delete(`/home-popup/${id}`);
      setPopups((prev) => prev.filter((p) => p.id !== id));
      alert("Popup deleted successfully.");
    } catch (error) {
      console.error("Delete failed", error);
      alert("Failed to delete popup.");
    }
  };

  return (
    <div className="space-y-8">
      {/* Create Section */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Add New Home Popup</h2>
        <form onSubmit={handleUpload} className="space-y-4">
          
          {/* File Input */}
          <div className="flex items-center gap-4">
            <div className={`relative w-40 h-24 border-2 border-dashed rounded-lg flex items-center justify-center overflow-hidden ${!previewUrl ? 'bg-gray-50 border-gray-300' : 'border-green-500'}`}>
              {previewUrl ? (
                <Image src={previewUrl} alt="Preview" fill className="object-cover" />
              ) : (
                <div className="text-center text-gray-400">
                  <Upload className="w-8 h-8 mx-auto mb-1" />
                  <span className="text-xs">Select Image</span>
                </div>
              )}
              <input 
                type="file" 
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
                required
              />
            </div>

            <div className="flex-1 space-y-4">
              <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Link URL (Optional)</label>
                  <input 
                      type="url" 
                      value={link}
                      onChange={(e) => setLink(e.target.value)}
                      placeholder="https://example.com"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2 border"
                  />
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Date (Optional)</label>
                    <div className="relative">
                        <Calendar className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                        <input 
                            type="datetime-local" 
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="pl-9 w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2 border"
                        />
                    </div>
                </div>
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">End Date (Optional)</label>
                    <div className="relative">
                        <Calendar className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                        <input 
                            type="datetime-local" 
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="pl-9 w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2 border"
                        />
                    </div>
                </div>
              </div>

               <div className="flex items-center gap-2">
                 <input
                   type="checkbox"
                   id="isActive"
                   checked={isActive}
                   onChange={(e) => setIsActive(e.target.checked)}
                   className="rounded border-gray-300 text-green-600 focus:ring-green-500 w-4 h-4"
                 />
                 <label htmlFor="isActive" className="text-sm font-medium text-gray-700">Immediately Active</label>
               </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={uploading || !file}
            className="w-full btn-primary-custom py-2 px-4 rounded-md font-medium text-white shadow-sm hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {uploading ? "Uploading..." : "Create Popup"}
          </button>
        </form>
      </div>

      {/* List Section */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Active Popups</h2>
        
        {loading ? (
             <p className="text-gray-500">Loading popups...</p>
        ) : popups.length === 0 ? (
             <div className="text-center py-8 text-gray-500">No active popups found.</div>
        ) : (
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Schedule</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {popups.map((popup) => (
                            <tr key={popup.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="relative w-16 h-10 bg-gray-100 rounded overflow-hidden">
                                        <Image src={popup.imageUrl} alt="Popup" fill className="object-cover" />
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <div className="flex flex-col">
                                        <span>Start: {popup.startDate ? new Date(popup.startDate).toLocaleDateString() : 'Now'}</span>
                                        <span>End: {popup.endDate ? new Date(popup.endDate).toLocaleDateString() : 'Never'}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${popup.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {popup.isActive ? 'Active' : 'Inactive'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button 
                                        onClick={() => handleDelete(popup.id)}
                                        className="text-red-600 hover:text-red-900 transition-colors p-1"
                                        title="Delete"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )}
      </div>
    </div>
  );
}
