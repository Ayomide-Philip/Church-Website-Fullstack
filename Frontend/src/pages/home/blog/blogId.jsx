import { useParams } from "react-router-dom";

export default function BlogId() {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-6 relative md:mx-5">
        <div className="flex w-full">
          <img
            src="/images/cta-image.jpg"
            alt="image"
            className="h-[400px] w-full object-cover"
          />
        </div>
        <div className="flex flex-col absolute w-[90%] p-4  top-[80%] bg-white">
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
        </div>
      </div>
    </div>
  );
}
