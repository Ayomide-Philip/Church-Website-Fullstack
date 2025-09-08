import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
export default function PageRouter() {
  return (
    <RouterProvider
      router={createBrowserRouter([{ path: "/", element: <Home /> }])}
    />
  );
}
