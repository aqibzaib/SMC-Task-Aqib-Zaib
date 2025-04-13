import React from "react";

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
            <a
              href="#learnmore1"
              className="text-center inline-block w-[243px] px-[25px] py-[12px] text-white text-[15px] font-bold uppercase leading-[1em] tracking-[0.1em] rounded-[12px] shadow-[0_0_10px_rgba(255,255,255,0.5)]"
              style={{
                backgroundImage:
                  "linear-gradient(139deg, #3A97A4 0%, #2366CD 91%)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Learn More
            </a>
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
