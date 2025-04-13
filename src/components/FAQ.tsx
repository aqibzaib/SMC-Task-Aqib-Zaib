import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState, ReactNode } from "react";

const services = [
  {
    title: "Muslim International Markets",
    description:
      "Access international markets with support for G2M strategies, business partnerships, and participation in international delegations. Executive members receive personalised advice and contracts for consultancy services as needed.",
  },
  {
    title: "Muslim Invest",
    description:
      "Muslim Invest connects companies looking for investment with angel investors. We offer vetted, high-quality investments for angel investors and provide recommendations for first-time and small-scale investors. All investments are Shariah-compliant. To learn more about joining Muslim Invest to apply for investment for your business Click Here.",
  },
  {
    title: "Muslim Venture Builder",
    description:
      "Support members from the idea phase to execution. Submit your business idea and support needs, then follow up with our admin team to receive personalised guidance, mentorship, and transition into business membership.",
  },

  {
    title: "Muslim Mentor Academy",
    description:
      "Connect with mentors for business growth, startup support, professional development, or student guidance. After filling out a form detailing your mentorship needs, you will be paired with relevant mentors. Feedback and testimonials help us continuously improve the program.",
  },
];

const ExpandableList: React.FC<{
  items: { title: string; content: ReactNode }[];
}> = ({ items }) => {
  const [activeLeftIndex, setActiveLeftIndex] = useState<number | null>(null);
  const [activeRightIndex, setActiveRightIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    const isLeft = index % 2 === 0;
    const isOpen = isLeft
      ? activeLeftIndex === index
      : activeRightIndex === index;

    if (isLeft) {
      setActiveLeftIndex(isOpen ? null : index);
    } else {
      setActiveRightIndex(isOpen ? null : index);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 items-start">
      {items.map((item, index) => {
        const isOpen =
          index % 2 === 0
            ? activeLeftIndex === index
            : activeRightIndex === index;

        return (
          <div
            key={index}
            className="mb-[10px]  border border-[#2366CD94] rounded-[10px] bg-white  transition-all duration-300"
          >
            <button
              onClick={() => toggleItem(index)}
              className={`w-full text-left px-5 py-4 flex justify-between items-center rounded-[10px] font-medium text-lg focus:outline-none ${
                isOpen
                  ? "bg-custom-gradient text-white transition-all ease-in-out duration-300"
                  : ""
              }`}
            >
              <span
                className={`font-bold font-inter text-[16px] leading-[1.7em]  ${
                  isOpen ? "text-white" : "text-[#575A5F] "
                }`}
              >
                {item.title}
              </span>
              <span className="text-2xl">
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </span>
            </button>
            <div
              className={` text-[#0000008A] font-inter text-[16px] font-normal leading-[1.7em] transition-all duration-300 overflow-hidden pr-[40px]  pl-[25px] ${
                isOpen ? "max-h-[1000px] pb-[20px] pt-[20px] " : "max-h-0"
              }`}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const FAQAndServices: React.FC = () => {
  return (
    <div className="w-full max-w-[1250px]">
      <ExpandableList
        items={services.map((service) => ({
          title: service.title,
          content: <p>{service.description}</p>,
        }))}
      />
    </div>
  );
};

export default FAQAndServices;
