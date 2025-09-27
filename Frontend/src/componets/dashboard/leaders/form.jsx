import { Plus, X } from "lucide-react";
import { Form, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { MdErrorOutline } from "react-icons/md";

export default function NewLeadersForm() {
  const navigate = useNavigate();
  const [imageSource, setImageSource] = useState(null);

  return (
    <div className="inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-opacity-30">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg mt-10 mb-10 relative">
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
              minLength={3}
              maxLength={50}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
              required
            />
          </div>

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
              minLength={3}
              maxLength={50}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
              required
            />
          </div>

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
              minLength={20}
              maxLength={1000}
              className="mt-1 block w-full resize-none px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Upload Photo
            </label>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              {imageSource ? (
                <img
                  src={URL.createObjectURL(imageSource)}
                  alt={imageSource.name}
                  className="h-32 w-32 rounded-md object-cover shadow-md"
                  onLoad={() => URL.revokeObjectURL(imageSource)}
                />
              ) : (
                <div className="flex items-center justify-center h-32 w-32 rounded-md bg-gray-100 text-gray-400">
                  <Plus height={40} width={40} />
                </div>
              )}

              <div className="text-center md:text-left">
                <label
                  htmlFor="file-upload"
                  className="inline-block cursor-pointer rounded-md  px-5 py-2 text-sm font-medium text-black hover:underline"
                >
                  {imageSource ? "Change File" : "Select File"}
                  <input
                    id="file-upload"
                    name="imageUrl"
                    type="file"
                    className="sr-only"
                    accept="image/*"
                    onChange={(e) => setImageSource(e.target.files[0])}
                    required
                  />
                </label>

                <p className="mt-2 text-xs text-gray-500 max-w-xs">
                  PNG, JPG, GIF up to 10MB
                </p>

                {imageSource && (
                  <p className="mt-4 text-green-600 font-semibold truncate max-w-xs">
                    {imageSource.name}
                  </p>
                )}
              </div>
            </div>
          </div>

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
  const { token } = JSON.parse(localStorage.getItem("userInformation"));
  const formData = await request.formData();

  try {
    const request = await fetch("http://localhost:3000/leaders", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const response = await request.json();
    if (!response.success) {
      toast.error(
        <div style={{ display: "flex", flexDirection: "column" }}>
          <strong style={{ fontSize: "1rem", marginBottom: "0.3rem" }}>
            Something went wrong!
          </strong>
          <span>{response.error}</span>
        </div>,
        {
          icon: <MdErrorOutline size={24} color="#ff4d4f" />, // Custom error icon
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            background: "#fff1f0",
            color: "#cf1322",
            border: "1px solid #ffa39e",
            padding: "12px 16px",
            borderRadius: "8px",
            fontFamily: "Segoe UI, sans-serif",
          },
          progressStyle: {
            background: "#ff7875",
          },
        }
      );
    }
  } catch (err) {
    console.log(err);
  }
}
