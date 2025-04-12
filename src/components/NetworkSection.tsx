import React from "react";

const NetworkSection: React.FC = () => {
  return (
    // <div className="bg-gradient-to-r from-blue-500 to-blue-700 py-12 px-4">
    //   <div className="grid grid-cols-2">
    //     <div className="mb-8 w-[650px] border border-red-900">
    //       <h1 className="font-redtone text-white text-[100px] normal-case leading-[84px]  ">
    //         Your Global Muslim Business Network
    //       </h1>
    //     </div>

    //     <div className="grid grid-cols-2">
    //       <div className="mt-12 text-center ">
    //         <div className="bg-white shadow-xl p-6 items-center flex flex-row justify-around w-[476px]  rounded-[20px]">
    //           <div className="flex flex-row ">
    //             <div className="flex justify-center">
    //               <a href="https://www.linkedin.com/in/adam-kiani-25687964/">
    //                 <img
    //                   loading="lazy"
    //                   decoding="async"
    //                   width="800"
    //                   height="800"
    //                   src="https://smbf.global/wp-content/uploads/2024/07/1686184449993.jpeg"
    //                   className="w-[55px] border border-white rounded-full shadow-[0px_10px_15px_0px_rgba(0,0,0,0.3)] outline-[#082c63] outline-offset-4  outline-dashed "
    //                   alt="Adam  Kiani"
    //                 />
    //               </a>
    //             </div>

    //             <div className="flex justify-center">
    //               <a href="https://www.linkedin.com/in/sajhussain/">
    //                 <img
    //                   loading="lazy"
    //                   decoding="async"
    //                   width="505"
    //                   height="505"
    //                   src="https://smbf.global/wp-content/uploads/2024/07/1646230591827.jpeg"
    //                   className="w-[55px] border border-white rounded-full shadow-[0px_10px_15px_0px_rgba(0,0,0,0.3)] hover:outline-offset-4 hover:outline-dashed outline-[#082c63]"
    //                   alt="Saj Hussain"
    //                 />
    //               </a>
    //             </div>

    //             <div className="flex justify-center">
    //               <a href="https://www.linkedin.com/in/zhagumarshad/">
    //                 <img
    //                   loading="lazy"
    //                   decoding="async"
    //                   width="400"
    //                   height="400"
    //                   src="https://smbf.global/wp-content/uploads/2024/07/1704105715631.jpeg"
    //                   className="w-[55px] border border-white rounded-full shadow-[0px_10px_15px_0px_rgba(0,0,0,0.3)] hover:outline-offset-4 hover:outline-dashed outline-[#082c63]"
    //                   alt="Zha Gumarshad"
    //                 />
    //               </a>
    //             </div>
    //           </div>
    //           <div className="font-inter  p-0 m-0">
    //             <span className="ml-0 relative text-[28px] font-bold text-[#2366cd]">
    //               30,000
    //               <sup className="absolute text-[#2366cd]  text-[52px] font-bold  top-[15px] left-[100%] align-super">
    //                 +
    //               </sup>
    //             </span>

    //             <h2 className=" ml-1 text-[#082c63] font-inter text-[28px] font-normal ">
    //               Network
    //             </h2>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* <div className="mt-8 text-center text-lg text-gray-700">
    //       <p>
    //         SMBF is a global network of high-value Muslim businesses and
    //         professionals. We offer unparalleled opportunities, support, and
    //         connections to economically empower the Muslim Ummah globally.
    //       </p>
    //     </div> */}
    //   </div>
    // </div>
    <div className="bg-gradient-to-br from-[#1E90BC] to-[#2366cd] py-16 px-8 text-white">
      <div className="max-w-[1250px] mx-auto grid grid-cols-1 md:grid-cols-[650px_1fr] gap-10 md:gap-[75px] items-center ">
        {/* Left Column - Heading */}
        <div className="">
          <h1 className="font-redtone text-white text-[60px] md:text-[100px] leading-tight md:leading-[84px] w-[650px]">
            Your Global Muslim Business Network
          </h1>
        </div>

        {/* Right Column - Network Box & Description */}
        <div className="flex flex-col items-start space-y-6">
          {/* Profile + Network Card */}
          <div className="grid grid-cols-2">
            <div className="text-center ">
              <div className="bg-white shadow-xl p-6 items-center flex flex-row justify-around w-[476px]  rounded-[20px]">
                <div className="flex flex-row ">
                  <div className="flex justify-center">
                    <a href="https://www.linkedin.com/in/adam-kiani-25687964/">
                      <img
                        loading="lazy"
                        decoding="async"
                        width="800"
                        height="800"
                        src="https://smbf.global/wp-content/uploads/2024/07/1686184449993.jpeg"
                        className="w-[55px] border border-white rounded-full shadow-[0px_10px_15px_0px_rgba(0,0,0,0.3)] outline-[#082c63] outline-offset-4  outline-dashed "
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
                        className="w-[55px] border border-white rounded-full shadow-[0px_10px_15px_0px_rgba(0,0,0,0.3)] hover:outline-offset-4 hover:outline-dashed outline-[#082c63]"
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
                        className="w-[55px] border border-white rounded-full shadow-[0px_10px_15px_0px_rgba(0,0,0,0.3)] hover:outline-offset-4 hover:outline-dashed outline-[#082c63]"
                        alt="Zha Gumarshad"
                      />
                    </a>
                  </div>
                </div>
                <div className="font-inter  p-0 m-0">
                  <span className="ml-0 relative text-[28px] font-bold text-[#2366cd]">
                    30,000
                    <sup className="absolute text-[#2366cd]  text-[52px] font-bold  top-[15px] left-[100%] align-super">
                      +
                    </sup>
                  </span>

                  <h2 className=" ml-1 text-[#082c63] font-inter text-[28px] font-normal ">
                    Network
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="max-w-lg text-[#E0E0E0] font-inter text-base font-medium leading-[1.7em]">
            SMBF is a global network of high-value Muslim businesses and
            professionals. We offer unparalleled opportunities, support, and
            connections to economically empower the Muslim Ummah globally.
          </p>
        </div>
      </div>
      {/* 2-Column Layout */}
      <div className="grid md:grid-cols-[61.28%_34.72%] gap-[30px] mt-[83px] max-w-[1250px] mx-auto">
        {/* Left Column: Video + Stats */}
        <div className="flex flex-col gap-6">
          {/* Video Block */}
          <div className="my-[10px] bg-[#ddd] h-[431px] rounded-[20px] overflow-hidden">
            <video
              className="w-full h-full object-cover "
              src="https://smbf.global/wp-content/uploads/2023/07/SaveTube.io-SMBF-Promotional-Video-480p.mp4"
              poster="https://smbf.global/wp-content/uploads/2023/07/SMBF.png"
              controls
              preload="metadata"
              controlsList="nodownload"
            />
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Stat 1 */}
            <div className="bg-white p-6 rounded-[20px]">
              <h3 className="text-[#082C63] text-[24px] font-bold">£10M+</h3>
              <p className="text-[#575A5F] font-medium mt-2">
                Facilitated Trade
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Over 8 figures facilitated in international trade, boosting the
                Muslim economy.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white p-6 rounded-[20px]">
              <h3 className="text-[#082C63] text-[24px] font-bold">12+</h3>
              <p className="text-[#575A5F] font-medium mt-2">Countries</p>
              <p className="text-gray-500 text-sm mt-1">
                A thriving network of Muslim businesses and professionals across
                12 countries.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Tall Block */}
        <img
          className="object-cover bg-[#ccc] h-full rounded-[20px] flex items-center justify-center text-center text-gray-700 font-semibold text-xl"
          src="https://smbf.global/wp-content/uploads/2024/07/9.png"
        />
      </div>

      {/* CTA Button */}
      <div className="flex justify-center md:justify-end mt-8">
        <a href="#learnmore1">
          <button className="bg-white text-[#082C63] font-semibold py-3 px-6 rounded-full hover:shadow-lg transition">
            View Member Benefits →
          </button>
        </a>
      </div>
    </div>
  );
};

export default NetworkSection;
