'use client';

import Image from 'next/image';
import bgImage from '../assets/enquire-bg.jpg'; // Replace with your background
import sideImage from '../assets/enquire-side.png'; // Replace with your image

export default function EnquireSection() {
    return (
        <section id='contact'
            className="w-full bg-gray-100 py-16 px-4 sm:px-[86px] relative"
            style={{
                backgroundImage: `url(${bgImage.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <h1 className="sm:text-4xl text-xl font-bold text-[#DABF70] mb-6 leading-tight text-center sm:text-left">
                Your Dream Home Awaits! Fill The Form <br /> And Let Us Take Care Of The Rest.
            </h1>

            <div className="mx-auto h-full flex flex-col sm:flex-row">
                {/* Left Section: Form */}
                <div className="w-full sm:w-[50%] bg-[#630412] p-6 sm:p-8 rounded-4xl shadow-lg">
                    <h2 className="sm:text-3xl text-xl font-bold text-[#DABF70] mb-6 text-center sm:text-left">
                        Enquire Now
                    </h2>
                    <form className="space-y-4 flex flex-col gap-2">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-2 border bg-white rounded-lg focus:outline-none focus:ring-2 h-[61px]"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-2 border bg-white rounded-lg focus:outline-none focus:ring-2 h-[61px]"
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="Your Phone"
                                className="w-full px-4 py-2 border bg-white rounded-lg focus:outline-none focus:ring-2 h-[61px]"
                            />
                            <input
                                type="text"
                                placeholder="Preferred Time"
                                className="w-full px-4 py-2 border bg-white rounded-lg focus:outline-none focus:ring-2 h-[61px]"
                            />
                        </div>
                        <textarea
                            placeholder="Your Message"
                            rows={4}
                            className="w-full px-4 py-2 border bg-white rounded-lg focus:outline-none focus:ring-2"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-white hover:bg-[#AA0E27] hover:text-white px-6 py-2 w-[241px] h-[50px] rounded-4xl transition mx-auto sm:mx-0"
                        >
                            Book a Site visit now
                        </button>
                    </form>
                </div>

                {/* Image stuck to bottom right corner */}
                <div className="absolute bottom-0 right-0 hidden sm:block">
                    <Image
                        src={sideImage.src}
                        alt="Enquire illustration"
                        width={400}
                        height={400}
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
