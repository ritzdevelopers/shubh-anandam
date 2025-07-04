"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Add this at the top
import sampleImage1 from "../assets/project-image-1.png"; // Replace with actual image
import sampleImage2 from "../assets/project-image-2.png"; // Replace with actual image
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ProjectSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const projects = [
    {
      title: "Anandam Floor I",
      subtitle: "lorem lorem lorem lorem lorem",
      image: sampleImage2,
    },
    {
      title: "Anandam Floor II",
      subtitle: "lorem loremlorem lorem",
      image: sampleImage1,
    },
    {
      title: "Anandam Floor III",
      subtitle: "lorem lorem lorem lorem lorem",
      image: sampleImage2,
    },
    {
      title: "Anandam Floor IV",
      subtitle: "lorem lorem lorems",
      image: sampleImage1,
    },
  ];

  return (
    <section
      id="projects"
      data-aos="zoom-in"
      className="px-4 sm:px-8 md:px-16 py-20 bg-[#f5f5f5] text-center"
    >
      {/* Heading */}
      <div className=" mx-auto mb-12">
        <h2
          className="text-4xl md:text-5xl font-medium text-gray-900 mb-4"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          PROJECTS
        </h2>
        <p className="text-lg md:text-[36px] max-w-[1000px] mx-auto text-gray-600 font-inter">
          EXPLORE SPACIOUS LAYOUTS WITH SMART DESIGN, NATURAL VENTILATIO, AND
          MODERN INTERIORS.
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="relative max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // assign navigation buttons
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className=" rounded  overflow-hidden rounded-t-4xl">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full rounded-t-4xl object-cover 
                    transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                  {/* <div className="absolute rounded-4xl inset-0 bg-gradient-to-t to-[#B2001A]/20 from-[#4C000B]/20 z-10 pointer-events-none"></div> */}
                </div>
                <div className="p-5 text-left shadow-3xl bg-white">
                  <h3
                    className="text-xl font-semibold text-[#DABF70]"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-600 font-inter">{project.subtitle}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="mt-12 flex justify-center items-center gap-4">
          <button
            ref={prevRef}
            className="w-15 h-15 flex items-center justify-center rounded-full bg-white text-[black] shadow-md hover:shadow-lg transition border border-black cursor-pointer"
            aria-label="Previous Slide"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            ref={nextRef}
            className="w-15 h-15 flex items-center justify-center rounded-full bg-white text-[black] shadow-md hover:shadow-lg transition border border-black cursor-pointer"
            aria-label="Next Slide"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
