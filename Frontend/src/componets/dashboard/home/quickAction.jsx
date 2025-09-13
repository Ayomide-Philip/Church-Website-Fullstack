export default function DashboardQuickActions() {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Quick Actions
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition">
          <div className="p-3 rounded-full bg-blue-100 text-blue-600 mb-2">
            <i className="fas fa-plus text-lg"></i>
          </div>
          <span className="text-sm font-medium text-gray-700">New Booking</span>
        </button>
        <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-green-50 hover:border-green-200 transition">
          <div className="p-3 rounded-full bg-green-100 text-green-600 mb-2">
            <i className="fas fa-user-check text-lg"></i>
          </div>
          <span className="text-sm font-medium text-gray-700">Check In</span>
        </button>
        <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-yellow-50 hover:border-yellow-200 transition">
          <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 mb-2">
            <i className="fas fa-user-times text-lg"></i>
          </div>
          <span className="text-sm font-medium text-gray-700">Check Out</span>
        </button>
        <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-purple-50 hover:border-purple-200 transition">
          <div className="p-3 rounded-full bg-purple-100 text-purple-600 mb-2">
            <i className="fas fa-bell text-lg"></i>
          </div>
          <span className="text-sm font-medium text-gray-700">Requests</span>
        </button>
      </div>
    </div>
  );
}
