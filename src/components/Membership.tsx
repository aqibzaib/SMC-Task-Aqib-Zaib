import AutoPlaySlider from "./AutoPlayerSlider";
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

      <div className="border  border-[#2366CD4D] bg-transparent bg-gradient-to-b from-[#F2F7FF] to-[#F7FAFF] duration-300  mt-[40px]  mb-0  p-[50px] rounded-[20px]">
        <FAQAndServices />

        <div className="py-[74px] my-[15px] max-w-[1250px] ">
          <AutoPlaySlider />
        </div>

        <div className="flex justify-center">
          <button className="text-white py-[9px] max-w-[450px] w-full rounded-[12px] transition-all font-dm-sans text-[18px] font-bold uppercase leading-[1em] tracking-[0.1em] bg-gradient-to-br from-[#3A97A4] to-[#2366CD] shadow-[0_0_10px_0_rgba(255,255,255,0.5)] hover:shadow-[0_0_15px_0_rgba(255,255,255,0.6)] border-none">
            BECOME A MEMBER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Membership;
