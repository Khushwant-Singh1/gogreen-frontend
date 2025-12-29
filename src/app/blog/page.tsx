import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const blogs = [
  { title: "The Future of Drip Irrigation", img: "https://images.unsplash.com/photo-1602526218489-dc8b0d3f28b2?auto=format&fit=crop&w=800&q=80" },
  { title: "Soil Health: The Foundation of Farming", img: "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?auto=format&fit=crop&w=800&q=80" },
  { title: "Precision Agriculture: Smart Farming Revolution", img: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=800&q=80" },
  { title: "Organic Fertilizers and Their Impact", img: "https://images.unsplash.com/photo-1607877460814-340dca82bdb3?auto=format&fit=crop&w=800&q=80" },
  { title: "Sustainable Water Use in Agriculture", img: "https://images.unsplash.com/photo-1587574293340-e63f58e8b1f3?auto=format&fit=crop&w=800&q=80" },
  { title: "Greenhouse Farming Techniques", img: "https://images.unsplash.com/photo-1600271886991-7a8db8d4bb45?auto=format&fit=crop&w=800&q=80" },
  { title: "Benefits of Crop Rotation", img: "https://images.unsplash.com/photo-1616627782325-c8f4e16e8e1a?auto=format&fit=crop&w=800&q=80" },
  { title: "How IoT Is Changing Agriculture", img: "https://images.unsplash.com/photo-1518733057094-95b53151d6d6?auto=format&fit=crop&w=800&q=80" },
  { title: "Eco-Friendly Pest Management", img: "https://images.unsplash.com/photo-1589739909474-6ccdfc2283d9?auto=format&fit=crop&w=800&q=80" },
  { title: "Smart Water Sensors in Fields", img: "https://images.unsplash.com/photo-1602526432604-029a709d99d9?auto=format&fit=crop&w=800&q=80" },
];

const BlogPage = () => {
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#145a32] mb-4 group-hover:text-success transition-colors">{blog.title}</h3>
                  <p className="text-gray-600 mb-8 line-clamp-3">
                    Explore in-depth how Vidhi Enterprises is transforming agriculture with innovation and sustainability. Our latest insights cover drip irrigation, soil health, and more.
                  </p>
                  <Link href="#" className="inline-block bg-success text-white px-8 py-3 rounded-full font-bold hover:bg-[#145a32] transition-colors shadow-md">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogPage;