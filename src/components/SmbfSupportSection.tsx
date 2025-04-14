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
      <div className="absolute left-0 top-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 150"
          className="h-[100px] w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,100 1140,100 1440,0 L1440,0 L0,0 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-[1250px] text-white">
        {/* Heading */}
        <h2 className="mb-[30px] text-center font-redtone text-[42px] font-medium capitalize leading-[1em] text-white">
          See How SMBF is Supporting Businesses & Professionals
        </h2>

        {/* Videos */}
        <div className="flex flex-col items-center justify-center gap-8 px-4 md:flex-row">
          {videos.map((video, idx) => (
            <div
              key={idx}
              className="relative w-[300px] rounded-[30px] border-4 border-[#A8D5F5] bg-white p-2 shadow-xl"
            >
              <div className="relative overflow-hidden rounded-[20px]">
                <video
                  className="h-auto w-full rounded-[20px]"
                  src={video.src}
                  controls
                  preload="metadata"
                  controlsList="nodownload"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex justify-center">
          <button className="block rounded-[12px] border border-white/70 bg-transparent bg-gradient-to-r from-[#3A97A4] to-[#2366CD] px-[25px] py-[12px] font-dm-sans text-[18px] font-bold uppercase leading-[1em] tracking-[0.1em] text-white no-underline shadow-[0_0_10px_rgba(13,25,58,0.53)]">
            BECOME A MEMBER
          </button>
        </div>
      </div>

      <div className="bottom-100 absolute left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 150"
          className="h-[100px] w-full rotate-180"
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
