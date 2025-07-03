import bgImage from "../assets/hero-bg.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  return (
    <section
      id="#home"
      data-aos="fade-in"
      className="relative min-h-[100vh] flex items-center  px-4 sm:px-8 md:px-[86px] text-white bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 bg-opacity-50 z-0"></div>

      {/* Content */}
      <div
        className="relative z-10   pt-16 md:pt-24"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        {/* Gradient Heading */}
        <h1 className="text-4xl md:text-[68px]  font-bold leading-tight">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E91335]  to-[#EDA019]">
            Live the
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E91335]  to-[#EDA019]">
            Anandam Life
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-[30px] font-bold font-inter text-[#E91335]">
          2 & 3 BHK Luxury Builder Floors in <br /> Modipuram, Meerut
        </p>

        {/* Key Subheading with bg gradient */}
        <p
          className="mt-4 inline-block px-4 py-4 font-bold font-montserrat text-[#DABF70] text-base md:text-lg bg-gradient-to-r from-[#4C000C] to-transparent "
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Freehold | RERA Registered | Bank Loan Approved
        </p>
      </div>
    </section>
  );
}
