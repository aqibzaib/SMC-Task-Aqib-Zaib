import React from "react";

const videos = [
  {
    src: "https://smbf.global/wp-content/uploads/2024/10/0908-1-copy-copy-copy3.mov#t=1",
    name: "Ismail Mustafa",
    position: "Head of Operations at Cur8 Capital",
  },
  {
    src: "https://smbf.global/wp-content/uploads/2024/10/0908-1-copy-copy-copy-copy2.mov#t=1",
    name: "Kamaran Shaikh",
    position: "Managing Director at Morgan Reach",
  },
  {
    src: "https://smbf.global/wp-content/uploads/2024/10/0908-1-copy-copy-copy-copy-1.mov#t=1",
    name: "Rizwan Hussain",
    position: "Account Executive at Straight Path Consulting",
  },
];

const SmbfSupportSection: React.FC = () => {
  return (
    <section className="relative bg-[#3287B2] py-[100px]">
      {/* Top curve */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 150"
          className="w-full h-[100px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,100 1140,100 1440,0 L1440,0 L0,0 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className=" text-white max-w-[1250px] mx-auto">
        {/* Heading */}
        <h2 className="text-[42px] leading-[1em] capitalize font-redtone text-white text-center mb-[30px] font-medium">
          See How SMBF is Supporting Businesses & Professionals
        </h2>

        {/* Videos */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4">
          {videos.map((video, idx) => (
            <div
              key={idx}
              className="bg-white border-4 border-[#A8D5F5] rounded-[30px] p-2 shadow-xl w-[300px] relative"
            >
              <div className="overflow-hidden rounded-[20px] relative">
                <video
                  className="w-full h-auto rounded-[20px]"
                  src={video.src}
                  controls
                  preload="metadata"
                  controlsList="nodownload"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-5">
          <button className="block bg-transparent px-[25px] py-[12px] font-dm-sans text-[18px] font-bold uppercase no-underline leading-[1em] tracking-[0.1em] text-white bg-gradient-to-r from-[#3A97A4] to-[#2366CD] border border-white/70 rounded-[12px] shadow-[0_0_10px_rgba(13,25,58,0.53)]">
            BECOME A MEMBER
          </button>
        </div>
      </div>

      <div className="absolute bottom-100 left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 150"
          className="w-full h-[100px] rotate-180"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,100 1140,100 1440,0 L1440,0 L0,0 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default SmbfSupportSection;
