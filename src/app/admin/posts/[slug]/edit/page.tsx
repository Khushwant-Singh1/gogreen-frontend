'use client';

import { useState, useEffect } from 'react';
import axiosInstance from '@/lib/axios';
import { useRouter } from 'next/navigation';
import RichTextEditor from '@/components/RichTextEditor';

export default function EditPostPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [seoKeywords, setSeoKeywords] = useState('');
  const [uploadingImage, setUploadingImage] = useState(false);
  const [content, setContent] = useState<any>({ type: 'doc', content: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const postSlug = (await params).slug;
      const res = await axiosInstance.get(`/admin/posts/${postSlug}`);
      const post = res.data;
      setTitle(post.title);
      setSlug(post.slug);
      setCoverImage(post.coverImage || '');
      setSeoKeywords(Array.isArray(post.seoKeywords) ? post.seoKeywords.join(', ') : post.seoKeywords || '');
      setContent(post.content);
    } catch (error) {
      console.error(error);
      alert('Failed to load post');
    } finally {
      setIsLoading(false);
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
      const res = await axiosInstance.post('/upload', uploadData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setCoverImage(res.data.url);
      alert('Cover image uploaded successfully!');
    } catch (error) {
      console.error('Image upload failed:', error);
      alert('Failed to upload image');
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const postSlug = (await params).slug;
      await axiosInstance.put(`/admin/posts/${postSlug}`, {
        title,
        slug,
        content,
        coverImage,
        seoKeywords: seoKeywords ? seoKeywords.split(',').map(k => k.trim()).filter(k => k) : undefined,
        published: true,
      });

      alert('Post updated successfully!');
      router.push(`/blog/${slug}`);
    } catch (error) {
      console.error(error);
      alert('Failed to update post');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <div className="text-center">Loading post...</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Edit Post</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
          <input
            type="text"
            required
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full p-2 border rounded-md bg-gray-50"
          />
        </div>

        <div className="border p-4 rounded bg-gray-50">
          <label className="block text-sm font-medium text-gray-700 mb-2">Cover Image</label>
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
            className="w-full p-2 border rounded-md text-sm"
            value={coverImage}
            onChange={e => setCoverImage(e.target.value)}
          />
          {coverImage && (
            <div className="mt-2">
              <img src={coverImage} alt="Preview" className="h-32 w-full object-cover rounded border" />
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">SEO Keywords</label>
          <input
            type="text"
            placeholder="Enter keywords separated by commas (e.g., irrigation, farming, agriculture)"
            className="w-full p-2 border rounded-md"
            value={seoKeywords}
            onChange={e => setSeoKeywords(e.target.value)}
          />
          <p className="text-xs text-gray-500 mt-1">Separate keywords with commas for better SEO</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
          <RichTextEditor content={content} onChange={setContent} />
        </div>

        <div className="flex justify-end gap-4 pt-4">
          <button
            type="button"
            onClick={() => router.push('/admin/posts')}
            className="px-6 py-2 border border-gray-300 text-gray-700 font-bold rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSaving}
            className="px-6 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {isSaving ? 'Saving...' : 'Update Post'}
          </button>
        </div>
      </form>
    </div>
  );
}
