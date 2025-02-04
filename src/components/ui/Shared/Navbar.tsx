import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaUser,
  FaHeart,
  FaSearch,
  FaBars,
} from "react-icons/fa";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="bg-[#F06392] shadow-md py-4 px-6 fixed w-full z-10 mt-0">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-2">
        {/* Logo & Branding */}
        <Link
          to="/"
          className="text-2xl font-semibold text-white hover:text-gray-300 flex items-center space-x-2"
        >
          <span className="hidden sm:inline text-3xl px-4">
            Stationery Shop
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-8 text-lg">
          <Link
            to="/"
            className="text-white  font-semibold hover:border-b px-3 pb-1  transition-colors"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-white  font-semibold hover:border-b px-3 pb-1  transition-colors"
          >
            Shop
          </Link>
          <Link
            to="/offers"
            className="text-white  font-semibold hover:border-b px-3 pb-1  transition-colors"
          >
            Offers
          </Link>
          <Link
            to="/new-arrivals"
            className="text-white  font-semibold hover:border-b px-3 pb-1  transition-colors"
          >
            New Arrivals
          </Link>
          <Link
            to="/about"
            className="text-white  font-semibold hover:border-b px-3 pb-1  transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-white  font-semibold hover:border-b px-3 pb-1  transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Search Bar & Icons */}
        <div className="flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <FaSearch className="absolute right-3 top-2 text-gray-600 cursor-pointer" />
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FaUser />
            </Link>
            <Link
              to="/cart"
              className="relative text-white hover:text-gray-300 transition-colors"
            >
              <FaShoppingCart />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                3
              </span>
            </Link>
            <Link
              to="/wishlist"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FaHeart />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex justify-between items-center mt-4">
        <Link to="/" className="text-2xl font-bold text-white">
          Stationery Shop
        </Link>
        <button className="text-white hover:text-gray-300" onClick={toggleMenu}>
          <FaBars />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 space-y-6 px-4 py-6 bg-white shadow-lg rounded-lg transition-all duration-300 ease-in-out">
          <Link
            to="/"
            className="block text-xl font-semibold  text-gray-800 hover:text-gray-600 transition-colors"
          >
            Home
          </Link>
          <hr />
          <Link
            to="/shop"
            className="block text-xl font-semibold  text-gray-800 hover:text-gray-600 transition-colors"
          >
            Shop
          </Link>
          <hr />
          <Link
            to="/offers"
            className="block text-xl font-semibold  text-gray-800 hover:text-gray-600 transition-colors"
          >
            Offers
          </Link>
          <hr />
          <Link
            to="/new-arrivals"
            className="block text-xl font-semibold  text-gray-800 hover:text-gray-600 transition-colors"
          >
            New Arrivals
          </Link>
          <hr />
          <Link
            to="/about"
            className="block text-xl font-semibold  text-gray-800 hover:text-gray-600 transition-colors"
          >
            About Us
          </Link>
          <hr />
          <Link
            to="/contact"
            className="block text-xl font-semibold  text-gray-800 hover:text-gray-600 transition-colors"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
