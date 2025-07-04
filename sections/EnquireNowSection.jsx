"use client";
import bgImage from "../assets/enquire-bg.png";

export default function EnquireSection() {
  return (
    <section
      id="contact"
      className="w-full h-[100vh] px-4 sm:px-[86px] flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 bg-opacity-90 z-0" />

      <div className="w-full text-center flex flex-col items-center justify-center gap-8 relative z-10">
        <h1 className="sm:text-4xl text-xl font-bold text-white leading-tight">
          Your Dream Home Awaits! Fill The Form <br /> And Let Us Take Care Of
          The Rest.
        </h1>

        <div className="w-full flex justify-center">
          <div className="w-full sm:w-[55%] bg-white p-4 sm:p-6 rounded-4xl shadow-lg">
            <h2
              className="sm:text-3xl text-xl  text-[#DABF70] mb-6 text-center"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Enquire Now
            </h2>
            <form className="space-y-4 flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 h-[61px] border-gray-300 "
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-5 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 h-[61px] border-gray-300"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="w-full px-5 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 h-[61px] border-gray-300"
                />
                <input
                  type="text"
                  placeholder="Preferred Time"
                  className="w-full px-5 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 h-[61px] border-gray-300"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-5 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 border-gray-300"
              ></textarea>
              <button
                type="submit"
                className="hover:bg-[#DABF70] bg-[#852438] text-white px-6 py-2 w-[241px] h-[50px] rounded-4xl transition mx-auto"
              >
                Book a Site visit now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
