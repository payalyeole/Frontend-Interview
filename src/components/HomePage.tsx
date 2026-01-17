import BlogList from "@/components/BlogList";
import BlogDetail from "@/components/BlogDetail";
import { useState } from "react";
import CreateBlog from "./CreateBlog";
import { Menu, Search, Briefcase, Gift, Calendar, User, ChevronDown, BookOpen, Bell, ToolCase } from "lucide-react";
export default function HomePage() {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);
    const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div className="min-h-screen  ">

      {/* NAVBAR */}
    <header className="border-b bg-white shadow-md sticky top-0 z-50">

      {/* Top Header */}
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

        {/* Logo + Menu */}
        <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-xl shadow-md">
                <BookOpen className="text-white w-6 h-6" />
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
                CA<span className="text-indigo-600">Monk</span>
            </h1>
        </div>


        {/* Sticky Search Bar */}
        <div className="hidden md:flex items-center relative w-1/3">
          <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search tools, jobs, events..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">

          {/* Notification Bell */}
          <div className="relative cursor-pointer">
            <Bell className="h-6 w-6 text-gray-700 hover:text-indigo-600 transition" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-600 rounded-full"></span>
          </div>

          {/* Avatar + Dropdown */}
          <div className="relative">
            <div
              onClick={() => setOpenDropdown(!openDropdown)}
              className="flex items-center gap-2 cursor-pointer"
            >
              {/* Avatar */}
              <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold shadow">
                P
              </div>

              <ChevronDown
                className={`transition-transform ${
                  openDropdown ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Animated Dropdown */}
            {openDropdown && (
              <div className="absolute right-0 mt-3 w-48 bg-white border rounded-xl shadow-lg overflow-hidden animate-fadeSlide">
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition"
                >
                  <User size={18} /> My Profile
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition"
                >
                  <BookOpen size={18} /> My Courses
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition"
                >
                  <Briefcase size={18} /> Applied Jobs
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition"
                >
                  <Gift size={18} /> Rewards
                </a>
                <div className="border-t"></div>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 text-red-600 transition"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="hidden md:flex justify-center gap-10 py-3 bg-gray-50 border-t">
        <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition">
          <ToolCase size={18} /> Tools
        </a>

        <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition">
          <Calendar size={18} /> Practice
        </a>

        <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition">
          <Gift size={18} /> Events
        </a>

        <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition">
          <Briefcase size={18} /> Job Board
        </a>

        <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition">
          ⭐ Points
        </a>
      </nav>
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

      {/* BLOG LIST + DETAIL GRID */}
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-6">

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
        <footer className="bg-gray-950 text-gray-300 mt-16 pt-14 pb-8 relative">

        {/* Top Gradient Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

            {/* Brand Section */}
            <div>
            <h3 className="text-white font-bold text-2xl tracking-wide">CA MONK</h3>
            <p className="text-sm mt-3 leading-6 text-gray-400">
                Empowering the next generation of financial leaders with tools, 
                community, and knowledge to grow professionally.
            </p>
            </div>

            {/* Resources */}
            <div>
            <p className="font-semibold text-white text-lg mb-3">Resources</p>
            <ul className="space-y-2 text-sm">
                <li className="hover:text-white transition cursor-pointer">Blog</li>
                <li className="hover:text-white transition cursor-pointer">Webinars</li>
                <li className="hover:text-white transition cursor-pointer">Case Studies</li>
            </ul>
            </div>

            {/* Platform */}
            <div>
            <p className="font-semibold text-white text-lg mb-3">Platform</p>
            <ul className="space-y-2 text-sm">
                <li className="hover:text-white transition cursor-pointer">Job Board</li>
                <li className="hover:text-white transition cursor-pointer">Practice Tests</li>
                <li className="hover:text-white transition cursor-pointer">Mentorship</li>
            </ul>
            </div>

            {/* Connect */}
            <div>
            <p className="font-semibold text-white text-lg mb-3">Connect</p>
            <ul className="space-y-2 text-sm">
                <li className="hover:text-white transition cursor-pointer">LinkedIn</li>
                <li className="hover:text-white transition cursor-pointer">Twitter</li>
                <li className="hover:text-white transition cursor-pointer">Instagram</li>
            </ul>
            </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-800 mt-12 pt-6">
            <p className="text-center text-xs text-gray-500">
            © 2024 CA Monk. All rights reserved.
            </p>
        </div>

        </footer>

    </div>
  );
}
