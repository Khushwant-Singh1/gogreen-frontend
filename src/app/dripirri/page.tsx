import React from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import CategoryProductGrid from "@/components/CategoryProductGrid";
import Footer from "@/components/Footer";

const products = [
  {
    title: "Drip Tubing",
    image: "/img/DI-1.png",
    links: [
      { name: "Plain Lateral/ Polytubes", url: "/plain-lateral" },
      { name: "Cylindrical Dripline/ Emitting Pipe/ Inline Drip Tube - PC & NON PC", url: "/cylendrical-dripline" },
      { name: "Flat Dripline PC & NON-PC", url: "/flat-dripline" },
    ],
  },
  {
    title: "Emitting Devices",
    image: "/img/DI-2.png",
    links: [
      { name: "Online PC Dripper/Emitters", url: "/onlinepc-dripper-emitter" },
      { name: "Online Emitters/Dripper NPC TurboKey", url: "/online-emitters" },
      { name: "Adjustable Dripper", url: "/adjustable-dripper" },
      { name: "Adjustable Bubbler With Filter And Take (0-420 LPH)", url: "/adjustable-bubbler" },
      { name: "2-Way/4-Way Connector", url: "/2-4-connector" },
      { name: "Pot Dripper/Arrow Dripper", url: "/arrow-dripper" },
      { name: "5.5 mm Spagetty/ Distribution Pipes / Connecting Tube/ Micro Tube", url: "/6-mm-spagetty" },
      { name: "Anti Bug Cup", url: "/anti-bug" },
      { name: "Misters", url: "/misters" },
      { name: "Micro Sprinkler", url: "/microsprinkler" },
      { name: "1-Way Foggers", url: "/1-way-fogger" },
      { name: "4-Way Foggers", url: "/4-way-fogger" },
    ],
  },
  {
    title: "Drip Fittings",
    image: "/img/DI-3.png",
    links: [
      { name: "Drip Lateral Fittings", url: "/drip-lateral-fiiting" },
    ],
  },
  {
    title: "Filtration",
    image: "/img/DI-4.png",
    links: [
      { name: "Y-Type Filter", url: "/Y-Type-filter" },
      { name: "T-Type Filter", url: "/T-Type-filter" },
      { name: "How to Choose the Right Irrigation Filter", url: "/Right-irrri.filter" },
    ],
  },
  {
    title: "Fertigation Devices",
    image: "/img/DI-5.png",
    links: [
      { name: "Ventury Injector", url: "/ventury-injector" },
    ],
  },
  {
    title: "Control Valves & ACC",
    image: "/img/DI-6.png",
    links: [
      { name: "Air Release Valve", url: "/air-release" },
      { name: "Single Union Ball Valve", url: "/single-union" },
      { name: "Double Union Ball Valve", url: "/double-union" },
      { name: "Pressure Relief Valve", url: "/pressure-relief" },
      { name: "Pressure Gauge", url: "/pressure-gauge" },
    ],
  },
];

const DripIrrigationPage = () => {
  return (
    <main className="min-h-screen bg-whitesmoke">
      <Navbar />
      <PageHeader 
        title="Drip Irrigation" 
        backgroundImage="/img/Drip-header.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Drip Irrigation", active: true }
        ]}
      />
      <CategoryProductGrid products={products} />
      <Footer />
    </main>
  );
};

export default DripIrrigationPage;