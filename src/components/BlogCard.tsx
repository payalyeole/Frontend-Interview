import { Card, CardContent } from "@/components/ui/card";

type BlogCardProps = {
  blog: any;
  onSelect: (id: number) => void;
};

export default function BlogCard({ blog, onSelect }: BlogCardProps) {
  return (
    <Card
      className="cursor-pointer group transition-all border hover:shadow-xl rounded-xl overflow-hidden"
      onClick={() => onSelect(blog.id)}
    >
      <CardContent className="p-4">
        <p className="text-xs font-medium text-indigo-600 mb-2 uppercase tracking-wide">
          {blog.category?.join(", ")}
        </p>

        <h2 className="font-bold text-xl group-hover:text-indigo-700 transition">
          {blog.title}
        </h2>

        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {blog.description}
        </p>

        <p className="text-xs text-gray-400 mt-3">
          {new Date(blog.date).toDateString()}
        </p>
      </CardContent>
    </Card>
  );
}
