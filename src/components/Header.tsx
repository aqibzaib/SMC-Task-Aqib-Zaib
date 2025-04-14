import React from "react";
import Container from "./common/Container";

export default function Header() {
  return (
    <Container className="">
      <header className="grid grid-cols-1 items-center justify-center gap-4 py-4 md:grid-cols-12">
        {/* Logo */}
        <div className="col-span-2 flex justify-start">
          <a
            className="cursor-pointer font-[Redtone] text-[16px] font-medium uppercase leading-[1.6em] tracking-[0.1em] text-[#02171F]"
            href="https://smbf.global"
          >
            <img
              src="https://smbf.global/wp-content/uploads/2023/07/SMBF_Logo.png"
              alt="SMBF Logo"
              className="h-[42px] w-full max-w-[126px]"
            />
          </a>
        </div>

        {/* Navigation Menu */}
        <nav className="col-span-8 hidden items-center justify-between space-x-4 md:flex">
          <a
            href="/our-vision"
            className="group font-[Redtone] text-[16px] font-medium uppercase leading-[1.6em] tracking-[0.1em] text-[#02171F] hover:text-[#2366CD]"
          >
            Our Vision
          </a>

          <div className="group relative">
            <span className="cursor-pointer font-[Redtone] text-[16px] font-medium uppercase leading-[1.6em] tracking-[0.1em] text-[#02171F] group-hover:text-[#2366CD]">
              Member Benefits ▾
            </span>
            <ul className="border-grey-50 absolute z-50 mt-2 hidden min-w-[220px] flex-col space-y-3 rounded-lg border bg-white px-4 py-3 opacity-90 shadow-xl group-hover:flex">
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
            className="group cursor-pointer font-[Redtone] text-[16px] font-medium uppercase leading-[1.6em] tracking-[0.1em] text-[#02171F] hover:text-[#2366CD]"
          >
            Events
          </a>

          <div className="group relative">
            <span className="cursor-pointer font-[Redtone] text-[16px] font-medium uppercase leading-[1.6em] tracking-[0.1em] text-[#02171F] group-hover:text-[#2366CD]">
              International Trade ▾
            </span>
            <ul className="border-grey-10 absolute z-50 mt-2 hidden min-w-[220px] flex-col space-y-3 rounded-lg border bg-white px-4 py-3 opacity-90 shadow-xl group-hover:flex">
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
            className="group cursor-pointer font-[Redtone] text-[16px] font-medium uppercase leading-[1.6em] tracking-[0.1em] text-[#02171F] hover:text-[#2366CD]"
            href="/support-our-growth"
          >
            Support Us
          </a>
        </nav>

        {/* Auth Buttons */}
        <div className="col-span-2 hidden items-center justify-end space-x-4 md:flex">
          <a
            className="rounded-full border-none bg-[#94baf16] px-[0px] text-[15px] text-[#134A9E]"
            href="/login"
          >
            Log In
          </a>
          <a
            href="/register"
            className="rounded-[12px] border-none bg-transparent bg-gradient-to-r from-[#3A97A4] to-[#2366CD] px-[25px] py-[12px] font-inter text-[14px] font-semibold uppercase leading-[1em] tracking-[0.1em] text-[#FFFFFF]"
          >
            SIGN UP
          </a>
        </div>
      </header>
    </Container>
  );
}
