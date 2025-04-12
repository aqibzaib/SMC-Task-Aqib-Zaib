import React from "react";
import Container from "./common/Container";

export default function Header() {
  return (
    <Container className="border border-red-900">
      <header className="grid grid-cols-1 md:grid-cols-12 items-center  gap-4 p-4">
        {/* Logo */}
        <div className="flex justify-start border border-red-900 col-span-2">
          <a href="https://smbf.global">
            <img
              src="https://smbf.global/wp-content/uploads/2023/07/SMBF_Logo.png"
              alt="SMBF Logo"
              className="w-full max-w-[126px] h-[42px]"
            />
          </a>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex justify-between space-x-4 col-span-8 border border-red-900">
          <a href="/our-vision" className="font-redtone">
            Our Vision
          </a>

          <div className="relative group">
            <span className="cursor-pointer">Member Benefits ▾</span>
            <ul className="absolute hidden group-hover:block bg-white shadow-md rounded p-2 space-y-2 mt-1 z-10">
              <li>
                <a
                  href="/business-membership"
                  className="font-redtone text-[16px] font-medium uppercase leading-[1.6em] tracking-[0.1em] pr-[30px] text-[#02171F]"
                >
                  Business Membership
                </a>
              </li>

              <li>
                <a href="/executive-membership">Executive Membership</a>
              </li>
              <li>
                <a href="/youth-membership">Youth Membership</a>
              </li>
            </ul>
          </div>

          <a href="/events">Events</a>

          <div className="relative group">
            <span className="cursor-pointer">International Trade ▾</span>
            <ul className="absolute hidden group-hover:block bg-white shadow-md rounded p-2 space-y-2 mt-1 z-10">
              <li>
                <a href="/executive-international-membership">
                  Executive Intl. Membership
                </a>
              </li>
              <li>
                <a href="/saudi-arabia-international-trade-programme">
                  Saudi Arabia Trade
                </a>
              </li>
              <li>
                <a href="/france-business-delegation-2025">France 2025</a>
              </li>
              <li>
                <a href="/smbf-turkiye-international-trade-programme">
                  Türkiye Trade
                </a>
              </li>
              <li>
                <a href="/dubai-business-delegation">Dubai 2024</a>
              </li>
            </ul>
          </div>

          <a href="/support-our-growth">Support Us</a>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex justify-end items-center space-x-4 col-span-2">
          <a href="/login" className="text-sm font-medium hover:underline">
            Log In
          </a>
          <a
            href="/register"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded text-sm font-medium hover:opacity-90"
          >
            SIGN UP
          </a>
        </div>
      </header>
    </Container>
  );
}
