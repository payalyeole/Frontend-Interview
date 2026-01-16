import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const getBlogs = async () => {
  const res = await api.get("/blogs");
  return res.data;
};

export const getBlogById = async (id: number) => {
  const res = await api.get(`/blogs/${id}`);
  return res.data;
};

export const createBlog = async (newBlog: any) => {
  const res = await api.post("/blogs", newBlog);
  return res.data;
};
