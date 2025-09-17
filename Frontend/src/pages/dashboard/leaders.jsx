export default function DashboardLeader() {
  return (
    <div class="lg:col-span-2 bg-white rounded-lg shadow overflow-hidden">
      <div class="px-6 py-4 border-b border-gray-200">
        <h2 class="text-lg font-semibold text-gray-800">Recent Leaders</h2>
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Roles
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Descriptions
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created At
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Updated At
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img
                      class="h-10 w-10 rounded-full"
                      alt="Areo Ayomide"
                      src="/blank-profile-picture-973460_960_720.webp"
                    />
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      Areo Ayomide
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Admi</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">hello world</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                9/16/2025
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                9/16/2025
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img
                      class="h-10 w-10 rounded-full"
                      alt="Areo Ayomide"
                      src="/blank-profile-picture-973460_960_720.webp"
                    />
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      Areo Ayomide
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Admin</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">hello admin</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                9/16/2025
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                9/16/2025
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
