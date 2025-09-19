import { Plus } from "lucide-react";

export default function NewButton({ onClick }) {
  return (
    <a
      href={`/dashboard/leaders${onClick}`}
      className="flex fixed bottom-8 right-7 bg-blue-700 p-3 rounded-full cursor-pointer"
    >
      <Plus color="white" />
    </a>
  );
}
