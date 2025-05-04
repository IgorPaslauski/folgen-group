import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import LanguageProvider from "@/components/LanguageToggle";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LanguageProvider>
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ProjectsSection />
          <CtaSection />
          <ContactSection />
        </main>
        <Footer />
      </LanguageProvider>
    </div>
  );
};

export default Index;
