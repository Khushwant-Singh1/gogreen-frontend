import React from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import CategoryProductGrid from "@/components/CategoryProductGrid";
import Footer from "@/components/Footer";

const products = [
  {
    title: "Vidhi Kits",
    image: "/img/icon/icon-4.png",
    links: [
      { name: "Vidhi Drip Kit", url: "/vidhi-dripkit" },
      { name: "EcoAcre Pro", url: "/ecoacre-vidhi-kit" },
    ],
  },
  {
    title: "Vertical Garden",
    image: "/img/icon/icon-4.png",
    links: [
      { name: "Vertical Garden Pots /Hanging Pot", url: "/vertical-garden" },
    ],
  },
];

const VidhiKitPage = () => {
  return (
    <main className="min-h-screen bg-whitesmoke">
      <Navbar />
      <PageHeader 
        title="Vidhi Kit" 
        backgroundImage="/img/vidhikit-head.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Vidhi Kit", active: true }
        ]}
      />
      <CategoryProductGrid products={products} />
      <Footer />
    </main>
  );
};

export default VidhiKitPage;
