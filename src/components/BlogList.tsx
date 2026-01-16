import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/api/blogApi";
import BlogCard from "./BlogCard";

type Props = {
  onSelectBlog: (id: number) => void;
};

export default function BlogList({ onSelectBlog }: Props) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  if (isLoading) return <p>Loading blogs...</p>;
  if (isError) return <p>Error loading blogs.</p>;

  return (
    <div className="space-y-3 p-4 overflow-auto h-full">
      {data.map((blog: any) => (
        <BlogCard key={blog.id} blog={blog} onSelect={onSelectBlog} />
      ))}
    </div>
  );
}
