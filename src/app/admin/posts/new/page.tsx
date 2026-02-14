
'use client';

import { useState } from 'react';

import axiosInstance from '@/lib/axios';
import { useRouter } from 'next/navigation';
import RichTextEditor from '@/components/RichTextEditor';
import { generateSlug } from '@/lib/slug';

export default function CreatePostPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);
  const [coverImage, setCoverImage] = useState('');
  const [seoKeywords, setSeoKeywords] = useState('');
  const [uploadingImage, setUploadingImage] = useState(false);
  const [content, setContent] = useState<any>({ type: 'doc', content: [] });
  const [isPublishing, setIsPublishing] = useState(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setTitle(val);
    // Auto-generate slug from title
    if (!slugManuallyEdited) {
      setSlug(generateSlug(val));
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
      setCoverImage(res.data.url);
      alert('Image uploaded successfully!');
    } catch (error) {
      console.error('Image upload failed:', error);
      alert('Failed to upload image');
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPublishing(true);

    try {
      const res = await axiosInstance.post('/admin/posts', {
        title,
        slug,
        content,
        coverImage,
        seoKeywords: seoKeywords ? seoKeywords.split(',').map(k => k.trim()).filter(k => k) : undefined,
        published: true,
      });

      alert('Post created successfully!');
      router.push(`/blog/${res.data.slug}`);
    } catch (error) {
      console.error(error);
      alert('Failed to create post');
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Create New Post</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            required
            value={title}
            onChange={handleTitleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Review of Q1 Exports"
          />
        </div>

        <div>
           <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
          <input
            type="text"
            required
            value={slug}
            onChange={(e) => {
              setSlugManuallyEdited(true);
              setSlug(e.target.value);
            }}
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

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            disabled={isPublishing}
            className="px-6 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {isPublishing ? 'Publishing...' : 'Publish Post'}
          </button>
        </div>
      </form>
    </div>
  );
}
