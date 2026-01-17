import BlogList from "@/components/BlogList";
import BlogDetail from "@/components/BlogDetail";
import { useState } from "react";
import CreateBlog from "./CreateBlog";

export default function HomePage() {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

  return (
    <div className="min-h-screen">

      {/* NAVBAR */}
      <header className="w-full border-b bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold tracking-tight text-gray-800">CA Monk</h1>

          <nav className="flex gap-6 text-gray-600 font-medium">
            {["Tools", "Practice", "Events", "Job Board", "Points"].map((item) => (
              <a key={item} href="#" className="hover:text-indigo-600 transition">
                {item}
              </a>
            ))}

            <button className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
              Profile
            </button>
          </nav>
        </div>
      </header>

        {/* TITLE SECTION */}
        <section className="text-center py-16 bg-gradient-to-b from-indigo-50 to-white">
        <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight">
            CA Monk Blog
        </h2>

        <p className="text-gray-600 mt-4 text-xl max-w-2xl mx-auto leading-relaxed">
            Stay updated with the latest trends in finance, accounting, and career growth.
        </p>
        </section>
        <CreateBlog />

        {/* FEATURED ARTICLE */}
        <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
            
            <div className="relative">
            <img
                src="https://cruel-cyan-ypmeua0iva.edgeone.app/future.png"
                alt="featured"
                className="w-full h-80 object-cover"
            />

            {/* Overlay Tag */}
            <span className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow">
                FEATURED
            </span>
            </div>

            <div className="p-8">
            <p className="text-indigo-700 font-semibold tracking-wide">FINANCE</p>

            <h2 className="text-3xl font-bold mt-2 text-gray-900 leading-snug hover:text-indigo-700 transition">
                The Future of Fintech in 2024
            </h2>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm mt-3">
                <span className="flex items-center gap-1">
                📈 Fintech & AI
                </span>
                <span className="flex items-center gap-1">
                ⏱️ 5 mins read
                </span>
                <span className="flex items-center gap-1">
                📅 Oct 24, 2023
                </span>
            </div>

            {/* Description */}
            <p className="text-gray-700 mt-5 leading-7">
                Explore how AI, blockchain, and automation are reshaping the financial
                landscape — and what this means for the accountants of tomorrow.
            </p>

            {/* Read Button */}
            <button className="mt-6 px-6 py-3 bg-indigo-600 text-white text-lg rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all">
                Read Article
            </button>
            </div>
        </div>
        </div>

      {/* BLOG LIST + DETAIL GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-6">

        {/* SIDEBAR LIST */}
        <div className="bg-white rounded-xl shadow p-4 md:h-[75vh] overflow-auto">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Latest Articles</h3>
          <BlogList onSelectBlog={setSelectedBlogId} />
        </div>

        {/* BLOG DETAILS */}
        <div className="md:col-span-2 bg-white rounded-xl shadow p-6 h-[75vh] overflow-auto">
          <BlogDetail blogId={selectedBlogId} />
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 mt-12 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 px-6">

          <div>
            <h3 className="text-white font-bold mb-2 text-lg">CA MONK</h3>
            <p className="text-sm leading-6">
              Empowering the next generation of financial leaders with tools, 
              community and knowledge.
            </p>
          </div>

          <div>
            <p className="font-semibold text-white mb-2">RESOURCES</p>
            <ul className="space-y-2 text-sm">
              <li>Blog</li>
              <li>Webinars</li>
              <li>Case Studies</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white mb-2">PLATFORM</p>
            <ul className="space-y-2 text-sm">
              <li>Job Board</li>
              <li>Practice Tests</li>
              <li>Mentorship</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white mb-2">CONNECT</p>
            <ul className="space-y-2 text-sm">
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-10">
          © 2024 CA Monk. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
