import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiTwitter, FiPhone, FiMail } from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-blue-400 text-white py-8">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold">Shrishakti Builders</h2>
          <p className="mt-2 text-gray-300">
            Shrishakti Builders & Developers is a trusted name in real estate, offering high-quality properties and construction services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-gray-300">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            </li>
            <li>
              <Link to="/buy" className="hover:text-gray-300">Buy Property</Link>
            </li>
            <li>
              <Link to="/sell" className="hover:text-gray-300">Sell Property</Link>
            </li>
            <li>
              <Link to="/rent" className="hover:text-gray-300">Rent Property</Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="flex items-center justify-center md:justify-start">
            <FiPhone className="mr-2" /> +91 98765 43210
          </p>
          <p className="flex items-center justify-center md:justify-start">
            <FiMail className="mr-2" /> info@shrishaktibuilders.com
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FiFacebook className="text-white hover:text-gray-300 text-xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FiInstagram className="text-white hover:text-gray-300 text-xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FiTwitter className="text-white hover:text-gray-300 text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-400 mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Shrishakti Builders & Developers. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;

  