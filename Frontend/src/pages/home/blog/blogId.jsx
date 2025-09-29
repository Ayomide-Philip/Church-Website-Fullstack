import { useParams } from "react-router-dom";

export default function BlogId() {
  const { id } = useParams();

  return (
    <>
      <h1>This Blog has an Id : {id}</h1>
    </>
  );
}
