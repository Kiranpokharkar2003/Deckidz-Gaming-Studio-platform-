import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTruck, FaEnvelope, FaPhone } from "react-icons/fa";

const Detail = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-6">
        
        {/* Left Section - Business & Services */}
        <div className="space-y-2">
          <h3 className="font-bold text-lg">Businesses</h3>
          <p>Education</p>
          <p>Augmented Reality Toys</p>
          <p>Apps & Games Development</p>
        </div>

        {/* Center Section - Copyright & Social Media */}
        <div className="text-center md:text-left">
          <p>©2023 by DEC Gaming Studio Pvt Ltd.</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-white bg-blue-500 rounded-full p-2 cursor-pointer hover:bg-blue-600" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white bg-blue-500 rounded-full p-2 cursor-pointer hover:bg-blue-600" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-white bg-blue-500 rounded-full p-2 cursor-pointer hover:bg-blue-600" />
            </a>
          </div>
        </div>

        {/* Right Section - Support & Contact */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <FaTruck className="text-blue-300" />
            <a href="https://deckidz.shiprocket.co/" className="hover:underline">Track My Order</a>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-blue-300" />
            <a href="mailto:Support@deckidz.com" className="hover:underline">Support@deckidz.com</a>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone className="text-blue-300" />
            <span>+91 7990667314</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Detail;
