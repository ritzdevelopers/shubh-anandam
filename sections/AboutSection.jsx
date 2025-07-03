import bgImage from "../assets/about-bg.png";

export default function AboutSection() {
  return (
    <section id="about"
      className="relative px-4 sm:px-8 md:px-16 py-20 h-[60vh] text-center flex items-center justify-center"
      style={{
        background: `url(${bgImage.src}) center/cover no-repeat`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-white">
        {/* Subheading */}
        <p className="text-[24px] uppercase tracking-wider mb-3 font-semibold text-white">
          About Us
        </p>

        {/* Heading */}
        <h2
          className="text-4xl md:text-[42px] font-bold text-[#AA0E27] mb-6"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Discover the Anandam Life
        </h2>

        {/* Paragraph */}
        <p className="text-lg md:text-xl font-inter mb-8 text-gray-100">
          At Anandam Life, we blend luxury and comfort to create vibrant living
          spaces. Our homes in Modipuram, Meerut are thoughtfully designed to
          offer a smart investment and an elevated lifestyle.
        </p>

        {/* Button */}
        <a
          href="/about"
          className="inline-block px-6 py-3 bg-[white] text-black hover:text-white font-semibold rounded-4xl hover:bg-[#880b1f] transition"
        >
          Book a site visit now
        </a>
      </div>
    </section>
  );
}
