"use client";

import Image from "next/image";
import lcoation1 from "../assets/location1.png";
import lcoation2 from "../assets/location2.png";
import lcoation3 from "../assets/location3.png";
import lcoation4 from "../assets/location4.png";
import locationImage from "../assets/location-map.png";

export default function LocationSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-16 flex flex-col sm:flex-row items-center sm:gap-12">
      {/* Left Side - Heading, Subheading, Key Points */}
      <div className="w-full sm:w-1/2 space-y-6 text-center sm:text-left">
        <h2
          className="text-[36px] font-bold text-[#630412]"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          LOCATION ADVANTAGE
        </h2>
        <p className="text-[26px] text-gray-700">
          MODIPURAM, MEERUT - THE NEW URBAN HUB
        </p>

        {/* Key Points List */}
        <ul className="space-y-4 mt-6">
          <li className="flex items-center space-x-4  bg-gray-100 p-4 rounded-xl">
            <span className="sm:w-[100px] sm:h-[100px] border border-gray-200 bg-white rounded-full flex items-center justify-center">
              <Image src={lcoation1} alt="location" width={100} height={100} />
            </span>
            <div>
              <h3 className="font-semibold text-lg">
                NH-58 & Delhi–Dehradun Expressway Access
              </h3>
            </div>
          </li>

          <li className="flex items-center space-x-4 bg-gray-100 p-4 rounded-xl">
            <span className="sm:w-[100px] sm:h-[100px] border border-gray-200 bg-white rounded-full flex items-center justify-center">
              <Image src={lcoation2} alt="location" width={100} height={100} />
            </span>
            <div>
              <h3 className="font-semibold text-lg">
                Proposed Meerut Metro Station Nearby
              </h3>
            </div>
          </li>

          <li className="flex items-center space-x-4 bg-gray-100 p-4 rounded-xl">
            <span className="sm:w-[100px] sm:h-[100px] w-19 h-19 border border-gray-200 bg-white rounded-full flex items-center justify-center">
              <Image src={lcoation3} alt="location" width={100} height={100} />
            </span>
            <div>
              <h3 className="font-semibold text-lg">
                15 Minutes to City Centre
              </h3>
            </div>
          </li>

          <li className="flex items-center space-x-4 bg-gray-100 p-4 rounded-xl">
            <span className="sm:w-[100px] sm:h-[100px] border border-gray-200 bg-white rounded-full flex items-center justify-center">
              <Image src={lcoation4} alt="location" width={100} height={100} />
            </span>
            <div>
              <h3 className="font-semibold text-lg">
                Seamless Delhi-NCR Connectivity
              </h3>
            </div>
          </li>
        </ul>
      </div>

      {/* Right Side - Image */}
      <div className="w-full sm:w-1/2 mt-8 sm:mt-0 relative">
        <Image
          src={locationImage}
          alt="Location Image"
          layout="responsive"
          width={800}
          height={600}
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
    </section>
  );
}
