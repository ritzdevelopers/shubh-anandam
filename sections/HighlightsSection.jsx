import { FaLock, FaMedal, FaHome } from 'react-icons/fa';
import backgroundImage from '../assets/hightlights-bg.png'; // Replace with your background image

export default function HighlightsSection() {
    return (
        <section
            className="relative w-full py-24 h-[50vh] px-4 sm:px-16 bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${backgroundImage.src})` }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-30"></div>

            {/* Content */}
            <div className="relative z-10 text-center w-full">
                <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8">
                    {/* Card 1 */}
                    <div className="w-full sm:w-[90%] md:w-[300px] lg:w-[350px] p-6 rounded-xl shadow-xl hover:shadow-2xl bg-white transition transform hover:scale-105 duration-300 ease-in-out">
                        <div className="flex justify-center items-center mb-4">
                            <FaLock className="text-4xl text-gray-700" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Trusted Developer</h3>
                    </div>

                    {/* Card 2 */}
                    <div className="w-full sm:w-[90%] md:w-[300px] lg:w-[350px] p-6 rounded-xl shadow-xl hover:shadow-2xl bg-white transition transform hover:scale-105 duration-300 ease-in-out">
                        <div className="flex justify-center items-center mb-4">
                            <FaMedal className="text-4xl text-gray-700" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Ready-to-Move Options</h3>
                    </div>

                    {/* Card 3 */}
                    <div className="w-full sm:w-[90%] md:w-[300px] lg:w-[350px] p-6 rounded-xl shadow-xl hover:shadow-2xl bg-white transition transform hover:scale-105 duration-300 ease-in-out">
                        <div className="flex justify-center items-center mb-4">
                            <FaHome className="text-4xl text-gray-700" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Home for Every Need</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
