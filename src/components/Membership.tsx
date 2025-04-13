import FAQAndServices from "./FAQ";

const Membership = () => {
  return (
    <div className="bg-white py-16 max-w-[1250px] px-3 mx-auto">
      <div className="mb-12 flex justify-between items-center flex-row">
        <div className="">
          <h2 className="leading-[1em] text-[64px] font-medium text-[#082c63] mb-2 font-redtone">
            Become A Member
          </h2>
          <p className="font-redtone text-[40px] leading-[48px] font-medium tracking-normal text-[#082C63]">
            Benefit From Our Expert Services
          </p>
        </div>
        <div className="max-w-[520px]">
          <p className="text-gray-500 font-inter text-[18px] font-normal leading-[1.7em]">
            Join SMBF today and unlock a wealth of business and professional
            support services. From expert mentorship to vital business
            connections, we provide the tools you need for growth and success.
          </p>
        </div>
      </div>

      <div
        className="
  border 
  border-[#2366CD4D] 
 bg-transparent bg-gradient-to-b from-[#F2F7FF] to-[#F7FAFF] 
  duration-300 
  mt-[40px] 
  mb-0 
  p-[50px]
  rounded-[20px]
"
      >
        <FAQAndServices />

        <div className="flex justify-center gap-12 mt-12 mb-8">
          <img
            src="/logos/im.png"
            alt="Muslim International Markets"
            className="h-10 md:h-14"
          />
          <img
            src="/logos/vb.png"
            alt="Muslim Venture Builder"
            className="h-10 md:h-14"
          />
          <img
            src="/logos/mi.png"
            alt="Muslim Invest"
            className="h-10 md:h-14"
          />
        </div>

        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-teal-400 to-blue-600 text-white font-semibold px-6 py-2 rounded-xl shadow-md hover:shadow-lg transition-all">
            BECOME A MEMBER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Membership;
