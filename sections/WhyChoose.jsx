import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import sampleImage from "../assets/why-choose.png";
import AOS from "aos";
import "aos/dist/aos.css";

const points = [
  {
    title: "Premium Lifestyle, Affordable Price",
    details: [
      "Starting at ₹45 Lakhs, own a luxury home without compromising on quality or comfort.",
    ],
  },
  {
    title: "Prime Location",
    details: [
      "Located at NH-58, Modipuram (Ansal Town), Meerut, Anandam Floors is just minutes from:",
      "Meerut Metro Station (Upcoming)",
      "Top Schools & Universities",
      "Hospitals, Malls & Public Parks",
    ],
  },
  {
    title: "World-Class Amenities",
    details: [
      " Landscaped Gardens & Kids Play Area",
      " Clubhouse with Gym & Indoor Games",
      " Private Parking & 24x7 Security",
      " Gated Community with CCTV Surveillance",
      " Jogging Track & Badminton Court",
      " Designer Entry Gate & Common Lighting",
    ],
  },
  {
    title: "Smart Investment",
    details: [
      <>
        <span className="font-bold">Freehold Property:</span> 100% ownership
        rights
      </>,
      <>
        <span className="font-bold">RERA Approved:</span> Full legal
        transparency
      </>,
      <>
        <span className="font-bold">High Rental Yield:</span> Excellent rental
        potential due to connectivity & development
      </>,
      <>
        <span className="font-bold">Bank Loans Available</span> from top
        institutions
      </>,
    ],
  },
];

export default function WhyChoose() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100 });
  }, []);

  return (
    <section className="relative flex flex-col justify-between px-4 sm:px-8 md:px-[86px] mx-auto py-16 min-h-[80vh]">
      {/* White thin overlay */}
      <div className="absolute inset-0 bg-white opacity-90 pointer-events-none"></div>
      <div className="absolute inset-0 bg-pink-50 opacity-20 pointer-events-none"></div>

      {/* Content - Heading at top left */}
      <div className="z-40 bg-white">
        <div className="relative z-10 max-w-[70rem] mb-12">
          <div className="mb-8 text-left">
            <h2
              className="text-3xl sm:text-4xl font-[600] leading-tight text-[#852438]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              WHY CHOOSE ANANDAM FLOORS?
            </h2>
            <p className="mt-4 text-gray-700 font-inter text-[20px] sm:text-[24px]">
              Experience the joy of elevated living with Shubhanandam Group’s
              flagship project — a thoughtfully planned community offering
              luxury, privacy, and comfort at an unmatched value.
            </p>
          </div>
        </div>

        {/* Columns container - responsive */}
        <div
          className="
           rounded-lg 
          flex flex-col md:flex-row gap-8 md:gap-[60px] z-10 
        "
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          {/* Column 1 - Key points list with icons */}
          <div className="space-y-6 flex-1 min-w-[280px] max-w-[400px]">
            <ul className="space-y-[26px]">
              {points.map((point, idx) => (
                <li
                  key={point.title}
                  onClick={() => setSelectedIndex(idx)}
                  className={`flex items-center gap-3 cursor-pointer font-montserrat text-gray-800 ${
                    selectedIndex === idx ? "text-[#AA0E27] font-semibold" : ""
                  }`}
                >
                  <FaRegCheckCircle
                    className={`w-6 h-6 flex-shrink-0 ${
                      selectedIndex === idx ? "text-[#AA0E27]" : ""
                    }`}
                  />
                  <span
                    className={`text-[16px] sm:text-[18px] ${
                      selectedIndex === idx ? "text-[#AA0E27]" : ""
                    }`}
                  >
                    {point.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 - Details for selected item with responsive widths */}
          <div className="space-y-6 flex-1 min-w-[280px] max-w-[450px] w-full">
            <div className="text-gray-900 font-semibold text-lg font-montserrat space-y-[26px]">
              <address>
                <p>
                  Details about{" "}
                  <span className="text-[#AA0E27]">
                    {points[selectedIndex].title}
                  </span>
                  :
                </p>
              </address>
            </div>
            <ul className="space-y-[22px] font-inter text-gray-700 list-disc list-inside text-sm sm:text-base">
              {points[selectedIndex].details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Image */}
          <div
            className="flex justify-end max-w-[700px] w-full flex-1 min-w-[280px]"
            data-aos="zoom-in-left"
          >
            <Image
              src={sampleImage}
              alt="Why Choose Anandam Life"
              className="object-cover 
                    transition-transform duration-300 ease-in-out hover:scale-101"
              width={520}
              height={520}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
