import BlogImageBanner from "./blogImageBanner";
import { useState } from "react";
import { Outlet } from "react-router-dom";
export default function BlogLayout() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <BlogImageBanner query={query} setQuery={setQuery} />
      <section className="flex flex-col p-5 justify-center mb-10">
        <Outlet context={{ query, setQuery }} />
      </section>
    </div>
  );
}
