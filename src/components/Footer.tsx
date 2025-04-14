import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0B2341] px-8 py-12 text-white">
      <div className="mx-auto grid max-w-[1250px] grid-cols-1 border border-red-900 pb-[85px] md:grid-cols-2 lg:grid-cols-5">
        {/* Logo and Description */}
        <div className="col-span-2 max-w-[422px] p-[10px]">
          <div className="mb-4 flex items-center space-x-2">
            <img
              width="800"
              height="267"
              src="https://smbf.global/wp-content/uploads/2023/07/SMBF-Logo-white-1024x342.png"
              className="max-w-[150px]"
              alt=""
              decoding="async"
              srcset="https://smbf.global/wp-content/uploads/2023/07/SMBF-Logo-white-1024x342.png 1024w, https://smbf.global/wp-content/uploads/2023/07/SMBF-Logo-white-300x100.png 300w, https://smbf.global/wp-content/uploads/2023/07/SMBF-Logo-white-768x257.png 768w, https://smbf.global/wp-content/uploads/2023/07/SMBF-Logo-white-600x201.png 600w, https://smbf.global/wp-content/uploads/2023/07/SMBF-Logo-white.png 1071w"
            />
          </div>
          <p className="text-gray-300">
            Supporting Muslim businesses, through ethical and meaningful
            collaboration, to positively impact the world.
          </p>
          <div className="mt-6 flex space-x-4">
            <a
              href="https://www.linkedin.com/company/smbf-global/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2366CD] transition hover:text-blue-700"
              aria-label="LinkedIn"
            >
              <Linkedin color="white" />
            </a>
            <a
              href="https://www.instagram.com/smbf____/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2366CD] transition hover:text-pink-500"
              aria-label="Instagram"
            >
              <Instagram color="white" />
            </a>
            <a
              href="https://www.facebook.com/SupportMuslimBusinessForum/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2366CD] transition hover:text-blue-600"
              aria-label="Facebook"
            >
              <Facebook color="white" />
            </a>
            <a
              href="https://youtube.com/@supportmuslimbusinessforum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2366CD] transition hover:text-red-600"
              aria-label="YouTube"
            >
              <Youtube color="white" />
            </a>
          </div>
        </div>

        {/* Menu */}
        <div className="p-[10px]">
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
        <div className="p-[10px]">
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
        <div className="p-[10px]">
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
