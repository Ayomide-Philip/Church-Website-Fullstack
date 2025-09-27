import { useLoaderData } from "react-router-dom";
import NoLeaderFound from "../leaders/noLeaderFound";

export default function RecentLeaders({ heading, limit }) {
  const { leaders } = useLoaderData();

  const tableHeader = [
    "Name",
    "Roles",
    "Descriptions",
    "Created By",
    "Created At",
    " Updated At",
    "Actions",
  ];
  return (
    <div className="lg:col-span-2 bg-white rounded-lg shadow overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">{heading}</h2>
      </div>

      {leaders.length === 0 ? (
        <NoLeaderFound
          error="No Leaders Found"
          message="You haven’t added any church leaders yet. Start building your leadership
        directory by adding your first leader."
          path="leaders/new"
        />
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {tableHeader.map((heading, idx) => (
                  <th
                    key={idx}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leaders
                .slice(0, limit ?? leaders.length)
                .map(
                  (
                    {
                      _id,
                      name,
                      role,
                      createdAt,
                      description,
                      updatedAt,
                      image: { secure_url, original_filename },
                      creatorId,
                    },
                    idx
                  ) => (
                    <tr key={idx}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={secure_url}
                              alt={original_filename}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              <a href={`/leaders/${_id}`}>{name}</a>
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
                        <a
                          href={`/users/${creatorId._id}`}
                          className="hover:underline hover:text-black"
                        >
                          {creatorId.fullName}
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(updatedAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-900 mr-3"
                        >
                          Edit
                        </a>
                        <a href="#" className="text-red-600 hover:text-red-900">
                          Delete
                        </a>
                      </td>
                    </tr>
                  )
                )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
