import React from "react";
import Container from "./common/Container";

export default function Header() {
  return (
    <Container className="border border-red-900">
      <header className="grid grid-cols-1 md:grid-cols-12 items-center  gap-4 p-4">
        {/* Logo */}
        <div className="flex justify-start border border-red-900 col-span-2">
          <a
            className="cursor-pointer font-[Redtone] text-[16px] font-medium uppercase leading-[1.6em] tracking-[0.1em]  text-[#02171F]"
            href="https://smbf.global"
          >
            <img
              src="https://smbf.global/wp-content/uploads/2023/07/SMBF_Logo.png"
              alt="SMBF Logo"
              className="w-full max-w-[126px] h-[42px]"
            />
          </a>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex justify-between space-x-4 col-span-8 border border-red-900">
          <a
            href="/our-vision"
            className="font-[Redtone] text-[16px] font-medium uppercase leading-[1.6em] tracking-[0.1em] text-[#02171F] hover:text-[#2366CD] group"
          >
            Our Vision
          </a>

          <div className="relative group">
            <span className="cursor-pointer font-[Redtone] text-[16px] font-medium uppercase leading-[1.6em] tracking-[0.1em] text-[#02171F] group-hover:text-[#2366CD]">
              Member Benefits ▾
            </span>
            <ul className="absolute hidden group-hover:flex flex-col bg-white rounded-lg py-3 px-4 space-y-3 shadow-xl mt-2 z-50 min-w-[220px] opacity-90 border border-grey-50">
              <li>
                <a
                  href="/business-membership"
                  className="cursor-pointer font-[Redtone] text-[16px] font-medium uppercase leading-[1.6em] tracking-[0.1em] text-[#02171F] hover:text-[#2366CD]"
                >
                  Business Membership
                </a>
              </li>
              <li>
                <a
                  href="/executive-membership"
                  className="cursor-pointer font-[Redtone] text-[16px] font-medium uppercase leading-[1.6em] tracking-[0.1em] text-[#02171F] hover:text-[#2366CD]"
                >
                  Executive Membership
                </a>
              </li>
              <li>
                <a
                  href="/youth-membership"
                  className="cursor-pointer font-[Redtone] text-[16px] font-medium uppercase leading-[1.6em] tracking-[0.1em] text-[#02171F] hover:text-[#2366CD]"
                >
                  Youth Membership
                </a>
              </li>
            </ul>
          </div>

          <a
            href="/events"
            className="cursor-pointer font-[Redtone] text-[16px] font-medium uppercase leading-[1.6em] tracking-[0.1em] text-[#02171F] hover:text-[#2366CD] group"
          >
            Events
          </a>

          <div className="relative group">
            <span className="cursor-pointer font-[Redtone] text-[16px] font-medium uppercase leading-[1.6em] tracking-[0.1em] text-[#02171F] group-hover:text-[#2366CD]">
              International Trade ▾
            </span>
            <ul className="absolute hidden group-hover:flex flex-col bg-white rounded-lg py-3 px-4 space-y-3 shadow-xl mt-2 z-50 min-w-[220px] opacity-90 border border-grey-10">
              <li>
                <a
                  className="cursor-pointer font-[Redtone] text-[16px] font-medium uppercase leading-[1.6em] tracking-[0.1em] text-[#02171F] hover:text-[#2366CD]"
                  href="/executive-international-membership"
                >
                  Executive Intl. Membership
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer font-[Redtone] text-[16px] font-medium uppercase leading-[1.6em] tracking-[0.1em] text-[#02171F] hover:text-[#2366CD]"
                  href="/saudi-arabia-international-trade-programme"
                >
                  Saudi Arabia Trade
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer font-[Redtone] text-[16px] font-medium uppercase leading-[1.6em] tracking-[0.1em] text-[#02171F] hover:text-[#2366CD]"
                  href="/france-business-delegation-2025"
                >
                  France 2025
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer font-[Redtone] text-[16px] font-medium uppercase leading-[1.6em] tracking-[0.1em] text-[#02171F] hover:text-[#2366CD]"
                  href="/smbf-turkiye-international-trade-programme"
                >
                  Türkiye Trade
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer font-[Redtone] text-[16px] font-medium uppercase leading-[1.6em] tracking-[0.1em] text-[#02171F] hover:text-[#2366CD]"
                  href="/dubai-business-delegation"
                >
                  Dubai 2024
                </a>
              </li>
            </ul>
          </div>

          <a
            className="cursor-pointer font-[Redtone] text-[16px] font-medium uppercase leading-[1.6em] tracking-[0.1em] text-[#02171F] hover:text-[#2366CD] group"
            href="/support-our-growth"
          >
            Support Us
          </a>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex justify-end items-center space-x-4 col-span-2">
          <a
            className="bg-[#94baf16] px-[0px] text-[#134A9E] border-none rounded-full text-[15px]"
            href="/login"
          >
            Log In
          </a>
          <a
            href="/register"
            className="bg-transparent px-[25px] py-[12px] font-inter text-[14px] font-semibold uppercase leading-[1em] tracking-[0.1em] text-[#FFFFFF] bg-gradient-to-r from-[#3A97A4] to-[#2366CD] border-none rounded-[12px]"
          >
            SIGN UP
          </a>
        </div>
      </header>
    </Container>
  );
}
