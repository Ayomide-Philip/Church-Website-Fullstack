import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import DashboardHome from "./pages/dashboard";
export default function PageRouter() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        { path: "/", element: <Home /> },
        { path: "/dashboard", element: <DashboardHome /> },
      ])}
    />
  );
}
