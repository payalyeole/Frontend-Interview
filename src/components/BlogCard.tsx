// BlogCard.tsx
import { Card } from "@/components/ui/card";
import { useMemo } from "react";
import { BadgeCheck, BookOpen, Briefcase } from "lucide-react";

type BlogCardProps = {
  blog: any;
  onSelect: (id: number) => void;
  selected: boolean;
};

export default function BlogCard({ blog, onSelect, selected }: BlogCardProps) {
  const timeAgo = useMemo(() => {
    const diff = Date.now() - new Date(blog.date).getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);

    if (minutes < 60) return `${minutes} mins ago`;
    if (hours < 24) return `${hours} hours ago`;
    if (days < 7) return `${days} days ago`;
    if (days < 30) return `${weeks} weeks ago`;
    if (days > 30) return `${months} months ago`;
    return `${days} days ago`;
  }, [blog.date]);

  // Choose icon based on category (example)
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "career":
        return <Briefcase size={16} className="text-yellow-500" />;
      case "education":
        return <BookOpen size={16} className="text-green-500" />;
      default:
        return <BadgeCheck size={16} className="text-indigo-500" />;
    }
  };

  return (
    <Card
      onClick={() => onSelect(blog.id)}
      className={`
        relative cursor-pointer
        border rounded-xl shadow-sm p-5 space-y-2
        transition-all
        hover:shadow-lg hover:-translate-y-1
        ${selected ? "border-indigo-500 bg-indigo-50" : "bg-white"}
      `}
    >
      {/* Featured bar */}
      {blog.featured && (
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-indigo-300 rounded-l-xl" />
      )}

      {/* Top Row: Icon + Category + Time */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
          {getCategoryIcon(blog.category[0])}
          {blog.category[0]}
        </div>
        <span className="text-xs text-gray-400">{timeAgo}</span>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-900">{blog.title}</h2>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
        {blog.description}
      </p>

      {/* Tags */}
      <div className="flex gap-2 mt-2 flex-wrap">
        {blog.category?.map((tag: string) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </Card>
  );
}
