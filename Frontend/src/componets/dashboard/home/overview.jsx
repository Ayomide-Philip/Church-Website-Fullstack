import { Calendar, MessageCircle, User2, Users } from "lucide-react";
export default function DashboardOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-blue-100 text-blue-600">
            <Users className="h-5 w-5" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Leaders</p>
            <p className="text-2xl font-semibold text-gray-800">120</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-green-100 text-green-600">
            <User2 className="w-5 h-5" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Members</p>
            <p className="text-2xl font-semibold text-gray-800">84</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
            <Calendar className="w-5 h-5" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Blog</p>
            <p className="text-2xl font-semibold text-gray-800">12</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-red-100 text-red-600">
            <MessageCircle className="h-5 w-5" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Message</p>
            <p className="text-2xl font-semibold text-gray-800">8</p>
          </div>
        </div>
      </div>
    </div>
  );
}
