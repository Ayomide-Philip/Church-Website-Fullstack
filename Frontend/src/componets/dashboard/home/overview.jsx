/* eslint-disable no-unused-vars */
import { Calendar, MessageCircle, User2, Users } from "lucide-react";
const overview = [
  { title: "Leaders", number: 120, logo: User2 },
  { title: "Members", number: 84, logo: Users },
  { title: "Blog", number: 50, logo: Calendar },
  { title: "Message", number: 100, logo: MessageCircle },
];
export default function DashboardOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {overview.map(({ title, number, logo: Icon }, idx) => {
        return (
          <div className="bg-white rounded-lg shadow p-6" key={idx}>
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <Icon className="h-5 w-5" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-black">{title}</p>
                <p className="text-2xl font-semibold text-gray-800">{number}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
