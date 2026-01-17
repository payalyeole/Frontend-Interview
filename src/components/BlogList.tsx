// BlogList.tsx
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/api/blogApi";
import BlogCard from "./BlogCard";

type Props = {
  onSelectBlog: (id: number) => void;
};

export default function BlogList({ onSelectBlog }: Props) {
  const [selectedBlog, setSelectedBlog] = useState<number | null>(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  if (isLoading) return <p className="p-4 text-gray-500">Loading blogs...</p>;
  if (isError) return <p className="p-4 text-red-500">Error loading blogs.</p>;

  const handleSelect = (id: number) => {
    setSelectedBlog(id);
    onSelectBlog(id);
  };

  return (
    <div className="space-y-4 p-4 overflow-auto h-full">
      {data.map((blog: any) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onSelect={handleSelect}
          selected={blog.id === selectedBlog}
        />
      ))}
    </div>
  );
}
