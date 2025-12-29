import React from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

const FilterGuidePage = () => {
  return (
    <main className="min-h-screen bg-[#cbedcb]">
      <Navbar />
      
      <PageHeader 
        title="How to Choose the Right Irrigation Filter"
        backgroundImage="/img/9.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Filter Guide", active: true }
        ]}
      />

      <section className="py-12 max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-green-800 underline decoration-green-500 underline-offset-8">Know Your Water Source</h2>
        <p className="text-xl text-gray-700 leading-relaxed font-medium">
          Each water source contains different types of impurities. Choosing the right filter is critical for system longevity.
        </p>
      </section>

      <section className="py-12 max-w-5xl mx-auto px-4 overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-2xl overflow-hidden shadow-xl">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="py-5 px-6 text-left text-xl">Water Source</th>
              <th className="py-5 px-6 text-left text-xl">Common Impurities</th>
              <th className="py-5 px-6 text-left text-xl">Recommended Filter Type</th>
            </tr>
          </thead>
          <tbody className="text-green-900 font-bold divide-y divide-gray-100">
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="py-5 px-6">Borewell / Tube well</td>
              <td className="py-5 px-6 font-medium text-gray-600">Sand, silt, small particles</td>
              <td className="py-5 px-6">Screen Filter</td>
            </tr>
            <tr className="bg-gray-50/50 hover:bg-gray-50 transition-colors">
              <td className="py-5 px-6">Canal / River</td>
              <td className="py-5 px-6 font-medium text-gray-600">Algae, leaves, organic matter</td>
              <td className="py-5 px-6">Disc Filter</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="py-5 px-6">Pond / Tank</td>
              <td className="py-5 px-6 font-medium text-gray-600">Sand + organic matter</td>
              <td className="py-5 px-6">Sand Filter + Disc Filter (Combination)</td>
            </tr>
            <tr className="bg-gray-50/50 hover:bg-gray-50 transition-colors">
              <td className="py-5 px-6">Municipal / Tap Water</td>
              <td className="py-5 px-6 font-medium text-gray-600">Minor dust or particles</td>
              <td className="py-5 px-6">Screen Filter</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="py-12 max-w-4xl mx-auto px-4">
        <div className="bg-white p-10 rounded-[32px] shadow-2xl border-l-8 border-green-700 text-center space-y-6">
          <h2 className="text-3xl font-bold text-green-800 underline decoration-green-500 underline-offset-8">Check the Water Quality</h2>
          <ul className="text-xl text-[#03037b] font-bold space-y-4">
            <li className="flex items-center justify-center gap-3">
              <span className="text-green-600">●</span> If water has sand or fine soil → Use Screen Filter
            </li>
            <li className="flex items-center justify-center gap-3">
              <span className="text-green-600">●</span> If water has algae or organic matter → Use Disc Filter
            </li>
            <li className="flex items-center justify-center gap-3">
              <span className="text-green-600">●</span> If water is muddy or mixed with debris → Use Sand + Disc Filter
            </li>
          </ul>
        </div>
      </section>

      <section className="py-12 max-w-5xl mx-auto px-4 overflow-x-auto">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-8 underline decoration-green-500 underline-offset-8">Match the Filter to Your Irrigation Type</h2>
        <table className="min-w-full bg-white border border-gray-300 rounded-2xl overflow-hidden shadow-xl">
          <thead className="bg-green-700 text-white text-center">
            <tr>
              <th className="py-5 px-6 text-left text-xl">Irrigation Type</th>
              <th className="py-5 px-6 text-left text-xl">Suitable Filter</th>
            </tr>
          </thead>
          <tbody className="text-green-900 font-bold divide-y divide-gray-100">
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="py-5 px-6">Drip Irrigation</td>
              <td className="py-5 px-6">Disc Filter / Screen Filter</td>
            </tr>
            <tr className="bg-gray-50/50 hover:bg-gray-50 transition-colors">
              <td className="py-5 px-6">Sprinkler System</td>
              <td className="py-5 px-6">Screen Filter / Disc Filter</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="py-5 px-6">Large Area / Farm</td>
              <td className="py-5 px-6">Sand Filter + Disc Filter</td>
            </tr>
            <tr className="bg-gray-50/50 hover:bg-gray-50 transition-colors">
              <td className="py-5 px-6">Greenhouse / Nursery</td>
              <td className="py-5 px-6">Disc Filter / Screen Filter</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="py-24 bg-green-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10 underline decoration-green-500 underline-offset-8">Consider Flow Rate and Micron Rating</h2>
          <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-green-100">
            <p className="text-xl text-green-800 font-bold mb-8">💧 Choose a filter that matches your system&apos;s flow rate (m³/hr).</p>
            <p className="text-xl text-green-800 font-bold mb-6">🌿 Micron rating decides how fine the filtration is:</p>
            <ul className="text-lg text-green-700 space-y-4">
              <li className="font-bold bg-green-50 py-2 rounded-lg">○ 100–150 Micron → Ideal for drip irrigation</li>
              <li className="font-bold bg-green-50 py-2 rounded-lg">○ 200 Micron → Ideal for sprinklers</li>
              <li className="font-bold bg-green-50 py-2 rounded-lg">○ Below 100 Micron → For very fine filtration</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#7bbc7b] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 underline underline-offset-8">Go for Easy Maintenance</h2>
          <p className="text-2xl mb-12 font-light">Always choose a filter that is easy to clean and maintain:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Screen Filter", desc: "Easy to remove and wash manually" },
              { title: "Disc Filter", desc: "Can be cleaned or backwashed easily" },
              { title: "Sand Filter", desc: "Requires regular backwashing for best performance" }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold mb-4">● {item.title}</h3>
                <p className="text-lg font-medium opacity-90">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default FilterGuidePage;
