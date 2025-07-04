import bgImage from "../assets/about-bg.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);
  return (
    <section
      id="about"
      className="relative px-4 sm:px-8 md:px-16 py-20 h-[70vh] text-center flex items-center justify-center"
      style={{
        background: `url(${bgImage.src}) center/cover no-repeat`,
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-white">
        {/* Subheading */}
        <p className="text-[24px] uppercase tracking-wider mb-3 font-semibold text-white">
          About
        </p>

        {/* Heading */}
        <h2
          className="text-4xl md:text-[42px] font-[600] text-[#DABF70] mb-6"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          SHUBHANANDAM GROUP
        </h2>

        {/* Paragraph */}
        <p className="text-lg md:text-[22px] font-inter mb-8 text-gray-100">
          A real estate brand committed to{" "}
          <span className="font-[600]">
            affordable luxury, quality craftsmanship,{" "}
          </span>{" "}
          and <span className="font-[600]"> timely delivery </span>,
          Shubhanandam Group is redefining residential living in Tier-2 cities.
          Backed by a span leadership team and a mission to deliver over{" "}
          <span className="font-[600]"> 100,000 homes by 2025 </span>, the group
          is trusted by hundreds of homeowners across Meerut.
        </p>

        {/* Button */}
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-[white] text-black hover:text-white font-semibold rounded-4xl hover:bg-[#DABF70] transition"
          data-aos="fade-in"
        >
          Book a site visit now
        </a>
      </div>
    </section>
  );
}
