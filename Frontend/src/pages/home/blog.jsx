import BlogBody from "../../componets/home/blog/blogBody";
import BlogImageBanner from "../../componets/home/blog/blogImageBanner";
import { useState } from "react";
export default function Blog() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <BlogImageBanner query={query} setQuery={setQuery} />
      <BlogBody query={query} setQuery={setQuery} />
    </div>
  );
}
