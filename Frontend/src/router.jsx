import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import DashboardHome, {
  Loader as DashboardHomeLoader,
} from "./pages/dashboard";
import OurLeader from "./pages/home/leaders";
import HomeLayout from "./componets/homeLayout";
import DashboardLayout from "./componets/dashboard/dashboardLayout";
import Login, { Action as FormAction } from "./pages/login";
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
            { path: "/login", element: <Login />, action: FormAction },
          ],
        },
        {
          path: "/dashboard",
          element: <DashboardLayout />,
          children: [
            {
              element: <DashboardHome />,
              index: true,
              loader: DashboardHomeLoader,
            },
          ],
        },
      ])}
    />
  );
}
