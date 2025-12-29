import React from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import CategoryProductGrid from "@/components/CategoryProductGrid";
import Footer from "@/components/Footer";

const products = [
  {
    title: "Brown Drip Tubing",
    image: "/img/icon/icon-4.png",
    links: [
      { name: "Plain Lateral/ Polytubes", url: "/plain-drip" },
      { name: "Cylindrical Dripline/ Emitting Pipe/ Inline Drip Tube - PC & NON PC", url: "/inline-drip" },
    ],
  },
  {
    title: "Emitting Devices",
    image: "/img/icon/icon-4.png",
    links: [
      { name: "Online Emitters PC", url: "/online-landscape" },
      { name: "Online Emitters NPC TurboKey Drippers", url: "/online-turbokey-lands" },
      { name: "2-Way / 4-Way Connector", url: "/2-way-landscape" },
      { name: "Pot Dripper/Arrow Dripper", url: "/arrow-landscape" },
      { name: "Anti Bug Cup", url: "/anti-bug-landscape" },
      { name: "6 mm Spagetty Pipe / Distributor Pipe", url: "/6mm-landscape" },
    ],
  },
  {
    title: "Drip Fittings & Accessories",
    image: "/img/icon/icon-4.png",
    links: [
      { name: "Drip Fittings", url: "/drip-fitting-landscape" },
    ],
  },
  {
    title: "Control Valves & ACC",
    image: "/img/DI-6.png",
    links: [
      { name: "Air Release Valve", url: "/air-realease-landscape" },
      { name: "Single Union Ball Valve", url: "/single-union-landscape" },
      { name: "Double Union Ball Valve", url: "/double-union-landscape" },
      { name: "Pressure Relief Valve", url: "/prv" },
      { name: "Pressure Gauge", url: "/pressure-gauge-landscape" },
    ],
  },
  {
    title: "Accessories For Pop Ups",
    image: "/img/icon/icon-4.png",
    links: [
      { name: "Valve Box", url: "/valve-box" },
      { name: "Saddles", url: "/saddles" },
      { name: "Swing Joint", url: "/swing-joint" },
      { name: "Quick Coupling Valves,Key & Elbow", url: "/quick-coupling" },
    ],
  },
];

const LandscapePage = () => {
  return (
    <main className="min-h-screen bg-whitesmoke">
      <Navbar />
      <PageHeader 
        title="Landscape Irrigation" 
        backgroundImage="/img/12.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Landscape Irrigation", active: true }
        ]}
      />
      <CategoryProductGrid products={products} />
      <Footer />
    </main>
  );
};

export default LandscapePage;