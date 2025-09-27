export default function BlogBody({ query }) {
  return (
    <section className="flex flex-col p-5 justify-center">
      <h1 className="text-3xl text-center font-semibold font-sans mb-10">
        {query ? `Search result for "${query}".` : "  Top Activities."}
      </h1>
      <div className="grid grid-flow-row gap-5 sm:grid-cols-2 md:grid-cols-3">
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
      </div>
    </section>
  );
}
