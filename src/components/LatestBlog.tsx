// components/LatestBlogs.tsx
import AOS from "aos";
import "aos/dist/aos.css";
import { MoveRight } from "lucide-react";
import React, { useEffect } from "react";

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
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="relative mt-[68px] bg-blue-50 px-4 pb-[120px] pt-16 text-center">
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
        <h2 className="mb-12 text-4xl font-bold text-[#0a2a66]"></h2>
        <h2 className="mb-10 text-center font-redtone text-[64px] font-medium leading-[1em] text-[#082C63]">
          Latest Blogs
        </h2>
        <div
          className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-3"
          data-aos="fade-up"
        >
          {blogPosts.map((post, index) => (
            <div key={index} className="overflow-hidden rounded-xl">
              <div className="relative max-w-[387px]">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="h-64 w-full rounded-xl object-cover"
                />
                <p className="absolute bottom-1 left-3 rounded-full bg-[#2eb6b0] px-[15px] py-2 font-inter text-[12px] font-bold leading-[1em] tracking-[0.1em] text-white">
                  {post.category}
                </p>
              </div>
              <div className="py-7 text-left">
                <h3
                  className={`font-redtone text-[32px] font-medium leading-8 text-[#0a2a66] ${
                    post.extraTitle ? "" : "mb-3"
                  }`}
                >
                  {post.title}
                </h3>
                {post.extraTitle && (
                  <h3 className="mb-3 font-redtone text-[32px] font-medium leading-8 text-[#0a2a66]">
                    {post?.extraTitle}
                  </h3>
                )}
                <p className="mb-4 font-inter text-[16px] font-normal leading-[1.7em] text-[#0000008A]">
                  {post.description}
                </p>
                <button className="inline-flex w-[61px] items-center justify-center rounded-3xl border border-[#0a2a66] text-[#0a2a66] transition duration-300 hover:bg-[#0a2a66] hover:text-white">
                  <MoveRight strokeWidth={"1px"} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="rounded-full border-none bg-[#082C63] px-[34px] py-[20px] font-inter text-[15px] font-bold uppercase leading-[1em] tracking-[0.1em] text-white shadow-[0px_0px_0px_0px_rgba(0,0,0,0.5)] transition duration-200 hover:bg-[#2366CD]">
          Load More
        </button>
      </div>
    </section>
  );
};

export default LatestBlogs;
