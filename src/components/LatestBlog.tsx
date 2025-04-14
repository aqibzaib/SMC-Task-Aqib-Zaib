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
    <section className="bg-[#f0f4fa] py-16 px-4 text-center max-w-[1250px]">
      <h2 className="text-4xl font-bold text-[#0a2a66] mb-12">Latest Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-sm"
          >
            <div className="relative max-w-[387px]">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <span className="absolute bottom-4 left-4 bg-[#2eb6b0] text-white text-sm font-semibold px-4 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            <div className="text-left p-6">
              <h3
                className={`text-xl font-semibold text-[#0a2a66] ${
                  post.extraTitle ? "" : "mb-3"
                }`}
              >
                {post.title}
              </h3>
              {post.extraTitle && (
                <h3 className="text-xl font-semibold text-[#0a2a66] mb-3">
                  {post?.extraTitle}
                </h3>
              )}
              <p className="text-gray-600 text-sm mb-4">{post.description}</p>
              <button className="inline-flex items-center justify-center border border-[#0a2a66] text-[#0a2a66] rounded-3xl w-[61px] hover:bg-[#0a2a66] hover:text-white transition duration-300">
                <MoveRight strokeWidth={"1px"} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestBlogs;
