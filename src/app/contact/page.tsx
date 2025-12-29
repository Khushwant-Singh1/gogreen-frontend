"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const [status, setStatus] = React.useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-whitesmoke">
      <Navbar />
      <PageHeader 
        title="Contact Us" 
        backgroundImage="/img/Drip-header.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", active: true }
        ]}
      />
      
      <div className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Contact Info */}
          <div className="bg-gray-900 text-white p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <p className="mb-12 text-gray-400">
              We&apos;re here to help! Reach out to us for any inquiries about our products or services.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-6 shrink-0">
                  <i className="fa fa-map-marker-alt text-primary text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Our Office</h4>
                  <p className="text-gray-400">123 Irrigation Way, Agri Tech Park, Industrial Area, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-6 shrink-0">
                  <i className="fa fa-envelope text-primary text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Email Us</h4>
                  <p className="text-gray-400">info@vidhienterprises.com</p>
                  <p className="text-gray-400">support@vidhienterprises.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-6 shrink-0">
                  <i className="fa fa-phone-alt text-primary text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Call Us</h4>
                  <p className="text-gray-400">+91 98765 43210</p>
                  <p className="text-gray-400">+91 12345 67890</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-8 lg:p-12">
             <h2 className="text-3xl font-bold mb-6 text-gray-900">Send Message</h2>
             <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" name="firstName" required placeholder="First Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  <input type="text" name="lastName" required placeholder="Last Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <input type="text" name="phone" required placeholder="Mobile No." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" />
                   <input type="email" name="email" required placeholder="Email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <textarea rows={4} name="message" required placeholder="Your Message" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"></textarea>
                <button 
                  disabled={status === "sending"}
                  className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-secondary transition shadow-lg disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Submit Now"}
                </button>
                
                {status === "success" && (
                  <div className="mt-4 text-green-600 font-bold text-center">
                    Thank you! Your message was sent.
                  </div>
                )}
                {status === "error" && (
                  <div className="mt-4 text-red-600 font-bold text-center">
                    Oops! Something went wrong. Please try again.
                  </div>
                )}
             </form>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ContactPage;
