import React from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import CategoryProductGrid from "@/components/CategoryProductGrid";
import Footer from "@/components/Footer";

const products = [
  {
    title: "Rain Silver Sprinklers",
    image: "/img/icon/icon-4.png",
    links: [
      { name: "1-1/4\" Rain Silver Sprinkler (25m Radius)", url: "/rain-silver" },
      { name: "1-1/4\" Rain Silver Sprinkler Stand", url: "/rainsilver-stand" },
    ],
  },
  {
    title: "Rain Gold Sprinklers",
    image: "/img/icon/icon-4.png",
    links: [
      { name: "1-1/2\" Rain Gold Sprinkler (30m Radius )", url: "/rain-gold" },
      { name: "1-1/2\" Rain Gold Sprinkler Stand", url: "/raingold-stand" },
    ],
  },
  {
    title: "Rain Violet Sprinklers",
    image: "/img/icon/icon-4.png",
    links: [
      { name: "2\" Rain Violet Sprinkler (35m Radius )", url: "/rain-violet" },
      { name: "2\" Rain Violet Sprinkler Stand", url: "/rainviolet-stand" },
    ],
  },
  {
    title: "Rain Diamond Sprinklers",
    image: "/img/icon/icon-4.png",
    links: [
      { name: "1-1/2\" Rain Diamond Sprinkler", url: "/rain-diamond" },
      { name: "1-1/2\" Rain Diamond Sprinkler Stand", url: "/rain-diamond" },
    ],
  },
];

const RainSprinklerPage = () => {
  return (
    <main className="min-h-screen bg-whitesmoke">
      <Navbar />
      <PageHeader 
        title="Rain Sprinkler (Rain Gun)" 
        backgroundImage="/img/11.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Rain Sprinkler", active: true }
        ]}
      />
      <CategoryProductGrid products={products} />
      <Footer />
    </main>
  );
};

export default RainSprinklerPage;
