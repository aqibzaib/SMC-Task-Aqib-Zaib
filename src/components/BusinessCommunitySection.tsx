import React from "react";
import GradientButton from "./common/GradientButton";

const BusinessCommunitySection: React.FC = () => {
  return (
    <section className="relative bg-[#F2F7FF] py-[117px] overflow-hidden">
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

      <div className="relative container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://smbf.global/wp-content/uploads/2023/07/SMBF-WebPic-1.png"
            alt="Members of the SMBF Muslim Business Community"
            className="justify-self-end rounded-lg w-full object-cover max-h-[401px] max-w-[503px]"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="max-w-[500px] font-redtone text-[54px] leading-[1em] font-medium  text-[#082C63] mb-6">
            Join A Supportive Business Community
          </h2>
          <p className="pb-[19px] text-gray-500 font-inter text-[18px] font-normal leading-[1.7em]">
            We help our members with a wide range of services designed to
            support their business journey. From securing Shariah-compliant
            investments to personalised mentorship for business growth and
            professional development. Connecting members with essential business
            and professional services. Career support or strategic advice for
            international expansion. We provide our members with invaluable
            support at every stage.
          </p>
          <GradientButton href="#" className="mt-[30px] mb-4">
            Learn More
          </GradientButton>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 150"
          className="w-full h-[100px] "
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C480,100 960,100 1440,0 L1440,150 L0,150 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default BusinessCommunitySection;
