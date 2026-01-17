import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "@/api/blogApi";
import { Share2, Heart, MessageCircle } from "lucide-react";
import { useState } from "react";

type Props = { blogId: number | null };

export default function BlogDetail({ blogId }: Props) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState<string[]>([]);

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
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
            setLikes(isLiked ? likes - 1 : likes + 1);
          }}
          className={`flex items-center gap-2 transition ${
            isLiked ? "text-red-500" : "text-gray-600 hover:text-indigo-600"
          }`}
        >
          <Heart size={20} fill={isLiked ? "red" : "none"} />
          <span>Like ({likes})</span>
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowComments(!showComments);
          }}
          className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition"
        >
          <MessageCircle size={20} />
          <span>Comment ({comments.length})</span>
          {/* Comment Input Section */}
        </button>

      </div>
      {showComments && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="mt-4 bg-gray-50 p-3 rounded-lg space-y-3"
        >

          {/* Input + Post Button Inline */}
          <div className="relative">
            <input
              type="text"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              placeholder="Write a comment..."
              className="w-full border rounded-md px-3 py-2 pr-14 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            {/* Inline Post Button */}
            <h4
              onClick={() => {
                if (!commentInput.trim()) return;
                setComments([...comments, commentInput]);
                setCommentInput("");
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-indigo-600 font-semibold cursor-pointer  text-sm"
            >
              Post
            </h4>
          </div>

          {/* Comment Display */}
          <div className="space-y-2 text-left">
            {comments.map((c, i) => (
            <div key={i} className="text-sm text-gray-800 leading-snug">
              {c}
            </div>
            ))}
          </div>

        </div>
      )}
      </div>
    </div>
  );
}
