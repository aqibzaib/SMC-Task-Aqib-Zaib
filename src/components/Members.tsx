
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
    <section className="relative bg-blue-50 px-4 pb-[96px] pt-[140px]">
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

      <div className="mx-auto max-w-[1250px]">
        <h2 className="mb-[25px] text-center font-redtone text-[64px] font-medium leading-[1em] text-[#082C63]">
          Some of Our Members
        </h2>
        <div className="mx-auto grid grid-cols-1 gap-[10px] px-[44px] sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => (
            <div key={member.name} className="relative">
              <img
                src={member.image}
                alt={member.name}
                className={`mb-6 h-[412px] max-w-[370px] rounded-3xl ${
                  index != 0 ? "object-cover" : ""
                }`}
              />
              <div className="absolute bottom-11 left-1/2 w-full max-w-[330px] -translate-x-1/2 transform rounded-2xl bg-white/30 bg-opacity-70 px-4 py-2 text-white backdrop-blur-md">
                <h3 className="m-0 p-0 text-center font-redtone text-[42px] font-semibold capitalize leading-none">
                  {member.name}
                </h3>
                <p className="m-0 p-0 text-center font-redtone text-[18px] leading-tight">
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

export default Members;
