import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Muslim International Markets",
    description:
      "Access international markets with support for G2M strategies, business partnerships, and participation in international delegations. Executive members receive personalised advice and contracts for consultancy services as needed.",
  },
  {
    title: "Muslim Venture Builder",
    description:
      "Support members from the idea phase to execution. Submit your business idea and support needs, then follow up with our admin team to receive personalised guidance, mentorship, and transition into business membership.",
  },
  {
    title: "Muslim Invest",
    description:
      "Muslim Invest connects companies looking for investment with angel investors. We offer vetted, high-quality investments for angel investors and provide recommendations for first-time and small-scale investors. All investments are  Shariah-compliant.To learn more about joining Muslim Invest to apply for investment for your business Click Here.",
  },
  {
    title: "Muslim Mentor Academy",
    description:
      "Connect with mentors for business growth, startup support, professional development, or student guidance. After filling out a form detailing your mentorship needs, you will be paired with relevant mentors. Feedback and testimonials help us continuously improve the program.",
  },
];

const Membership = () => {
  const [activeServiceFirstTwo, setActiveServiceFirstTwo] =
    useState<string>("");
  const [activeServiceLastTwo, setActiveServiceLastTwo] = useState<string>("");

  const handleToggleFirstTwo = (title: string) => {
    setActiveServiceFirstTwo((prev) => (prev === title ? "" : title));
  };

  const handleToggleLastTwo = (title: string) => {
    setActiveServiceLastTwo((prev) => (prev === title ? "" : title));
  };

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

      <div className="bg-blue-50 rounded-3xl p-8 shadow-md min-h-[469px]">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            {services.slice(0, 2).map((service) => (
              <div
                key={service.title}
                className="mb-[10px]  border border-[#2366CD94] rounded-[10px] bg-white overflow-hidden"
              >
                <button
                  onClick={() => handleToggleFirstTwo(service.title)}
                  className={`w-full flex justify-between items-center px-4 py-3 font-semibold text-sm text-left text-blue-800 bg-white   ${
                    activeServiceFirstTwo === service.title
                      ? "bg-custom-gradient text-white"
                      : ""
                  }`}
                >
                  {service.title}
                  {activeServiceFirstTwo === service.title ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
                <div
                  className={` transition-all duration-500 ease-in-out overflow-hidden relative ${
                    activeServiceFirstTwo === service.title
                      ? "max-h-[1000px] opacity-100 "
                      : "max-h-0 opacity-0 "
                  }`}
                >
                  {activeServiceFirstTwo === service.title &&
                    service.description && (
                      <div className="px-4 py-3 text-sm text-gray-700 border-t bg-blue-100">
                        {service.description}
                      </div>
                    )}
                </div>
              </div>
            ))}
          </div>

          <div>
            {services.slice(2).map((service) => (
              <div
                key={service.title}
                className="mb-4 border rounded-md bg-white overflow-hidden"
              >
                <button
                  onClick={() => handleToggleLastTwo(service.title)}
                  className={`w-full flex justify-between items-center px-4 py-3 font-semibold text-sm text-left text-blue-800 bg-white hover:bg-blue-100 ${
                    activeServiceLastTwo === service.title
                      ? "bg-custom-gradient text-white transtion-all duration-300"
                      : ""
                  }`}
                >
                  {service.title}
                  {activeServiceLastTwo === service.title ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden relative ${
                    activeServiceLastTwo === service.title
                      ? "max-h-[1000px] opacity-100 transition-all duration-500 ease-in-out"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {activeServiceLastTwo === service.title &&
                    service.description && (
                      <div className="px-4 py-3 text-sm text-gray-700 border-t bg-blue-100">
                        {service.description}
                      </div>
                    )}
                </div>
              </div>
            ))}
          </div>
        </div>

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
