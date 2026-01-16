import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "@/api/blogApi";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CreateBlog() {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      setTitle("");
      setCategory("");
      setDescription("");
      setContent("");
      alert("Blog Created!");
    },
  });

  const handleSubmit = () => {
    mutation.mutate({
      title,
      category: [category],
      description,
      content,
      date: new Date(),
      coverImage: "https://placehold.co/600x300",
    });
  };

  return (
    <div className="p-4 space-y-3 border-b ">
      <Input placeholder="Blog Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <Input placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
      <Input placeholder="Short Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <Textarea placeholder="Full Content" value={content} onChange={(e) => setContent(e.target.value)} />
      <Button onClick={handleSubmit}>Create Blog</Button>
    </div>
  );
}
