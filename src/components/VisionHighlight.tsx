import React from "react";
import GradientButton from "./common/GradientButton";

const VisionHighlight: React.FC = () => {
  return (
    <section
      className="bg-white py-[80px] px-[6px] md:px-[12px]"
      style={{ borderRadius: "0% 0% 60% 40%  / 0% 0% 5% 5%" }}
    >
      <div
        className="max-w-[1250px] mx-auto grid md:grid-cols-2 gap-10 items-center "
        style={{ borderRadius: "0% 0% 60% 40%  / 0% 0% 5% 5%" }}
      >
        {/* Left Column */}
        <div>
          <h2 className="font-redtone text-[54px] leading-[1em] font-medium  text-[#082C63] ">
            Connecting Muslims. <br />
            Supporting Businesses. <br />
            <span> Empowering the Ummah.</span>
          </h2>
          <p className=" mt-[20px]  text-gray-500 font-inter text-[18px] font-normal leading-[1.7em]">
            SMBF revives the sunnah of creating mutually beneficial
            relationships between Muslims, as the Messenger of Allah <b>ﷺ</b>{" "}
            did when he paired up the Muhajiruun with the Ansar, to establish
            the market of Medinah, which was the world’s first tax-free zone.
          </p>
          <div className="mt-8">
            <GradientButton href="#learnmore1">Learn More</GradientButton>
          </div>
        </div>

        {/* Right Column (Image) */}
        <div>
          <img
            src="https://smbf.global/wp-content/uploads/2023/04/SMBF-WebPic-2.png"
            alt="Shariah-compliant investors discussing Muslim Invest"
            className="justify-self-end rounded-[25px] w-full object-cover max-h-[401px] max-w-[503px]"
          />
        </div>
      </div>
    </section>
  );
};

export default VisionHighlight;
