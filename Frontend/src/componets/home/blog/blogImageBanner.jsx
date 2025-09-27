import { Search, X } from "lucide-react";
export default function BlogImageBanner({ query, setQuery }) {
  return (
    <section className="flex h-[70vh] bg-[url(/images/cta-image.jpg)] text-center justify-center items-center flex-col gap-5">
      <p className="bg-blue-500 p-1 px-4 font-semibold text-white font-mono">
        BLOG
      </p>
      <h1 className="text-4xl text-black md:text-white font-bold capitalize font-mono">
        Explore the Latest Activities
      </h1>
      <div className="relative">
        <input
          type="text"
          className="bg-white w-[280px] sm:w-[500px] h-12 rounded-2xl p-5 text-black placeholder:text-black focus:outline-none focus:border-blue-600 focus:border-2"
          placeholder="Search for a particular topic"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button
          type="submit"
          className="text-black absolute right-4 top-3 cursor-pointer"
          name="search"
        >
          <Search />
        </button>
        {query && (
          <button
            type="reset"
            className="text-black absolute right-12 top-3 cursor-pointer"
            name="reset"
          >
            <X
              onClick={() => {
                setQuery("");
              }}
            />
          </button>
        )}
      </div>
    </section>
  );
}
