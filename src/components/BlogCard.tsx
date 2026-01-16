import { Card, CardContent } from "@/components/ui/card";

type BlogCardProps = {
  blog: any;
  onSelect: (id: number) => void;
};

export default function BlogCard({ blog, onSelect }: BlogCardProps) {
  return (
    <Card
      className="cursor-pointer hover:shadow-lg transition"
      onClick={() => onSelect(blog.id)}
    >
      <CardContent>
        <p className="text-sm text-purple-600 mb-1">
          {blog.category?.join(", ")}
        </p>

        <h2 className="font-semibold text-lg">{blog.title}</h2>

        <p className="text-gray-600 text-sm mt-1">{blog.description}</p>

        <p className="text-xs text-gray-400 mt-1">
          {new Date(blog.date).toDateString()}
        </p>
      </CardContent>
    </Card>
  );
}
