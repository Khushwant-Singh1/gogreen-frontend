import React from "react";
import Image from "next/image";
import { CountryData } from "@/data/country-data";
import Navbar from "./Navbar";
import PageHeader from "./PageHeader";
import Footer from "./Footer";

const CountryDetail = ({ country, slug }: { country: CountryData; slug: string }) => {
  return (
    <main className="min-h-screen bg-whitesmoke">
      <Navbar />
      {/* Fallback image if specific country image not available, or map it */}
      <PageHeader
        title={country.title}
        backgroundImage="/img/12.png" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Global Presence", href: "/global-presence" },
          { label: country.title, active: true },
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{country.title}</h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 border-l-4 border-primary pl-6 italic">
              {country.intro}
            </p>

            {country.marketInsights && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-secondary mb-4">Market Insights</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {country.marketInsights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {country.productsSupplied && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-secondary mb-4">Products We Supply</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {country.productsSupplied.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {country.industriesServed && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-secondary mb-4">Industries We Serve</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {country.industriesServed.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {country.whyChoose && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-secondary mb-4">Why Choose Vidhi Enterprises</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {country.whyChoose.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {country.flagImage && (
              <div className="mt-12 flex justify-center">
                <div className="relative w-64 h-44 shadow-lg rounded-lg overflow-hidden border border-gray-100">
                  <Image src={country.flagImage} alt={`${country.title} flag`} fill className="object-contain" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CountryDetail;
