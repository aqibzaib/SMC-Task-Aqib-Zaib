import React from "react";
import CountUp from "react-countup";

const NetworkSection: React.FC = () => {
  return (
    <>
      <div className="relative w-full overflow-hidden">
        {/* Gradient background */}
        <div
          className="absolute inset-0 bg-[linear-gradient(221deg,_rgb(35,102,205)_0%,_rgb(58,151,164)_100%)]"
          style={{ borderRadius: "0% 0% 60% 40%  / 0% 0% 5% 5%" }}
        ></div>

        {/* Wave image overlay */}
        <div
          className="absolute inset-0 bg-[left_top,left_bottom] bg-[url('https://smbf.global/wp-content/uploads/2023/07/wave-shape-overlay.png')] bg-contain bg-repeat opacity-10"
          style={{ borderRadius: "0% 0% 60% 40%  / 0% 0% 5% 5%" }}
        ></div>

        {/* Content goes here */}
        <div className="relative z-10 p-8 px-8 py-16 text-white">
          <div className=" ">
            <div className="mx-auto grid max-w-[1250px] grid-cols-1 items-center gap-10 md:grid-cols-[650px_1fr] md:gap-[75px]">
              {/* Left Column - Heading */}
              <div className="">
                <h1 className="w-[650px] font-redtone text-[60px] font-medium leading-tight tracking-[-1px] text-white [text-shadow:0px_5px_15px_rgba(0,0,0,0.16)] md:text-[100px] md:leading-[84px]">
                  Your Global Muslim Business Network
                </h1>
              </div>

              {/* Right Column - Network Box & Description */}
              <div className="flex flex-col items-start space-y-6">
                {/* Profile + Network Card */}
                <div className="grid grid-cols-2">
                  <div className="text-center">
                    <div className="flex w-[476px] flex-row items-center justify-start gap-[44px] rounded-[20px] bg-white py-[19px] pl-[30px] shadow-xl">
                      <div className="flex flex-row">
                        <div className="flex justify-center">
                          <a href="https://www.linkedin.com/in/adam-kiani-25687964/">
                            <img
                              loading="lazy"
                              decoding="async"
                              width="800"
                              height="800"
                              src="https://smbf.global/wp-content/uploads/2024/07/1686184449993.jpeg"
                              className="w-[55px] rounded-full border border-white shadow-[0px_10px_15px_0px_rgba(0,0,0,0.3)] outline-dashed outline-offset-4 outline-[#082c63]"
                              alt="Adam  Kiani"
                            />
                          </a>
                        </div>

                        <div className="flex justify-center">
                          <a href="https://www.linkedin.com/in/sajhussain/">
                            <img
                              loading="lazy"
                              decoding="async"
                              width="505"
                              height="505"
                              src="https://smbf.global/wp-content/uploads/2024/07/1646230591827.jpeg"
                              className="w-[55px] rounded-full border border-white shadow-[0px_10px_15px_0px_rgba(0,0,0,0.3)] outline-[#082c63] hover:outline-dashed hover:outline-offset-4"
                              alt="Saj Hussain"
                            />
                          </a>
                        </div>

                        <div className="flex justify-center">
                          <a href="https://www.linkedin.com/in/zhagumarshad/">
                            <img
                              loading="lazy"
                              decoding="async"
                              width="400"
                              height="400"
                              src="https://smbf.global/wp-content/uploads/2024/07/1704105715631.jpeg"
                              className="w-[55px] rounded-full border border-white shadow-[0px_10px_15px_0px_rgba(0,0,0,0.3)] outline-[#082c63] hover:outline-dashed hover:outline-offset-4"
                              alt="Zha Gumarshad"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="m-0 p-0 font-inter">
                        <span className="relative ml-0 text-[28px] font-bold text-[#2366cd]">
                          <CountUp end={30000} duration={5} separator=",">
                            {({ countUpRef }) => (
                              <>
                                <span ref={countUpRef} />
                                <sup className="absolute left-[100%] top-[15px] align-super text-[52px] font-bold text-[#2366cd]">
                                  +
                                </sup>
                              </>
                            )}
                          </CountUp>
                        </span>
                        <h2 className="ml-1 font-inter text-[28px] font-normal text-[#082c63]">
                          Network
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="max-w-lg font-inter text-base font-medium leading-[1.7em] text-[#E0E0E0]">
                  SMBF is a global network of high-value Muslim businesses and
                  professionals. We offer unparalleled opportunities, support,
                  and connections to economically empower the Muslim Ummah
                  globally.
                </p>
              </div>
            </div>
            {/* 2-Column Layout */}

            <div className="mx-auto mt-[83px] grid max-w-[1250px] gap-[30px] md:grid-cols-[61.28%_34.72%]">
              {/* Left Column: Video + Stats */}
              <div className="flex flex-col gap-6">
                {/* Video Block */}
                <div className="my-[10px] h-[431px] overflow-hidden rounded-[20px] bg-[#ddd]">
                  <video
                    className="h-full w-full object-cover"
                    src="https://smbf.global/wp-content/uploads/2023/07/SaveTube.io-SMBF-Promotional-Video-480p.mp4"
                    poster="https://smbf.global/wp-content/uploads/2023/07/SMBF.png"
                    controls
                    preload="metadata"
                    controlsList="nodownload"
                  />
                </div>

                {/* Stats Section */}
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Stat 1 */}
                  <div className="rounded-[20px] bg-white p-6">
                    <p className="font-inter text-[28px] font-bold leading-[27.2px] tracking-normal text-[#2366CD]">
                      <CountUp end={10} duration={2} prefix="£" suffix="M+" />
                    </p>
                    <p className="font-redtone text-[21px] font-medium text-[#575a5f]">
                      Facilitated Trade
                    </p>
                    <p className="mt-[19px] font-inter text-base font-normal leading-[1.7em] text-[#0000008A]">
                      Over 8 figures facilitated in international trade,
                      boosting the Muslim economy.
                    </p>
                  </div>

                  {/* Stat 2 */}
                  <div className="rounded-[20px] bg-white p-6">
                    <h3 className="font-inter text-[28px] font-bold leading-[27.2px] tracking-normal text-[#2366CD]">
                      <CountUp end={12} duration={2} suffix="+" />
                    </h3>
                    <p className="font-redtone text-[21px] font-medium text-[#575a5f]">
                      Countries
                    </p>
                    <p className="mt-[19px] font-inter text-base font-normal leading-[1.7em] text-[#0000008A]">
                      A thriving network of Muslim businesses and professionals
                      across 12 countries.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Tall Block */}
              <div className="relative">
                <img
                  className="flex h-full items-center justify-center rounded-[20px] bg-[#ccc] object-cover text-center text-xl font-semibold text-gray-700"
                  src="https://smbf.global/wp-content/uploads/2024/07/9.png"
                />
                {/* CTA Button */}
                <div className="absolute bottom-[30px] right-[10px] mt-8 flex justify-center md:justify-end">
                  <a href="#learnmore1">
                    <button className="rounded-full bg-white px-6 py-3 font-dm-sans font-semibold text-[#082C63] transition-all duration-300 ease-in-out hover:bg-[#2366cd] hover:text-white hover:shadow-lg">
                      View Member Benefits →
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NetworkSection;
