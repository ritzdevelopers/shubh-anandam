"use client";
import Header from "@/components/Header";
import AboutSection from "@/sections/AboutSection";
import HeroSection from "@/sections/HeroSection";
import WhyChoose from "@/sections/WhyChoose";
import ProjectSection from "@/sections/ProjectSection";
import EnquireNowSection from "@/sections/EnquireNowSection";
import LocationSection from "@/sections/LocationSection";
import HighlightsSection from "@/sections/HighlightsSection";
import Footer from "@/components/Footer";



const page = () => {


  return (
    <div>
      <Header />
      <HeroSection />
      <WhyChoose />
      <AboutSection />
      <ProjectSection />
      <EnquireNowSection />
      <LocationSection />
      <HighlightsSection />
      <Footer />
    </div>
  );
};

export default page;
