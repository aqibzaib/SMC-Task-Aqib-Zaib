import React from "react";
import GradientButton from "./common/GradientButton";

const BusinessCommunitySection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F2F7FF] py-[117px]">
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

      <div className="container relative mx-auto flex flex-col items-center gap-10 px-6 md:flex-row md:px-12">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://smbf.global/wp-content/uploads/2023/07/SMBF-WebPic-1.png"
            alt="Members of the SMBF Muslim Business Community"
            className="max-h-[401px] w-full max-w-[503px] justify-self-end rounded-lg object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full text-center md:w-1/2 md:text-left">
          <h2 className="mb-6 max-w-[500px] font-redtone text-[54px] font-medium leading-[1em] text-[#082C63]">
            Join A Supportive Business Community
          </h2>
          <p className="pb-[19px] font-inter text-[18px] font-normal leading-[1.7em] text-gray-500">
            We help our members with a wide range of services designed to
            support their business journey. From securing Shariah-compliant
            investments to personalised mentorship for business growth and
            professional development. Connecting members with essential business
            and professional services. Career support or strategic advice for
            international expansion. We provide our members with invaluable
            support at every stage.
          </p>
          <GradientButton href="#" className="mb-4 mt-[30px]">
            Learn More
          </GradientButton>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 150"
          className="h-[100px] w-full"
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
