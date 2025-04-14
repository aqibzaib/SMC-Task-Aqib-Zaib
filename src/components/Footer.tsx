import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0B2341] px-6 py-12 text-white md:px-16 lg:px-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Logo and Description */}
        <div>
          <div className="mb-4 flex items-center space-x-2">
            <img src="/logo.svg" alt="SMBF Logo" className="h-10 w-10" />
            <span className="text-2xl font-semibold">SMBF</span>
          </div>
          <p className="text-gray-300">
            Supporting Muslim businesses, through ethical and meaningful
            collaboration, to positively impact the world.
          </p>
          <div className="mt-6 flex space-x-4">
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
          <h3 className="mb-4 font-semibold tracking-widest text-white">
            MENU
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <a href="#">Member Login</a>
            </li>
            <li>
              <a href="#">Our Vision</a>
            </li>
            <li>
              <a href="#">Member Benefits</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Business Delegations</a>
            </li>
            <li>
              <a href="#">Support Us</a>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="mb-4 font-semibold tracking-widest text-white">
            LINKS
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <a href="#">Privacy policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Event Registration Policy</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 font-semibold tracking-widest text-white">
            GET IN TOUCH
          </h3>
          <p className="mb-2 text-gray-300">0121 820 8259</p>
          <p className="mb-6 text-gray-300">enquiries@smbf.global</p>
          <button className="rounded-full bg-gradient-to-r from-[#52B6C5] to-[#2D63D4] px-6 py-2 font-semibold text-white shadow-lg">
            CONTACT US
          </button>
        </div>
      </div>
      <div className="mt-12 text-center text-sm text-gray-400">
        Copyright SMBF © 2025. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
