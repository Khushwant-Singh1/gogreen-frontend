import React from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const ProductsPage = () => {
  return (
    <main className="min-h-screen bg-whitesmoke">
      <Navbar />
      <PageHeader 
        title="Our Products" 
        backgroundImage="/img/Drip-header.png" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", active: true }
        ]}
      />
      <ProductGrid />
      <Footer />
    </main>
  );
};

export default ProductsPage;
