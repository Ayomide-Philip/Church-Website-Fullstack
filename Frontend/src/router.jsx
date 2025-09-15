import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import DashboardHome from "./pages/dashboard";
import OurLeader from "./pages/home/leaders";
import HomeLayout from "./componets/homeLayout";
import DashboardLayout from "./componets/dashboard/dashboardLayout";
import Login from "./pages/login";
export default function PageRouter() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <HomeLayout />,
          children: [
            { element: <Home />, index: true },
            { path: "/leaders", element: <OurLeader /> },
            { path: "/login", element: <Login /> },
          ],
        },
        {
          path: "/dashboard",
          element: <DashboardLayout />,
          children: [{ element: <DashboardHome />, index: true }],
        },
      ])}
    />
  );
}
