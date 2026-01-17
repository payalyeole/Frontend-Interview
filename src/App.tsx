import { useState } from 'react'
import './App.css'
import HomePage from "./components/HomePage";

function App() {
  const [count, setCount] = useState(0)
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

  return (
    <>
    <HomePage />
    </>
  )
}

export default App