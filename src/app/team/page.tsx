import React from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const TeamPage = () => {
  return (
    <main className="min-h-screen bg-whitesmoke">
      <Navbar />
      <PageHeader 
        title="Our Team" 
        backgroundImage="/img/12.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pages", href: "#" },
          { label: "Our Team", active: true }
        ]}
      />
      <TeamSection />
      <Footer />
    </main>
  );
};

export default TeamPage;