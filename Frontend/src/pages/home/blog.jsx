import { useOutletContext } from "react-router-dom";
import BlogBody from "../../componets/home/blog/blogBody";

export default function Blog() {
  const { query, setQuery } = useOutletContext();
  return (
    <>
      <BlogBody query={query} setQuery={setQuery} />
    </>
  );
}
