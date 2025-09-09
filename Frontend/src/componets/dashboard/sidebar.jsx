export default function SideBar() {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 bg-blue-800 text-white">
        <div className="flex items-center justify-center h-16 px-4 bg-blue-900">
          <span className="text-xl font-semibold">Gateway</span>
        </div>
        <div className="flex flex-col flex-grow px-4 py-4 overflow-y-auto">
          <nav className="flex-1 space-y-2">
            <a
              href="/dashboard"
              className="flex items-center px-4 py-2 text-sm font-medium rounded-md bg-blue-700 text-white"
            >
              <i className="fas fa-tachometer-alt mr-3"></i>
              Dashboard
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-blue-700 text-white"
            >
              <i className="fas fa-calendar-check mr-3"></i>
              Members
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-blue-700 text-white"
            >
              <i className="fas fa-bed mr-3"></i>
              Leaders
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-blue-700 text-white"
            >
              <i className="fas fa-concierge-bell mr-3"></i>
              Services
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-blue-700 text-white"
            >
              <i className="fas fa-chart-bar mr-3"></i>
              Live
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-blue-700 text-white"
            >
              <i className="fas fa-chart-bar mr-3"></i>
              Message
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-blue-700 text-white"
            >
              <i className="fas fa-chart-bar mr-3"></i>
              Blog
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-blue-700 text-white"
            >
              <i className="fas fa-cog mr-3"></i>
              Settings
            </a>
          </nav>
        </div>
        <div className="p-4 border-t border-blue-700">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full"
              src="https://randomuser.me/api/portraits/women/11.jpg"
              alt="User"
            />
            <div className="ml-3">
              <p className="text-sm font-medium">Sarah Johnson</p>
              <p className="text-xs text-blue-200">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
