

'use client';

import Image from 'next/image';
import { GiRoad, GiNetworkBars } from 'react-icons/gi';
import { PiTrainThin } from 'react-icons/pi';
import { LuClock } from 'react-icons/lu';
import locationImage from '../assets/location-map.png'; // Replace with your image

export default function LocationSection() {
    return (
        <section className="w-full py-16 px-4 sm:px-16 bg-gray-100 flex flex-col sm:flex-row items-center sm:gap-12">
            {/* Left Side - Heading, Subheading, Key Points */}
            <div className="w-full sm:w-1/2 space-y-6 text-center sm:text-left">
                <h2 className="text-[36px] font-bold text-[#630412]" style={{ fontFamily: "var(--font-montserrat)" }}>
                    LOCATION ADVANTAGE
                </h2>
                <p className="text-[26px] text-gray-700">
                    MODIPURAM, MEERUT - THE NEW URBAN HUB
                </p>

                {/* Key Points List */}
                <ul className="space-y-4 mt-6">
                    <li className="flex items-center space-x-3 bg-white p-4 rounded-xl ">
                        <span className="w-8 h-8 border border-black rounded-full flex items-center justify-center">
                            <GiRoad className="text-black" size={20} /> {/* Outline road icon */}
                        </span>
                        <div>
                            <h3 className="font-semibold text-lg">NH-58 & Delhi–Dehradun Expressway Access</h3>
                            <p className="text-sm text-gray-600">Direct access to major highways for smooth travel to and from key areas.</p>
                        </div>
                    </li>
                    <li className="flex items-center space-x-3 bg-white p-4 rounded-xl ">
                        <span className="w-8 h-8 border border-black rounded-full flex items-center justify-center">
                            <PiTrainThin className="text-black" size={20} /> {/* Outline metro icon */}
                        </span>
                        <div>
                            <h3 className="font-semibold text-lg">Proposed Meerut Metro Station Nearby</h3>
                            <p className="text-sm text-gray-600">Future metro station nearby for easy urban transit connectivity.</p>
                        </div>
                    </li>
                    <li className="flex items-center space-x-3 bg-white p-4 rounded-xl ">
                        <span className="w-8 h-8 border border-black rounded-full flex items-center justify-center">
                            <LuClock className="text-black" size={20} /> {/* Outline clock icon */}
                        </span>
                        <div>
                            <h3 className="font-semibold text-lg">15 Minutes to City Centre</h3>
                            <p className="text-sm text-gray-600">Quick access to the city centre, putting you at the heart of everything.</p>
                        </div>
                    </li>
                    <li className="flex items-center space-x-3 bg-white p-4 rounded-xl ">
                        <span className="w-8 h-8 border border-black rounded-full flex items-center justify-center">
                            <GiNetworkBars className="text-black" size={20} /> {/* Outline network icon */}
                        </span>
                        <div>
                            <h3 className="font-semibold text-lg">Seamless Delhi-NCR Connectivity</h3>
                            <p className="text-sm text-gray-600">Effortless connectivity to Delhi and NCR for work or leisure.</p>
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
                    width={800} // Original width
                    height={600} // Original height
                    objectFit="contain"
                    className="rounded-lg"
                />
            </div>
        </section>
    );
}
