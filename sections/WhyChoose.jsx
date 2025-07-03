// import Image from "next/image";
// import { FaRegCheckCircle } from "react-icons/fa";
// import { useState } from "react";
// import sampleImage from "../assets/why-choose.png";
// import bgImage from "../assets/why-choose-bg.png";

// const points = [
//   {
//     title: "Premium Lifestyle, Affordable Price",
//     details: [
//       "Starting at ₹45 Lakhs, own a luxury home without compromising on quality or comfort.",
//     ],
//   },
//   {
//     title: "Prime Location",
//     details: [
//       "Located at NH-58, Modipuram (Ansal Town), Meerut, Anandam Floors is just minutes from:",
//       "Meerut Metro Station (Upcoming)",
//       "Top Schools & Universities",
//       "Hospitals, Malls & Public Parks",
//     ],
//   },
//   {
//     title: "World-Class Amenities",
//     details: [
//       " Landscaped Gardens & Kids Play Area",
//       " Clubhouse with Gym & Indoor Games",
//       " Private Parking & 24x7 Security",
//       " Gated Community with CCTV Surveillance",
//       " Jogging Track & Badminton Court",
//       " Designer Entry Gate & Common Lighting",
//     ],
//   },
//   {
//     title: "Smart Investment",
//     details: [
//       <>
//         <span className="font-bold">Freehold Property:</span> 100% ownership
//         rights
//       </>,
//       <>
//         <span className="font-bold">RERA Approved:</span> Full legal
//         transparency
//       </>,
//       <>
//         <span className="font-bold">High Rental Yield:</span> Excellent rental
//         potential due to connectivity & development
//       </>,
//       <>
//         <span className="font-bold">Bank Loans Available</span> from top
//         institutions
//       </>,
//     ],
//   },
// ];

// export default function WhyChoose() {
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   return (
//     <section
//       className="relative flex flex-col justify-between px-4 sm:px-8 md:px-[86px] mx-auto py-16 min-h-[80vh]"
//       style={{ background: `url(${bgImage.src}) center/cover no-repeat` }}
//     >
//       {/* White thin overlay */}
//       <div className="absolute inset-0 bg-white opacity-90 pointer-events-none"></div>

//       {/* Content - Heading at top left */}
//       <div className="relative z-10 max-w-4xl mb-12">
//         <div className="mb-8 text-left">
//           <h2
//             className="text-4xl font-bold leading-tight"
//             style={{ fontFamily: "var(--font-montserrat)" }}
//           >
//             <span className="block text-black">Why Choose</span>
//             <span className="block text-[#AA0E27]">Anandam Floors?</span>
//           </h2>
//           <p className="mt-4 text-gray-700 font-inter text-[24px] md:text-lg">
//             Experience the joy of elevated living with Shubhanandam Group’s
//             flagship project — a thoughtfully planned community offering luxury,
//             privacy, and comfort at an unmatched value.
//           </p>
//         </div>
//       </div>

//       {/* Columns container - aligned bottom-right, no overlap */}
//       <div
//         className="
//           bg-white rounded-lg px-6 py-10
//           flex flex-col md:flex-row gap-10 md:gap-[60px] items-start
//           self-end mt-auto w-fit z-10
//         "
//         style={{ fontFamily: "var(--font-montserrat)" }}
//       >
//         {/* Column 1 - Key points list with icons */}
//         <div className="space-y-6 max-w-xl flex-1 min-w-[280px]">
//           <ul className="space-y-[26px]">
//             {points.map((point, idx) => (
//               <li
//                 key={point.title}
//                 onClick={() => setSelectedIndex(idx)}
//                 className={`flex items-center gap-3 cursor-pointer font-montserrat text-gray-800 hover:text-[#AA0E27] ${
//                   selectedIndex === idx ? "text-[#AA0E27] font-semibold" : ""
//                 }`}
//               >
//                 <FaRegCheckCircle
//                   className={`w-6 h-6 flex-shrink-0 ${
//                     selectedIndex === idx ? "text-[#AA0E27]" : ""
//                   }`}
//                 />
//                 <span
//                   className={`text-[18px] ${
//                     selectedIndex === idx ? "text-[#AA0E27]" : ""
//                   }`}
//                 >
//                   {point.title}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Column 2 - Details for selected item with fixed width */}
//         <div className="space-y-6 flex-1 min-w-[300px] max-w-[400px] w-[380px]">
//           <div className="text-gray-900 font-semibold text-lg font-montserrat space-y-[26px]">
//             <address>
//               <p>
//                 Details about{" "}
//                 <span className="text-[#AA0E27]">
//                   {points[selectedIndex].title}
//                 </span>
//                 :
//               </p>
//             </address>
//           </div>
//           <ul className="space-y-[26px] font-inter text-gray-700 list-disc list-inside">
//             {points[selectedIndex].details.map((detail, i) => (
//               <li key={i}>{detail}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Column 3 - Image */}
//         <div className="flex justify-end max-w-[700px] w-full flex-1 min-w-[280px]">
//           <Image
//             src={sampleImage}
//             alt="Why Choose Anandam Life"
//             className="object-cover rounded-md"
//             width={520}
//             height={520}
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
import { useState } from "react";
import sampleImage from "../assets/why-choose.png";
import bgImage from "../assets/why-choose-bg.png";

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

  return (
    <section
      className="relative flex flex-col justify-between px-4 sm:px-8 md:px-[86px] mx-auto py-16 min-h-[80vh]"
      style={{ background: `url(${bgImage.src}) center/cover no-repeat` }}
    >
      {/* White thin overlay */}
      <div className="absolute inset-0 bg-white opacity-90 pointer-events-none"></div>

      {/* Content - Heading at top left */}
      <div className="relative z-10 max-w-4xl mb-12">
        <div className="mb-8 text-left">
          <h2
            className="text-3xl sm:text-4xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            <span className="block text-black">Why Choose</span>
            <span className="block text-[#AA0E27]">Anandam Floors?</span>
          </h2>
          <p className="mt-4 text-gray-700 font-inter text-lg sm:text-xl">
            Experience the joy of elevated living with Shubhanandam Group’s
            flagship project — a thoughtfully planned community offering luxury,
            privacy, and comfort at an unmatched value.
          </p>
        </div>
      </div>

      {/* Columns container - responsive */}
      <div
        className="
          bg-white rounded-lg px-6 py-8
          flex flex-col md:flex-row gap-8 md:gap-[60px] items-start
          self-end mt-auto w-full max-w-[1400px] z-10
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
                className={`flex items-center gap-3 cursor-pointer font-montserrat text-gray-800 hover:text-[#AA0E27] ${
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
        <div className="flex justify-end max-w-[700px] w-full flex-1 min-w-[280px]">
          <Image
            src={sampleImage}
            alt="Why Choose Anandam Life"
            className="object-cover rounded-md"
            width={520}
            height={520}
            priority
          />
        </div>
      </div>
    </section>
  );
}
