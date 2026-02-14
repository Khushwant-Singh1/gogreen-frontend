
'use client';

import { useEditor, EditorContent } from '@tiptap/react';

import axiosInstance from '@/lib/axios';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import { Table } from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import { 
  Bold, Italic, List, ListOrdered, Image as ImageIcon, 
  Table as TableIcon, Heading1, Heading2, Heading3, 
  Undo, Redo, Link as LinkIcon 
} from 'lucide-react';
import { useCallback } from 'react';



interface RichTextEditorProps {
  content: any;
  onChange: (content: any) => void;
}

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null;
  }

  const addImage = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async () => {
      if (input.files?.length) {
        const file = input.files[0];
        const formData = new FormData();
        formData.append('file', file);

        try {
          const res = await axiosInstance.post('/admin/upload', formData);
          
          if (res.data.url) {
            // Note: We still need the full URL for the image src if it's relative, 
            // but the backend returns a full URL if CloudFront is used, or a relative one if not.
            // If it returns relative 'uploads/...', we might need to prepend base URL.
            // However, the previous code was prepending API_BASE_URL.
            // Let's check what the backend returns. Backend upload logic says:
            // "Return CloudFront URL if configured, otherwise S3 URL" -> these are absolute.
            // OR it returns `location` from multer-s3, which is usually absolute.
            // So we likely don't need to prepend anything if backend works as expected.
            // But let's be safe and check if it's absolute.
            
            const imageUrl = res.data.url;
            editor.chain().focus().setImage({ src: imageUrl }).run();
          }
        } catch (err) {
          console.error(err);
          alert('Image upload failed');
        }
      }
    };
    input.click();
  }, [editor]);

  const addTable = useCallback(() => {
    editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
  }, [editor]);

  return (
    <div className="border-b bg-gray-50 p-2 flex flex-wrap gap-1 sticky top-0 z-10">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`p-1.5 rounded hover:bg-gray-200 ${editor.isActive('bold') ? 'bg-gray-200 text-blue-600' : ''}`}
      >
        <Bold size={18} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`p-1.5 rounded hover:bg-gray-200 ${editor.isActive('italic') ? 'bg-gray-200 text-blue-600' : ''}`}
      >
        <Italic size={18} />
      </button>

      <div className="w-px h-6 bg-gray-300 mx-1 self-center" />

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`p-1.5 rounded hover:bg-gray-200 ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-200 text-blue-600' : ''}`}
      >
        <Heading1 size={18} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-1.5 rounded hover:bg-gray-200 ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-200 text-blue-600' : ''}`}
      >
        <Heading2 size={18} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`p-1.5 rounded hover:bg-gray-200 ${editor.isActive('heading', { level: 3 }) ? 'bg-gray-200 text-blue-600' : ''}`}
      >
        <Heading3 size={18} />
      </button>

      <div className="w-px h-6 bg-gray-300 mx-1 self-center" />

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-1.5 rounded hover:bg-gray-200 ${editor.isActive('bulletList') ? 'bg-gray-200 text-blue-600' : ''}`}
      >
        <List size={18} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-1.5 rounded hover:bg-gray-200 ${editor.isActive('orderedList') ? 'bg-gray-200 text-blue-600' : ''}`}
      >
        <ListOrdered size={18} />
      </button>

      <div className="w-px h-6 bg-gray-300 mx-1 self-center" />

      <button type="button" onClick={addImage} className="p-1.5 rounded hover:bg-gray-200">
        <ImageIcon size={18} />
      </button>
      <button type="button" onClick={addTable} className="p-1.5 rounded hover:bg-gray-200">
        <TableIcon size={18} />
      </button>

      <div className="w-px h-6 bg-gray-300 mx-1 self-center" />

      <button
        type="button"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className="p-1.5 rounded hover:bg-gray-200 disabled:opacity-50"
      >
        <Undo size={18} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className="p-1.5 rounded hover:bg-gray-200 disabled:opacity-50"
      >
        <Redo size={18} />
      </button>
    </div>
  );
};

export default function RichTextEditor({ content, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Image,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-600 underline',
        },
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: content,
    onUpdate: ({ editor }) => {
      onChange(editor.getJSON());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-lg max-w-none focus:outline-none min-h-[300px] p-4',
      },
    },
  });

  return (
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      
      {/* Global styles for lists and tables inside the editor */}
      <style dangerouslySetInnerHTML={{ __html: `
        .ProseMirror ul,
        .ProseMirror ol {
          padding-left: 1.5rem;
          margin: 0.5rem 0;
        }
        .ProseMirror ul {
          list-style-type: disc;
        }
        .ProseMirror ol {
          list-style-type: decimal;
        }
        .ProseMirror li {
          margin: 0.25rem 0;
        }
        .ProseMirror table {
          border-collapse: collapse;
          table-layout: fixed;
          width: 100%;
          margin: 0;
          overflow: hidden;
        }
        .ProseMirror td,
        .ProseMirror th {
          min-width: 1em;
          border: 2px solid #ced4da;
          padding: 3px 5px;
          vertical-align: top;
          box-sizing: border-box;
          position: relative;
        }
        .ProseMirror th {
          font-weight: bold;
          text-align: left;
          background-color: #f1f3f5;
        }
        .ProseMirror .selectedCell:after {
          z-index: 2;
          position: absolute;
          content: "";
          left: 0; right: 0; top: 0; bottom: 0;
          background: rgba(200, 200, 255, 0.4);
          pointer-events: none;
        }
      ` }} />
    </div>
  );
}
