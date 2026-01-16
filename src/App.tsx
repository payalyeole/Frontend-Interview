// import { useState } from "react";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";
import CreateBlog from "./components/CreateBlog";
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-3 h-screen">

        <div className="col-span-1 border-r flex flex-col overflow-auto">
          <CreateBlog />
          <BlogList onSelectBlog={setSelectedBlogId} />
        </div>

        <div className="col-span-2 overflow-auto">
          <BlogDetail blogId={selectedBlogId} />
        </div>
      </div>
    </>
  )
}

export default App