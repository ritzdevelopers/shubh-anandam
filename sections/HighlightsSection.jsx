import backgroundImage from "../assets/hightlights-bg.png"; // Replace with your background image

import Lock2LineIcon from "remixicon-react/Lock2LineIcon";
import Home8LineIcon from "remixicon-react/Home8LineIcon";
import { LuMedal } from "react-icons/lu";

export default function HighlightsSection() {
  return (
    <section
      className="relative w-full py-24 min-h-[50vh] px-4 sm:px-16 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-white opacity-45"></div>

      {/* Content */}
      <div className="relative z-10 text-center w-full">
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8">
          {/* Card 1 */}
          <div className="w-full sm:w-[90%] md:w-[300px] lg:w-[350px] p-8 rounded-xl shadow-xl hover:shadow-2xl bg-white transition transform hover:scale-105 duration-300 ease-in-out">
            <div className="flex justify-center items-center mb-4">
              <Lock2LineIcon size={40} className=" text-gray-700" />
            </div>
            <h3 className="text-[24px] font-semibold text-gray-900">
              Trusted Developer
            </h3>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-[90%] md:w-[300px] lg:w-[350px] p-8 rounded-xl shadow-xl hover:shadow-2xl bg-white transition transform hover:scale-105 duration-300 ease-in-out">
            <div className="flex justify-center items-center mb-4">
              <LuMedal className="text-[40px] text-gray-700" />
            </div>
            <h3 className="text-[24px] font-semibold text-gray-900">
              Ready-to-Move Options
            </h3>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-[90%] md:w-[300px] lg:w-[350px] p-8 rounded-xl shadow-xl hover:shadow-2xl bg-white transition transform hover:scale-105 duration-300 ease-in-out">
            <div className="flex justify-center items-center mb-4">
              <Home8LineIcon size={40} className="text-4xl text-gray-700" />
            </div>
            <h3 className="text-[24px] font-semibold text-gray-900">
              Home for Every Need
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
