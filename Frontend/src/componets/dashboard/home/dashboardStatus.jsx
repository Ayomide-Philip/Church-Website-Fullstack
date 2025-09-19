export default function DashboardStatus() {
  const status = [
    {
      title: "Accounts",
      details: [
        { name: "Standard Users", number: 40 },
        { name: "Administrator", number: 35 },
      ],
    },
    {
      title: "Reviews",
      details: [
        { name: "Feedbacks", number: 40 },
        { name: "Contact", number: 30 },
      ],
    },
  ];
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">
          Dashboard Status
        </h2>
      </div>
      <div className="p-3 pt-0 pb-5">
        {status.map(({ title, details }) => {
          return (
            <div className="mt-5">
              <h3 className="text-md font-medium text-gray-800 mb-3">
                {title}
              </h3>
              <div className="space-y-3">
                {details.map(({ name, number }) => {
                  return (
                    <div className="flex justify-between">
                      <span className="text-sm text-black">{name}:</span>
                      <span className="text-sm font-medium">{number}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
