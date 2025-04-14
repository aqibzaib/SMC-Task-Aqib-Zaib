import React from "react";

const members = [
  {
    name: "Adam Kiani",
    title: "Fitness Industry & Investment CEO",
    image: "https://smbf.global/wp-content/uploads/2024/07/1686184449993.jpeg", // Replace with your actual image path
  },
  {
    name: "Saj Hussain",
    title: "Property Investor & Entrepreneur",
    image: "https://smbf.global/wp-content/uploads/2024/07/1646230591827.jpeg", // Replace with your actual image path
  },
  {
    name: "Zhagum Arshad",
    title: "Offshoring Innovator & Entrepreneurial",
    image: "https://smbf.global/wp-content/uploads/2024/07/1704105715631.jpeg", // Replace with your actual image path
  },
];

const Members = () => {
  return (
    <section className="relative bg-blue-50 pb-[96px] pt-[140px] px-4 ">
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

      <div className="max-w-[1250px] mx-auto">
        <h2 className=" font-medium leading-[1em] font-redtone text-[64px] text-center text-[#082C63] mb-[25px]">
          Some of Our Members
        </h2>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px] px-[44px]">
          {members.map((member, index) => (
            <div key={member.name} className="relative">
              <img
                src={member.image}
                alt={member.name}
                className={`max-w-[370px] h-[412px] rounded-3xl mb-6 ${
                  index != 0 ? "object-cover" : ""
                }`}
              />
              <div className="max-w-[330px] absolute bottom-11 px-4 bg-white/30 backdrop-blur-md bg-opacity-70 text-white rounded-2xl py-2 w-full left-1/2 transform -translate-x-1/2">
                <h3 className="text-[42px] text-center font-redtone capitalize font-semibold m-0 p-0 leading-none">
                  {member.name}
                </h3>
                <p className="text-center text-[18px] m-0 p-0 font-redtone leading-tight">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
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

export default Members;
