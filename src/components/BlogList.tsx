// BlogList.tsx
import { useState, useMemo } from "react";
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

  const sortedBlogs = useMemo(() => {
    if (!data) return [];
    return [...data].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [data]);

  // Track used categories
  const usedCategories = new Set<string>();

  const handleSelect = (id: number) => {
    setSelectedBlog(id);
    onSelectBlog(id);
  };

  if (isLoading) return <p className="p-4 text-gray-500">Loading blogs...</p>;
  if (isError) return <p className="p-4 text-red-500">Error loading blogs.</p>;

  return (
    <div className="space-y-4 p-4 overflow-auto h-full">
      {sortedBlogs.map((blog: any) => {
        // Pick a category that is not used yet
        const chosenCategory = blog.category.find(
          (c: string) => !usedCategories.has(c)
        ) || blog.category[0];

        usedCategories.add(chosenCategory);

        return (
          <BlogCard
            key={blog.id}
            blog={{ ...blog, chosenCategory }}
            onSelect={handleSelect}
            selected={blog.id === selectedBlog}
          />
        );
      })}
    </div>
  );
}
