import { Menu } from "lucide-react";
export default function DashboardHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
      <div className="flex items-center">
        <button className="md:hidden text-gray-500 focus:outline-none">
          <Menu />
        </button>
        <h1 className="text-xl font-semibold text-gray-800 ml-4">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-500 focus:outline-none">
          <i className="fas fa-bell"></i>
        </button>
        <button className="text-gray-500 focus:outline-none">
          <i className="fas fa-envelope"></i>
        </button>
        <div className="relative">
          <button className="flex items-center focus:outline-none">
            <img
              className="w-8 h-8 rounded-full"
              src="/blank-profile-picture-973460_960_720.webp"
              alt="User"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
