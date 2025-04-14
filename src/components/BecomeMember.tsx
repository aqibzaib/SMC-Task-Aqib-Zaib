export default function BecomeMember() {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden mt-[78px]">
      {/* Left Section - Text */}
      <div className="bg-[linear-gradient(134deg,_#0D3B82_13%,_#3A97A4_100%)] text-white p-8 md:w-1/2 flex flex-col justify-center">
        <h2 className="text-[#FFFFFF] font-[Redtone] text-[52px] font-semibold capitalize leading-[1.2em]">
          Now Is Your Chance To Be Supported By A Like Minded Community
        </h2>
        <p className="mt-5 mb-10 text-[#FFFFFF] font-[Redtone] text-[24px] font-[300]">
          Together, We'll Empower The Muslim Ummah.
        </p>
        <button className=" w-fit block bg-transparent px-[25px] py-[12px] font-dm-sans text-[18px] font-bold uppercase no-underline leading-[1em] tracking-[0.1em] text-white bg-gradient-to-r from-[#3A97A4] to-[#2366CD] border border-white/70 rounded-[12px] shadow-[0_0_10px_rgba(13,25,58,0.53)]">
          BECOME A MEMBER
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 h-80 md:h-auto">
        <img
          src="https://smbf.global/wp-content/uploads/2024/07/10.png"
          alt="Community group photo"
          className="max-w-[600px] max-h-[415px] w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
