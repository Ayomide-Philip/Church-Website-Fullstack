import BlogCard from "./blogCard";

export default function BlogBody({ query, setQuery }) {
  return (
    <section className="flex flex-col p-5 justify-center mb-10">
      <h1 className="text-3xl text-center font-semibold font-sans mb-10 capitalize">
        {query ? `Search result for "${query}".` : "Top Activities."}
      </h1>
      <div className="grid grid-flow-row gap-10 sm:grid-cols-2 md:grid-cols-3">
        <BlogCard setQuery={setQuery} />
        <BlogCard setQuery={setQuery} />
        <BlogCard setQuery={setQuery} />
        <BlogCard setQuery={setQuery} />
        <BlogCard setQuery={setQuery} />
        <BlogCard setQuery={setQuery} />
      </div>
    </section>
  );
}
