import React from "react";

const HomeBlogs: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold text-gray-800 text-left border-b-2  pb-2  border-[#F06392] mb-8 w-64 ">
        Latest Blog Posts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm">{blog.description}</p>
              <div className="mt-4 text-sm text-gray-500">
                <span>{blog.date} • </span>
                <span className="font-semibold">{blog.author}</span>
              </div>
              <button className="mt-4 text-[#F06392] hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeBlogs;
const blogs = [
  {
    id: 1,
    title: "The Future of E-Commerce: Trends to Watch in 2025",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzC9bBzopE4a5tFmg3LVSAWSW9SrvJLmRvmw&s",
    description:
      "Explore the latest trends shaping the future of online shopping, from AI-driven recommendations to seamless checkout experiences.",
    date: "February 4, 2025",
    author: "John Doe",
  },
  {
    id: 2,
    title: "Top 10 Productivity Hacks for Remote Work",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBf9ebuZggsy2uffTBeLLHL6pnZNXrHc5L8A&s",
    description:
      "Maximize your efficiency while working from home with these proven strategies and tools.",
    date: "January 25, 2025",
    author: "Sarah Smith",
  },
  {
    id: 3,
    title: "Why UX/UI Design Matters in 2025",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCNYe5iu_sfibkCvr4E96W-7G_1z5Nm7_dnA&s",
    description:
      "Discover how an intuitive design can enhance user engagement and drive conversions in your digital projects.",
    date: "January 10, 2025",
    author: "Emily Carter",
  },
];
