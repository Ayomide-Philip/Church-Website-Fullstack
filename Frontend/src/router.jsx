import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import DashboardHome from "./pages/dashboard";
import OurLeader from "./pages/home/leaders";
import HomeLayout from "./componets/homeLayout";
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
          ],
        },
        { path: "/dashboard", element: <DashboardHome /> },
      ])}
    />
  );
}
