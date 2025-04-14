import React from "react";
import GradientButton from "./common/GradientButton";

const VisionHighlight: React.FC = () => {
  return (
    <section
      className="bg-white px-[6px] py-[80px] md:px-[12px]"
      style={{ borderRadius: "0% 0% 60% 40%  / 0% 0% 5% 5%" }}
    >
      <div
        className="mx-auto grid max-w-[1250px] items-center gap-10 md:grid-cols-2"
        style={{ borderRadius: "0% 0% 60% 40%  / 0% 0% 5% 5%" }}
      >
        {/* Left Column */}
        <div>
          <h2 className="font-redtone text-[54px] font-medium leading-[1em] text-[#082C63]">
            Connecting Muslims. <br />
            Supporting Businesses. <br />
            <span> Empowering the Ummah.</span>
          </h2>
          <p className="mt-[20px] font-inter text-[18px] font-normal leading-[1.7em] text-gray-500">
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
            className="max-h-[401px] w-full max-w-[503px] justify-self-end rounded-[25px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default VisionHighlight;
