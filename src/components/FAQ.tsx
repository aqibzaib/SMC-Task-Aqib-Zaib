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
    <div className="grid items-start gap-6 md:grid-cols-2">
      {items.map((item, index) => {
        const isOpen =
          index % 2 === 0
            ? activeLeftIndex === index
            : activeRightIndex === index;

        return (
          <div
            key={index}
            className="mb-[10px] rounded-[10px] border border-[#2366CD94] bg-white transition-all duration-300"
          >
            <button
              onClick={() => toggleItem(index)}
              className={`flex w-full items-center justify-between rounded-[10px] px-5 py-4 text-left text-lg font-medium focus:outline-none ${
                isOpen
                  ? "bg-custom-gradient text-white transition-all duration-300 ease-in-out"
                  : ""
              }`}
            >
              <span
                className={`font-inter text-[16px] font-bold leading-[1.7em] ${
                  isOpen ? "text-white" : "text-[#575A5F]"
                }`}
              >
                {item.title}
              </span>
              <span className="text-2xl">
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </span>
            </button>
            <div
              className={`overflow-hidden pl-[25px] pr-[40px] font-inter text-[16px] font-normal leading-[1.7em] text-[#0000008A] transition-all duration-300 ${
                isOpen ? "max-h-[1000px] pb-[20px] pt-[20px]" : "max-h-0"
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
