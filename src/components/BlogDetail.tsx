import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "@/api/blogApi";
import { Share2, Heart, MessageCircle } from "lucide-react";

type Props = { blogId: number | null };

export default function BlogDetail({ blogId }: Props) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogById(blogId!),
    enabled: !!blogId,
  });

  if (!blogId)
    return (
      <p className="p-6 text-gray-400 text-center">
        Select an article to view details.
      </p>
    );

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (isError) return <p className="p-6">Error loading blog.</p>;

  const readTime = Math.ceil(data.content.split(" ").length / 200);

  return (
    <div className="p-1 mins0 overflow-auto max-w-4xl mx-auto">

      {/* Cover Image */}
      <div className="relative">
        <img
          src={data.coverImage}
          className="w-full h-80 object-cover rounded-2xl shadow-xl"
        />

        {/* Gradient Overlay Tag */}
        <div className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
          {data.category[0]}
        </div>
      </div>

      {/* Category and Read Time */}
      <div className="mt-8 flex items-center gap-4">
        <span className="uppercase tracking-wide font-semibold text-indigo-600 text-sm">
          {data.category[0]}
        </span>

        <span className="text-gray-400 text-sm">• {readTime} min read</span>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-extrabold mt-3 text-gray-900 leading-tight tracking-tight">
        {data.title}
      </h1>

      {/* Share Button */}
      <button
        className="
          mt-5 flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 
          text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md
          hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition
        "
      >
        <Share2 size={16} /> Share Article
      </button>

      {/* Metadata Grid */}
      <div
        className="
          mt-8 grid grid-cols-1 sm:grid-cols-3
          border border-gray-200 rounded-xl divide-y sm:divide-y-0 sm:divide-x
          bg-white shadow-sm hover:shadow-md transition-all
        "
      >
        <div className="px-5 py-4">
          <p className="text-xs text-gray-400 font-semibold uppercase">
            Category
          </p>
          <p className="mt-1 font-medium text-gray-700">{data.category.join(", ")}</p>
        </div>

        <div className="px-5 py-4">
          <p className="text-xs text-gray-400 font-semibold uppercase">
            Read Time
          </p>
          <p className="mt-1 font-medium text-gray-700">{readTime} mins</p>
        </div>

        <div className="px-5 py-4">
          <p className="text-xs text-gray-400 font-semibold uppercase">
            Published On
          </p>
          <p className="mt-1 font-medium text-gray-700">
            {new Date(data.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-8 text-lg text-gray-700 leading-relaxed">
        {data.description}
      </p>

      {/* Content */}
      <article className="mt-8 text-gray-800 leading-8 whitespace-pre-line text-[17px]">
        {data.content}
      </article>

      {/* AUTHOR SECTION */}
      <div className="mt-16 border-t pt-10">
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Author"
            className="w-14 h-14 rounded-full border shadow-sm"
          />

          <div>
            <h3 className="font-semibold text-gray-900 text-lg">
              Written by Amit Singh
            </h3>
            <p className="text-gray-500 text-sm">
              Content Writer • Finance Researcher
            </p>
          </div>
        </div>

        {/* Like + Comment */}
        <div className="flex gap-6 mt-6">
          <button
            className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition"
          >
            <Heart size={20} />
            <span>Like</span>
          </button>

          <button
            className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition"
          >
            <MessageCircle size={20} />
            <span>Comment</span>
          </button>
        </div>
      </div>
    </div>
  );
}
