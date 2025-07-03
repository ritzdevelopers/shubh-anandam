import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
} from 'react-icons/fa';
import backgroundImage from '../assets/footer-bg.png';
import logoImage from '../assets/logo.png';

export default function Footer() {
  return (
    <footer id='footer'
      className="relative h-[450px] bg-cover bg-center text-white flex flex-col justify-between"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#41000A] opacity-90"></div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row flex-wrap justify-between items-start gap-8">
          {/* Logo + Social Links */}
          <div className="flex flex-col items-start">
            <img src={logoImage.src} alt="Logo" className="w-32 h-auto mb-4" />
            <div className="flex gap-4 mt-2">
              {/* Each social icon wrapped in a circle */}
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-black hover:text-white transition"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-black hover:text-white transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-black hover:text-white transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-black hover:text-white transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="flex flex-col text-[#DABF70CC]">
            <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Home</a></li>
              <li><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Services</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col text-[18px] text-[#DABF70CC]">
            <h4 className="text-[20px] font-semibold mb-4">Contact Us</h4>
            <div className="flex items-start mb-2">
              <FaPhone className="mr-2 mt-1" />
              <span className="flex flex-col gap-1">
                <span>0120- 350 0832</span>
                <span>+91 9873401010</span>
              </span>
            </div>
            <div className="flex items-start mb-2">
              <FaMapMarkerAlt className="mr-2 mt-1" />
              <span className="flex flex-col gap-1">
                <span>Near Sector 9, Ansal Town, Modipuram, Meerut</span>
                <span>C-56/30, Sector 62, Noida, Uttar Pradesh</span>
              </span>
            </div>
            <div className="flex items-center mb-2">
              <FaEnvelope className="mr-2" />
              <span>support@shubhanandam.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 bg-[#41000A] bg-opacity-80 text-center text-sm py-4">
        <p>&copy; 2025 YourCompany. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
