export default function BlogCard({ setQuery }) {
  return (
    <div className="flex flex-col gap-2 bg-gray-100 rounded-xl">
      <div className="flex h-[200px]">
        <img
          src="/images/cta-image.jpg"
          className="object-cover rounded-t-xl"
        />
      </div>
      <div className="px-4 py-3 gap-2 flex flex-col">
        <div className="flex gap-2 items-center font-sans">
          <img
            src="/blank-profile-picture-973460_960_720.webp"
            className="h-10 w-10 rounded-full"
          />
          <div className="flex flex-col">
            <h1 className="font-semibold">Areo Ayomide Philip</h1>
            <p className="text-sm">
              {new Date().toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
        <p className="font-san">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          facilis id doloribus eveniet, soluta molestiae ducimus pariatur,
          doloremque atque cum minus suscipit consequatur totam enim consectetur
          odit deleniti quaerat ut.
        </p>
        <div className="flex justify-between items-center">
          <p
            className="font-light cursor-pointer capitalize hover:underline"
            onClick={() => {
              setQuery("competition");
            }}
          >
            competition
          </p>
          <a href="./#" className="bg-blue-600  py-2 px-3 rounded text-white">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
