import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Stationery Shop
          </h2>
          <p className="text-sm">
            Your one-stop shop for all your stationery needs. High-quality
            products at the best prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="hover:text-pink-400 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="hover:text-pink-400 transition duration-300"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-pink-400 transition duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-pink-400 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Customer Support
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                to="/faq"
                className="hover:text-pink-400 transition duration-300"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="/shipping"
                className="hover:text-pink-400 transition duration-300"
              >
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="hover:text-pink-400 transition duration-300"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="hover:text-pink-400 transition duration-300"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media & Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-pink-400 transition duration-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-pink-400 transition duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-pink-400 transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-pink-400 transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          <p className="text-sm mt-4">Email: support@stationeryshop.com</p>
          <p className="text-sm">Phone: +123 456 7890</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Stationery Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
