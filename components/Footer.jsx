import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Send } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#041d7f] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-10">

        {/* Column 1 - Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-300">Deckidz</h2>
          <p className="text-gray-300 mt-3">
            Elevate your brand with **AR toys, educational solutions, and tech innovations.**  
            We create the future of interactive learning.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/deckidz" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">
              <Facebook size={24} />
            </a>
            <a href="https://www.instagram.com/deckidz_games/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">
              <Instagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/BhavinMakwana24/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-300">Quick Links</h3>
          <ul className="mt-3 space-y-3 text-gray-300">
            <li className="hover:text-teal-400 transition"><a href="#">About Us</a></li>
            <li className="hover:text-teal-400 transition"><a href="#">Our Services</a></li>
            <li className="hover:text-teal-400 transition"><a href="#">Case Studies</a></li>
            <li className="hover:text-teal-400 transition"><a href="#">Privacy Policy</a></li>
            <li className="hover:text-teal-400 transition"><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-300">Contact Us</h3>
          <p className="text-gray-300 mt-3">Feel free to reach out to us anytime.</p>
          <div className="mt-4 space-y-2 text-gray-400">
            <p className="flex items-center gap-2"><Mail size={18} /> support@deckidz.com</p>
            <p className="flex items-center gap-2"><Phone size={18} /> +91 7990667314</p>
            <p className="flex items-center gap-2"><MapPin size={18} /> Mumbai, India</p>
          </div>
        </div>

        {/* Column 4 - Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-300">Subscribe to Our Newsletter</h3>
          <p className="text-gray-300 mt-3">Stay updated with our latest news & offers.</p>
          <div className="mt-4 flex">
            <input type="email" placeholder="Enter your email" className="w-full p-2 rounded-l bg-gray-800 text-white border border-gray-600 focus:border-teal-400 focus:ring-1 focus:ring-teal-400"/>
            <button className="bg-teal-400 text-gray-900 px-4 py-2 rounded-r hover:bg-teal-500 transition">
              <Send size={20} />
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Footer Section */}
      <div className="text-center text- text-sm mt-10 border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} Deckidz. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
