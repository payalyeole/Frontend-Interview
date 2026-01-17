// BlogCard.tsx
import { Card } from "@/components/ui/card";
import { BadgeCheck, BookOpen, Briefcase, Cpu, TrendingUp } from "lucide-react";
import { useMemo } from "react";

type BlogCardProps = {
  blog: any;
  onSelect: (id: number) => void;
  selected: boolean;
};

export default function BlogCard({ blog, onSelect, selected }: BlogCardProps) {
  const category = blog.chosenCategory; // This comes from BlogList
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
      
  const getCategoryIcon = (category: string) => {
    const key = category.toLowerCase();

    if (key.includes("finance")) return <TrendingUp size={18} className="text-green-500" />;
    if (key.includes("career")) return <Briefcase size={18} className="text-yellow-500" />;
    if (key.includes("education")) return <BookOpen size={18} className="text-blue-500" />;
    if (key.includes("ai")) return <Cpu size={18} className="text-purple-500" />;

    return <BadgeCheck size={18} className="text-indigo-500" />;
  };

  return (
    <Card
      onClick={() => onSelect(blog.id)}
      className={`
        group relative cursor-pointer p-5 rounded-xl border
        transition-all shadow-sm hover:shadow-xl
        hover:-translate-y-1 hover:border-indigo-400
        ${selected ? "bg-indigo-50 border-indigo-500 shadow-md" : "bg-white"}
      `}
    >
      {/* Ribbon Featured Badge */}
      {blog.featured && (
        <span className="absolute top-2 right-2 bg-gradient-to-r from-indigo-600 to-purple-500 text-white text-xs px-3 py-1 rounded-full shadow">
          Featured
        </span>
      )}

      {/* Top Row */}
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2 text-xs font-semibold text-gray-600">
          {getCategoryIcon(category)}
          <span className="text-gray-700">{category}</span>
        </div>
        <span className="text-xs text-gray-400">{timeAgo}</span>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-900 leading-snug group-hover:text-indigo-600 transition">
        {blog.title}
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-sm mt-1 line-clamp-2">
        {blog.description}
      </p>

      {/* Tags */}
      <div className="flex gap-2 mt-3 flex-wrap">
        {blog.category.map((tag: string) => (
          <span
            key={tag}
            className="text-xs bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </Card>
  );
}