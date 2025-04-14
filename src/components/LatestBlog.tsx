// components/LatestBlogs.tsx
import { MoveRight } from "lucide-react";
import React from "react";

const blogPosts = [
  {
    title: "Top Skills You Can Develop with Muslim Career Support",
    description:
      "This article explores how Muslim career support can help professionals develop key skills such...",
    category: "MUSLIM CAREER ADVICE",
    imageUrl: "https://smbf.global/wp-content/uploads/2024/11/SMBF-23.png",
  },
  {
    title: "Step-by-Step Guide to Starting an Islamic Business",
    description:
      "Learn how to start an Islamic business with this comprehensive guide. Discover Shariah-compliant tips...",
    category: "ENTREPRENEUR MENTORSHIP",
    imageUrl:
      "https://smbf.global/wp-content/uploads/2024/11/Copy-of-SMBF-Events-1.png",
  },
  {
    title: "Career Mentorship for Muslim Women: ",
    extraTitle: "Overcoming Challenges and Succeeding",
    description:
      "Learn how to start a profitable halal business that aligns with Islamic values. This...",
    category: "ENTREPRENEUR MENTORSHIP",
    imageUrl: "https://smbf.global/wp-content/uploads/2024/11/SMBF-Events.png",
  },
];

const LatestBlogs: React.FC = () => {
  return (
    <section className="mt-[68px] relative pt-16 pb-[120px] px-4 text-center max-w-[1250px] bg-blue-50">
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
        <h2 className="text-4xl font-bold text-[#0a2a66] mb-12"></h2>
        <h2 className=" font-medium leading-[1em] font-redtone text-[64px] text-center text-[#082C63] mb-10">
          Latest Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <div key={index} className=" rounded-xl overflow-hidden ">
              <div className="relative max-w-[387px]">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-64 object-cover rounded-xl"
                />
                <p className="absolute bottom-1 left-3 bg-[#2eb6b0] text-white text-[12px] font-bold leading-[1em] tracking-[0.1em] font-inter px-[15px] py-2 rounded-full">
                  {post.category}
                </p>
              </div>
              <div className="text-left py-7">
                <h3
                  className={`text-[32px] font-redtone leading-8 font-medium text-[#0a2a66] ${
                    post.extraTitle ? "" : "mb-3"
                  }`}
                >
                  {post.title}
                </h3>
                {post.extraTitle && (
                  <h3 className="text-[32px] font-redtone leading-8 font-medium text-[#0a2a66] mb-3">
                    {post?.extraTitle}
                  </h3>
                )}
                <p className=" text-[#0000008A] font-inter text-[16px] font-normal leading-[1.7em] mb-4">
                  {post.description}
                </p>
                <button className="inline-flex items-center justify-center border border-[#0a2a66] text-[#0a2a66] rounded-3xl w-[61px] hover:bg-[#0a2a66] hover:text-white transition duration-300">
                  <MoveRight strokeWidth={"1px"} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-[#082C63] hover:bg-[#2366CD] text-white px-[34px] py-[20px] rounded-full border-none shadow-[0px_0px_0px_0px_rgba(0,0,0,0.5)] transition duration-200 font-inter text-[15px] font-bold  uppercase leading-[1em] tracking-[0.1em]">
          Load More
        </button>
      </div>
    </section>
  );
};

export default LatestBlogs;
