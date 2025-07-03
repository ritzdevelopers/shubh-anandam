import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
import sampleImage from "../assets/why-choose.png";
import bgImage from "../assets/why-choose-bg.png";

export default function WhyChoose() {
  return (
    <section
      className="relative px-4 sm:px-8 md:px-[86px] mx-auto py-16 min-h-[80vh]"
      style={{ background: `url(${bgImage.src}) center/cover no-repeat` }}
    >
      {/* White thin overlay */}
      <div className="absolute inset-0 bg-white opacity-90 pointer-events-none"></div>

      {/* Content - Heading at top left */}
      <div className="relative z-10 max-w-xl mb-12">
        <div className="mb-8 text-left">
          <h2
            className="text-4xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            <span className="block text-black">Why Choose</span>
            <span className="block text-[#AA0E27]">Anandam Life?</span>
          </h2>
          <p className="mt-4 text-gray-700 font-inter text-[24px] md:text-lg">
            Discover the unparalleled luxury, comfort, and convenience of our
            carefully designed builder floors in Modipuram, Meerut.
          </p>
        </div>
      </div>

      {/* Columns container */}
      <div
        className="
          bg-white rounded-lg max-w-[1400px] w-full px-6 py-8
          flex flex-col gap-10
          relative z-10
          md:absolute md:bottom-4 md:right-0 md:flex-row md:gap-15 md:items-start
          "
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        {/* Column 1 - Key points list with icons */}
        <div className="space-y-6 max-w-xl flex-1 min-w-[280px]">
          <ul className="space-y-[26px]">
            {[
              "Premium Lifestyle, Affordable Price",
              "Prime Location",
              "World-Class Amenities",
              "Smart Investment",
            ].map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 font-montserrat text-gray-800 hover:text-[#AA0E27]"
              >
                <FaRegCheckCircle className="w-6 h-6 flex-shrink-0" />
                <span className="text-[18px]">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 - Address + Key points */}
        <div className="space-y-6 max-w-xl flex-1 min-w-[280px]">
          <div className="flex items-center gap-3 text-gray-900 font-semibold text-lg font-montserrat space-y-[26px]">
            <address>
              <p>
                Located at NH-58, Modipuram <br /> (Ansal Town), Meerut, <br />{" "}
                Anandam Floors is just minutes from:
              </p>
            </address>
          </div>
          <ul className="space-y-[26px] font-inter text-gray-700 list-disc list-inside">
            {[
              "Meerut Metro Station (Upcoming)",
              "Top Schools & Universities",
              "Hospitals, Malls & Public Parks",
              "Hospitals, Malls & Public Park",
            ].map((point) => (
              <li key={point}>{point}</li>
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
