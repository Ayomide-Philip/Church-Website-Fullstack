import { ThumbsUp } from "lucide-react";
export default function BlogCard({setQuery,blog: { name, date, description, tag }}) {
  return (
    <div className="flex flex-col gap-2 bg-gray-100 rounded-xl">
      <div className="flex h-[200px]">
        <img
          src="/images/cta-image.jpg"
          className="object-cover rounded-t-xl"
        />
      </div>
      <div className="px-3 py-3 gap-2 flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center font-sans">
            <img
              src="/blank-profile-picture-973460_960_720.webp"
              className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-col">
              <h1 className="font-semibold">{name}</h1>
              <p className="text-sm">{date}</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <ThumbsUp height={15} width={15} />
            <p className="font-sans font-semibold">20</p>
          </div>
        </div>
        <p className="font-san">{description}</p>
        <div className="flex justify-between items-center">
          <p
            className="font-light cursor-pointer capitalize hover:underline"
            onClick={() => {
              setQuery(`${tag}`);
            }}
          >
            {tag}
          </p>
          <a href="./#" className="bg-blue-600  py-2 px-3 rounded text-white">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
