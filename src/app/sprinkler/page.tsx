import React from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import CategoryProductGrid from "@/components/CategoryProductGrid";
import Footer from "@/components/Footer";

const products = [
  {
    title: "Brass Impact Sprinklers",
    image: "/img/icon/icon-4.png",
    links: [
      { name: "Brass Full Circle Sprinklers", url: "/full-circle" },
      { name: "Brass Part Circle Sprinklers", url: "/part-circle" },
    ],
  },
  {
    title: "Metal Sprinklers",
    image: "/img/icon/icon-4.png",
    links: [
      { name: "Aluminium Sprinklers", url: "/aluminium-spri" },
    ],
  },
  {
    title: "Plastic Impact Sprinklers",
    image: "/img/icon/icon-4.png",
    links: [
      { name: "Plastic Full Circle Sprinklers", url: "/plastci-full-circle" },
    ],
  },
  {
    title: "Sprinkler Accessories",
    image: "/img/icon/icon-4.png",
    links: [
      { name: "Service Saddles", url: "/service-saddles" },
      { name: "Mini Sprinkler Accessories", url: "/mini-sprinkler-accessories" },
      { name: "Riser Pipes", url: "/resier-pipe" },
    ],
  },
];

const SprinklerPage = () => {
  return (
    <main className="min-h-screen bg-whitesmoke">
      <Navbar />
      <PageHeader 
        title="Sprinkler Irrigation" 
        backgroundImage="/img/C1.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Sprinkler Irrigation", active: true }
        ]}
      />
      <CategoryProductGrid products={products} />
      <Footer />
    </main>
  );
};

export default SprinklerPage;
