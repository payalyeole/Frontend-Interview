import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "@/api/blogApi";

type Props = { blogId: number | null };

export default function BlogDetail({ blogId }: Props) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogById(blogId!),
    enabled: !!blogId,
  });

  if (!blogId) return <p className="p-6 text-gray-400">Select an article to view details.</p>;
  if (isLoading) return <p className="p-6">Loading...</p>;
  if (isError) return <p className="p-6">Error loading blog.</p>;

  return (
    <div className="p-10 overflow-auto">
      <img
        src={data.coverImage}
        className="w-full h-80 object-cover rounded-2xl shadow-md"
      />

      <h1 className="text-4xl font-bold mt-6">{data.title}</h1>

      <div className="flex gap-6 text-gray-500 mt-3 text-sm">
        <span>{data.category.join(", ")}</span>
        <span>{new Date(data.date).toDateString()}</span>
      </div>

      <p className="mt-6 text-lg text-gray-700">{data.description}</p>

      <article className="mt-8 text-gray-800 leading-7 whitespace-pre-line">
        {data.content}
      </article>
    </div>
  );
}
