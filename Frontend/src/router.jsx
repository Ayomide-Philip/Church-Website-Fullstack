import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import DashboardHome, {
  Loader as DashboardHomeLoader,
} from "./pages/dashboard";
import OurLeader from "./pages/home/leaders";
import HomeLayout from "./componets/homeLayout";
import DashboardLayout, {
  Loader as DashboardLayoutLoader,
} from "./componets/dashboard/dashboardLayout";
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
          id: "dashboard",
          path: "/dashboard",
          element: <DashboardLayout />,
          loader: DashboardLayoutLoader,
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
