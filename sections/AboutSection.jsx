import bgImage from "../assets/about-bg.png";

export default function AboutSection() {
  return (
    <section
      id="about"
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
          className="text-4xl md:text-[42px] font-bold text-[white] mb-6"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Shubhanandam Group
        </h2>

        {/* Paragraph */}
        <p className="text-lg md:text-xl font-inter mb-8 text-gray-100">
          A real estate brand committed to{" "}
          <strong>affordable luxury, quality craftsmanship, </strong> and{" "}
          <strong> timely delivery </strong>, Shubhanandam Group is redefining
          residential living in Tier-2 cities. Backed by a strong leadership
          team and a mission to deliver over{" "}
          <strong> 100,000 homes by 2025 </strong>, the group is trusted by
          hundreds of homeowners across Meerut.
        </p>

        {/* Button */}
        <a
          href="/about"
          className="inline-block px-6 py-3 bg-[white] text-black hover:text-white font-semibold rounded-4xl hover:bg-[#852438] transition"
        >
          Book a site visit now
        </a>
      </div>
    </section>
  );
}
