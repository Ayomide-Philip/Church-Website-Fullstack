import { X } from "lucide-react";
import { Form, useNavigate } from "react-router-dom";

export default function NewLeadersForm() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-opacity-30">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg mt-16 mb-16 relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 focus:outline-none cursor-pointer"
        >
          <span className="text-2xl">
            <X />
          </span>
        </button>

        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">
          New Leader Form
        </h2>

        <Form method="post" encType="multipart/form-data">
          {/* Name Field */}
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          {/* Role Field */}
          <div className="mb-5">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700"
            >
              Role:
            </label>
            <input
              id="role"
              name="role"
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          {/* Description Field */}
          <div className="mb-5">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="mt-1 block w-full resize-none px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          {/* Tab Section for Image URL and File Upload */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Upload Photo:
            </label>

            <div className="border-dashed border-2 border-gray-300 rounded-lg p-6 flex justify-center items-center space-x-4">
              <svg
                className="h-12 w-12 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <div className="text-center">
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  Upload a file
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    accept="image/*"
                  />
                </label>
                <p className="text-xs text-gray-600 mt-1">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md bg-blue-600 py-2 px-6 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export async function Action({ request }) {
  const formData = await request.formData();

  const name = formData.get("name");
  const role = formData.get("role");
  const description = formData.get("description");
  const fileUpload = formData.get("file-upload");

  console.log(name, role, description, fileUpload);
}
