import BlogPostViewer from '@/components/BlogPostViewer';
import axios from 'axios';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const API_BASE_URL = process.env.NEXT_PUBLIC_NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';

// Disable caching for demo purposes to see new posts immediately
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

async function getPost(slug: string): Promise<Post | null> {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/posts/${slug}`, {
      headers: { 'Cache-Control': 'no-store' },
    });
    
    return res.data;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f6fff7]">
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative py-32 bg-gradient-to-br from-[#145a32] to-[#52b788] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <nav className="flex justify-center mb-8">
            <ol className="flex items-center space-x-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full font-bold text-sm">
              <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
              <li><i className="fa fa-chevron-right mx-2 text-[10px]"></i></li>
              <li><Link href="/blog" className="hover:text-primary transition">Blog</Link></li>
              <li><i className="fa fa-chevron-right mx-2 text-[10px]"></i></li>
              <li className="text-[#95d5b2]">{post.title}</li>
            </ol>
          </nav>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-heading animate-fadeIn max-w-4xl mx-auto">
            {post.title}
          </h1>
          <div className="flex items-center justify-center text-white/90 text-sm gap-4">
            <time dateTime={post.publishedAt || post.createdAt}>
              {post.publishedAt 
                ? new Date(post.publishedAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })
                : 'Draft'}
            </time>
            <span>•</span>
            <span>By Vidhi Enterprises</span>
          </div>
        </div>
      </header>

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <BlogPostViewer content={post.content} />
        </div>
        
        {/* Back to Blog Button */}
        <div className="mt-12 text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 bg-success text-white px-8 py-3 rounded-full font-bold hover:bg-[#145a32] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <i className="fa fa-arrow-left"></i>
            Back to All Posts
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
