"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  return (
    <section 
      className="relative py-24 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/img/design-5.png')" }}
    >
      <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 lg:p-12">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Drop Us a Message!</h2>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Mobile No.</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Mobile"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Email"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Leave a message here"
                ></textarea>
              </div>
              
              <div className="md:col-span-2 text-center mt-4">
                <button 
                  disabled={status === "sending"}
                  className="bg-primary text-white font-bold py-4 px-12 rounded-full hover:bg-secondary transition-all shadow-lg hover:shadow-xl disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Submit Now"}
                </button>
                
                {status === "success" && (
                  <div className="mt-4 text-green-600 font-bold animate-fadeIn">
                    Thank you! Your message was sent.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
