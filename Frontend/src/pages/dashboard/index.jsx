import { redirect, useLoaderData } from "react-router-dom";
import DashboardOverview from "../../componets/dashboard/home/overview";
import DashboardQuickActions from "../../componets/dashboard/home/quickAction";
export default function DashboardHome() {
  const { leaders } = useLoaderData();

  return (
    <>
      <DashboardOverview />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">
              Recent Leaders
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Roles
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Descriptions
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created At
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Updated At
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {leaders.map(
                  ({ name, role, createdAt, description, updatedAt }, idx) => {
                    return (
                      <tr key={idx}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src="/blank-profile-picture-973460_960_720.webp"
                                alt={name}
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{role}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {description}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(updatedAt).toLocaleDateString()}
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Room Status</h2>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">
                  Occupied
                </span>
                <span className="text-sm font-medium text-gray-700">70%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-green-600 h-2.5 rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">
                  Available
                </span>
                <span className="text-sm font-medium text-gray-700">30%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: "30%" }}
                ></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">
                  Maintenance
                </span>
                <span className="text-sm font-medium text-gray-700">5%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-red-600 h-2.5 rounded-full"
                  style={{ width: "5%" }}
                ></div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-md font-medium text-gray-800 mb-3">
                Room Types
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Standard</span>
                  <span className="text-sm font-medium">40 rooms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Deluxe</span>
                  <span className="text-sm font-medium">35 rooms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Executive</span>
                  <span className="text-sm font-medium">25 rooms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Suite</span>
                  <span className="text-sm font-medium">20 rooms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DashboardQuickActions />
    </>
  );
}

export async function Loader() {
  const userInformation = JSON.parse(localStorage.getItem("userInformation"));
  if (!userInformation) {
    return redirect("/login");
  }
  try {
    const response = await fetch("http://localhost:3000/leaders", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!data.success) {
      console.log("An error was encountered");
    }

    return { leaders: data.data.leaders };
  } catch (err) {
    console.log(err);
  }
}
