import React from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

export default function CompanyProfile() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Pages", href: "#" },
    { label: "About", active: true },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="About Us"
        backgroundImage="/img/12.png"
        breadcrumbs={breadcrumbs}
      />
      <AboutSection />
      <StatsSection />
      <TeamSection />
      <Footer />
    </main>
  );
}
