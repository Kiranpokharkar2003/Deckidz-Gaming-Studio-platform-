import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="bg-[#041d7f] text-[#ffffff] p-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <h1 className="text-2xl font-bold">
          <Link to="/">𝘿𝙚𝙘𝙠𝙞𝙙𝙯</Link>
        </h1>

        {/* Desktop Search Bar (Hidden on Mobile) */}
        <div className="hidden md:flex items-center bg-[#F5F5F5] px-3 py-1 rounded-full">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent focus:outline-none text-[#333333] px-2"
          />
          <Search size={20} className="text-[#0077B6]" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-[#FFD700] transition">
              <b>Home</b>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#FFD700] transition">
            <b>Contact</b>
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#FFD700] transition">
            <b>About</b>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu & Search Button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} className="text-[#333333]" /> : <Menu size={28} className="text-[#ffffff]" />}
          </button>
          {/* Search Icon (for mobile) */}
          <button onClick={() => alert("Search Clicked!")}>
            <Search size={24} className="text-[#0077B6]" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F5F5F5] text-center p-4 mt-2 rounded-md">
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="block py-2 text-[#333333] hover:text-[#FFD700] transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 text-[#333333] hover:text-[#FFD700] transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 text-[#333333] hover:text-[#FFD700] transition"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;