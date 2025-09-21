export default function NoLeaderFound({ error, message, path }) {
  return (
    <div className="px-6 py-16 text-center bg-gray-50 rounded-lg shadow-inner">
      <div className="mx-auto w-fit mb-4 text-blue-600">
        <svg
          className="w-12 h-12 mx-auto"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25v-.75A5.25 5.25 0 019.75 14.25h4.5A5.25 5.25 0 0119.5 19.5v.75"
          />
        </svg>
      </div>
      <h2 className="text-xl font-semibold text-gray-800">{error}</h2>
      <p className="mt-2 text-sm text-gray-600 max-w-md mx-auto">{message}</p>
      <a
        href={`/dashboard/${path}`}
        className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-md shadow hover:bg-blue-700 transition"
      >
        Add New Leader
      </a>
    </div>
  );
}
