import AutoPlaySlider from "./AutoPlayerSlider";
import FAQAndServices from "./FAQ";

const Membership = () => {
  return (
    <div className="mx-auto max-w-[1250px] bg-white px-3 py-16">
      <div className="mb-12 flex flex-row items-center justify-between">
        <div className="">
          <h2 className="mb-2 font-redtone text-[64px] font-medium leading-[1em] text-[#082c63]">
            Become A Member
          </h2>
          <p className="font-redtone text-[40px] font-medium leading-[48px] tracking-normal text-[#082C63]">
            Benefit From Our Expert Services
          </p>
        </div>
        <div className="max-w-[520px]">
          <p className="font-inter text-[18px] font-normal leading-[1.7em] text-gray-500">
            Join SMBF today and unlock a wealth of business and professional
            support services. From expert mentorship to vital business
            connections, we provide the tools you need for growth and success.
          </p>
        </div>
      </div>

      <div className="mb-0 mt-[40px] rounded-[20px] border border-[#2366CD4D] bg-transparent bg-gradient-to-b from-[#F2F7FF] to-[#F7FAFF] p-[50px] duration-300">
        <FAQAndServices />

        <div className="my-[15px] max-w-[1250px] py-[74px]">
          <AutoPlaySlider />
        </div>

        <div className="flex justify-center">
          <button className="w-full max-w-[450px] rounded-[12px] border-none bg-gradient-to-br from-[#3A97A4] to-[#2366CD] py-[9px] font-dm-sans text-[18px] font-bold uppercase leading-[1em] tracking-[0.1em] text-white shadow-[0_0_10px_0_rgba(255,255,255,0.5)] transition-all hover:shadow-[0_0_15px_0_rgba(255,255,255,0.6)]">
            BECOME A MEMBER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Membership;
