import { Card } from "@/components/ui/card";
import { useMemo } from "react";
import { BadgeCheck, BookOpen, Briefcase } from "lucide-react"; // example icons

type BlogCardProps = {
  blog: any;
  onSelect: (id: number) => void;
};

export default function BlogCard({ blog, onSelect }: BlogCardProps) {
  // Time ago calculation
  const timeAgo = useMemo(() => {
    const diff = Date.now() - new Date(blog.date).getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 60) return `${minutes} mins ago`;
    if (hours < 24) return `${hours} hours ago`;
    return `${days} days ago`;
  }, [blog.date]);

  return (
    <Card
      onClick={() => onSelect(blog.id)}
      className="
        relative cursor-pointer
        bg-white border rounded-xl shadow-sm
        hover:shadow-md transition-all
        p-5 space-y-2
        hover:-translate-y-1
      "
    >
      {/* Blue Accent Bar for Featured */}
      {blog.featured && (
        <div className="absolute left-0 top-0 h-full w-1 bg-indigo-600 rounded-l-xl" />
      )}

      {/* Top Row: Icon + Category + Time Ago */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
          {/* Replace icons based on category */}
          <BadgeCheck size={14} className="text-indigo-600" />
          {blog.category[0]}
        </div>

        <span className="text-xs text-gray-400">{timeAgo}</span>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-900">
        {blog.title}
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
        {blog.description}
      </p>

      {/* Tags */}
      <div className="flex gap-2 mt-2">
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
