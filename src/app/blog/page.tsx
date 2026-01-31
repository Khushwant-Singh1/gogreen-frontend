import React from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const API_BASE_URL = process.env.NEXT_PUBLIC_NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';

// Disable caching to see new posts
export const dynamic = 'force-dynamic';

interface Post {
  id: number;
  title: string;
  slug: string;
  content: any;
  published: boolean;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

// Fetch published blog posts from backend
async function getPosts(): Promise<Post[]> {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/posts?public=true`, {
      headers: { 'Cache-Control': 'no-store' },
    });
    
    return res.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

// Helper function to extract text from Tiptap JSON content
function extractTextFromContent(content: any): string {
  if (!content || !content.content) return 'No preview available';
  
  let text = '';
  const traverse = (node: any) => {
    if (node.type === 'text') {
      text += node.text + ' ';
    }
    if (node.content) {
      node.content.forEach(traverse);
    }
  };
  
  traverse(content);
  const preview = text.trim();
  return preview.length > 150 ? preview.slice(0, 150) + '...' : preview;
}

// Default placeholder image  
const BlogPage = async () => {
  const posts = await getPosts();
  
  return (
    <main className="min-h-screen bg-[#f6fff7]">
      <Navbar />
      
      <header className="relative py-32 bg-[url('https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-heading animate-fadeIn">Blog</h1>
          <nav className="flex justify-center">
            <ol className="flex items-center space-x-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full font-bold">
              <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
              <li><i className="fa fa-chevron-right mx-2 text-[10px]"></i></li>
              <li className="text-[#95d5b2]">Blog</li>
            </ol>
          </nav>
        </div>
      </header>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-success font-bold text-xl uppercase tracking-widest mb-2 underline">Vidhi Blogs</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#145a32] font-heading">Latest Blogs & Articles</h2>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-xl">No blog posts published yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src=""
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#145a32] mb-4 group-hover:text-success transition-colors">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {extractTextFromContent(post.content)}
                    </p>
                    {post.publishedAt && (
                      <p className="text-sm text-gray-500 mb-4">
                        Published on {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                    )}
                    <Link href={`/blog/${post.slug}`} className="inline-block bg-success text-white px-8 py-3 rounded-full font-bold hover:bg-[#145a32] transition-colors shadow-md">
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogPage;