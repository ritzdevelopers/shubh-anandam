// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { HiMenu, HiX } from "react-icons/hi";
// import Image from "next/image";

// import logo from "../assets/new-logo.png";

// const navLinks = [
//   { name: "Home", href: "#home" },
//   { name: "About Us", href: "#about" },
//   { name: "Our Projects", href: "#projects" },
//   { name: "Contact", href: "#contact" },
// ];

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     AOS.init({ duration: 1000 });

//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
//         scrolled ? "bg-black shadow-md" : "bg-transparent"
//       }`}
//       data-aos="fade-down"
//     >
//       <nav className="px-4 sm:px-6 lg:px-[86px] flex items-center justify-between py-[26px]">
//         {/* Logo on Left */}
//         <div className="text-white font-bold text-xl">
//           <Image src={logo} alt="logo" width="full" height="full" />
//         </div>

//         {/* Right-side Nav (desktop) */}
//         <div className="hidden md:flex items-center gap-6">
//           <ul className="flex gap-6 text-[#DABF70] font-medium">
//             {navLinks.map(({ name, href }) => (
//               <li key={name}>
//                 <Link href={href}>
//                   <span className="relative cursor-pointer text-[#DABF70] transition-colors hover:text-[#852438] hover:underline">
//                     {name}
//                   </span>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//           <button className="ml-4  text-white px-4 py-2 rounded-4xl bg-[#852438] hover:bg-[#DABF70] hover:text-white transition cursor-pointer">
//             Get Started
//           </button>
//         </div>

//         {/* Hamburger for mobile */}
//         <div
//           className="md:hidden text-white text-2xl cursor-pointer"
//           onClick={toggleMenu}
//         >
//           {menuOpen ? <HiX /> : <HiMenu />}
//         </div>
//       </nav>

//       {/* Mobile Dropdown Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-black text-white py-4 px-6 space-y-4 transition-all duration-300">
//           {navLinks.map(({ name, href }) => (
//             <Link key={name} href={href} onClick={closeMenu}>
//               <div className="block cursor-pointer hover:text-[#E91335] transition-colors">
//                 {name}
//               </div>
//             </Link>
//           ))}
//           <button
//             onClick={closeMenu}
//             className="w-full bg-white text-black px-4 py-2 rounded hover:bg-[#E91335] hover:text-white transition cursor-pointer"
//           >
//             Contact Us
//           </button>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";

import logo from "../assets/new-logo.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Our Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}
      data-aos="fade-down"
    >
      <nav className="px-4 sm:px-6 lg:px-[86px] flex items-center justify-between py-[26px]">
        {/* Logo on Left */}
        <div className="text-white font-bold text-xl">
          <Image src={logo} alt="logo" width="full" height="full" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 text-[#DABF70] font-medium">
            {navLinks.map(({ name, href }) => (
              <li key={name}>
                <Link href={href}>
                  <span className="relative cursor-pointer text-[#DABF70] transition-colors hover:text-[#852438] hover:underline">
                    {name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <button className="ml-4 text-white px-4 py-2 rounded-4xl bg-[#852438] hover:bg-[#DABF70] hover:text-white transition cursor-pointer">
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") toggleMenu();
          }}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black text-white py-6 px-6 space-y-6 z-40 shadow-md">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ name, href }) => (
              <li key={name}>
                <Link href={href} onClick={closeMenu}>
                  <span className="block text-lg font-medium text-[#DABF70] hover:text-[#E91335] transition-colors cursor-pointer">
                    {name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={closeMenu}
            className="w-full bg-[#852438] text-white px-4 py-2 rounded-4xl hover:bg-[#DABF70] hover:text-black transition-colors"
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
