import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "@/api/blogApi";

type Props = {
  blogId: number | null;
};

export default function BlogDetail({ blogId }: Props) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogById(blogId!),
    enabled: !!blogId,
  });

  if (!blogId) return <p className="p-6">Select a blog to view details</p>;
  if (isLoading) return <p className="p-6">Loading...</p>;
  if (isError) return <p className="p-6">Error loading blog</p>;

  return (
    <div className="p-8 overflow-auto">
      <img
        src={data.coverImage}
        className="w-full h-64 object-cover rounded-lg"
      />

      <h1 className="text-3xl font-bold mt-4">{data.title}</h1>

      <div className="flex gap-4 text-gray-600 mt-2">
        <span>{data.category.join(", ")}</span>
        <span>{new Date(data.date).toDateString()}</span>
      </div>

      <p className="mt-4 text-lg">{data.description}</p>

      <p className="mt-6 text-gray-700 whitespace-pre-line">{data.content}</p>
    </div>
  );
}
