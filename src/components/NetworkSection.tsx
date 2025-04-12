import React from "react";

const NetworkSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 py-12 px-4">
      <div className="">
        <div className="mb-8">
          <h1 className="text-white text-4xl font-semibold">
            Your Global Muslim Business Network
          </h1>
        </div>

        <div className="grid grid-cols-2">
          <div className="mt-12 text-center ">
            <div className="bg-white shadow-xl p-6 items-center flex flex-row justify-around max-w-[476px] w-full rounded-[20px]">
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

        {/* <div className="mt-8 text-center text-lg text-gray-700">
          <p>
            SMBF is a global network of high-value Muslim businesses and
            professionals. We offer unparalleled opportunities, support, and
            connections to economically empower the Muslim Ummah globally.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default NetworkSection;
