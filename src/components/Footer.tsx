import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0B2341] text-white py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src="/logo.svg" alt="SMBF Logo" className="w-10 h-10" />
            <span className="text-2xl font-semibold">SMBF</span>
          </div>
          <p className="text-gray-300">
            Supporting Muslim businesses, through ethical and meaningful collaboration, to positively impact the world.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" aria-label="LinkedIn" className="text-white">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="#" aria-label="Instagram" className="text-white">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" aria-label="Facebook" className="text-white">
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a href="#" aria-label="YouTube" className="text-white">
              <i className="fab fa-youtube text-xl"></i>
            </a>
          </div>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-widest">MENU</h3>
          <ul className="space-y-3 text-gray-300">
            <li><a href="#">Member Login</a></li>
            <li><a href="#">Our Vision</a></li>
            <li><a href="#">Member Benefits</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Business Delegations</a></li>
            <li><a href="#">Support Us</a></li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-widest">LINKS</h3>
          <ul className="space-y-3 text-gray-300">
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Event Registration Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-widest">GET IN TOUCH</h3>
          <p className="text-gray-300 mb-2">0121 820 8259</p>
          <p className="text-gray-300 mb-6">enquiries@smbf.global</p>
          <button className="bg-gradient-to-r from-[#52B6C5] to-[#2D63D4] text-white font-semibold py-2 px-6 rounded-full shadow-lg">
            CONTACT US
          </button>
        </div>
      </div>
      <div className="text-center text-sm text-gray-400 mt-12">
        Copyright SMBF © 2025. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
