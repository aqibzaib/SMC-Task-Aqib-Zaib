export default function BecomeMember() {
  return (
    <div className="mx-auto mt-[78px] flex max-w-[1200px] flex-col overflow-hidden rounded-2xl bg-white shadow-lg md:flex-row">
      {/* Left Section - Text */}
      <div className="flex flex-col justify-center bg-[linear-gradient(134deg,_#0D3B82_13%,_#3A97A4_100%)] p-8 text-white md:w-1/2">
        <h2 className="font-[Redtone] text-[52px] font-semibold capitalize leading-[1.2em] text-[#FFFFFF]">
          Now Is Your Chance To Be Supported By A Like Minded Community
        </h2>
        <p className="mb-10 mt-5 font-[Redtone] text-[24px] font-[300] text-[#FFFFFF]">
          Together, We'll Empower The Muslim Ummah.
        </p>
        <button className="block w-fit rounded-[12px] border border-white/70 bg-transparent bg-gradient-to-r from-[#3A97A4] to-[#2366CD] px-[25px] py-[12px] font-dm-sans text-[18px] font-bold uppercase leading-[1em] tracking-[0.1em] text-white no-underline shadow-[0_0_10px_rgba(13,25,58,0.53)]">
          BECOME A MEMBER
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="h-80 md:h-auto md:w-1/2">
        <img
          src="https://smbf.global/wp-content/uploads/2024/07/10.png"
          alt="Community group photo"
          className="h-full max-h-[415px] w-full max-w-[600px] object-cover"
        />
      </div>
    </div>
  );
}
