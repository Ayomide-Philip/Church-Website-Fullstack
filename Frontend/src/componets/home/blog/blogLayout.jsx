import BlogImageBanner from "./blogImageBanner";
import { useState } from "react";
import { Outlet } from "react-router-dom";
export default function BlogLayout() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <BlogImageBanner query={query} setQuery={setQuery} />
      <Outlet context={{ query, setQuery }} />
    </div>
  );
}
