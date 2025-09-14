/* eslint-disable no-unused-vars */
import { Calendar1, ListVideoIcon, User2, Users } from "lucide-react";

const QuickAction = [
  { name: "Add New Leader", icon: Users },
  { name: "Add New Members", icon: User2 },
  { name: "Post New Blog", icon: Calendar1 },
  { name: "Go Live", icon: ListVideoIcon },
];
export default function DashboardQuickActions() {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Quick Actions
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {QuickAction.map(({ name, icon: Icon }, idx) => {
          return (
            <button
              key={idx}
              className="flex cursor-pointer flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition"
            >
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 mb-2">
                <Icon />
              </div>
              <span className="text-sm font-medium text-gray-700">{name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
