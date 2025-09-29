import BlogCard from "./blogCard";
const blogs = [
  {
    name: "Areo Ayomide Philip",
    date: new Date().toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, facilis id doloribus eveniet, soluta molestiae ducimus pariatur,doloremque atque cum minus suscipit consequatur totam enim consectetur odit deleniti quaerat ut.",
    tag: "competition",
  },
  {
    name: "Areo Ayomide Philip",
    date: new Date().toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, facilis id doloribus eveniet, soluta molestiae ducimus pariatur,doloremque atque cum minus suscipit consequatur totam enim consectetur odit deleniti quaerat ut.",
    tag: "competition",
  },
  {
    name: "Areo Ayomide Philip",
    date: new Date().toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, facilis id doloribus eveniet, soluta molestiae ducimus pariatur,doloremque atque cum minus suscipit consequatur totam enim consectetur odit deleniti quaerat ut.",
    tag: "competition",
  },
  {
    name: "Areo Ayomide Philip",
    date: new Date().toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, facilis id doloribus eveniet, soluta molestiae ducimus pariatur,doloremque atque cum minus suscipit consequatur totam enim consectetur odit deleniti quaerat ut.",
    tag: "competition",
  },
  {
    name: "Areo Ayomide Philip",
    date: new Date().toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, facilis id doloribus eveniet, soluta molestiae ducimus pariatur,doloremque atque cum minus suscipit consequatur totam enim consectetur odit deleniti quaerat ut.",
    tag: "competition",
  },
];
export default function BlogBody({ query, setQuery }) {
  return (
    <>
      <h1 className="text-3xl text-center font-semibold font-sans mb-10 capitalize">
        {query ? `Search result for "${query}".` : "Top Activities."}
      </h1>
      <div className="grid grid-flow-row gap-10 sm:grid-cols-2 md:grid-cols-3">
        {blogs.map((blog, idx) => {
          return <BlogCard key={idx} setQuery={setQuery} blog={blog} />;
        })}
      </div>
    </>
  );
}
