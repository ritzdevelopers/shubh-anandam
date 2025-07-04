"use client";

import Image from "next/image";
import lcoation1 from "../assets/location1.png";
import lcoation2 from "../assets/location2.png";
import lcoation3 from "../assets/location3.png";
import lcoation4 from "../assets/location4.png";
import locationImage from "../assets/location-map.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function LocationSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  return (
    <section className="w-full px-4 sm:px-0 flex flex-col sm:flex-row items-start relative mb-5 sm:mb-10">
      {/* Left Side */}
      <div className="w-full sm:w-1/2 py-8 text-center sm:text-left sm:pl-16 sm:pr-10 ">
        <div className="sm:flex gap-2.5">
          <h2
            className="text-[36px] font-bold text-[#852438]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            LOCATION
          </h2>
          <h2 className="text-[36px] font-bold text-black">ADVANTAGE</h2>
        </div>

        <p className="text-[26px] text-gray-700">
          MODIPURAM, MEERUT - THE NEW URBAN HUB
        </p>

        <ul className="space-y-4 mt-5" data-aos="fade-down">
          {[
            {
              icon: lcoation1,
              text: "NH-58 & Delhi–Dehradun Expressway Access",
            },
            {
              icon: lcoation2,
              text: "Proposed Meerut Metro Station Nearby",
            },
            {
              icon: lcoation3,
              text: "15 Minutes to City Centre",
            },
            {
              icon: lcoation4,
              text: "Seamless Delhi-NCR Connectivity",
            },
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-4 bg-gray-100 p-4 rounded-xl"
            >
              <span className="bg-white rounded-full flex items-center justify-center">
                <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] border border-gray-200 rounded-full overflow-hidden flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt="location"
                    className="w-full h-full object-contain"
                  />
                </div>
              </span>
              <div>
                <h3 className="font-semibold text-lg">{item.text}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side - Image (touches top and right, keeps size) */}
      <div className="w-full sm:w-1/2 relative pt-8 sm:pt-0">
        <div className="w-full sm:absolute sm:top-0 sm:right-0 sm:w-[50vw]">
          <Image
            src={locationImage}
            alt="Location Map"
            layout="responsive"
            width="full"
            height="full"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
