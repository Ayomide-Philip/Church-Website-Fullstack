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
import DashboardMembers from "./pages/dashboard/members";
import DashboardLeader, {
  Loader as LeadersLoader,
} from "./pages/dashboard/leaders";
import NewLeadersForm from "./componets/dashboard/leaders/form";
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
          path: "dashboard",
          element: <DashboardLayout />,
          loader: DashboardLayoutLoader,
          children: [
            {
              element: <DashboardHome />,
              index: true,
              loader: DashboardHomeLoader,
            },
            { element: <DashboardMembers />, path: "members" },
            {
              path: "leaders",
              children: [
                {
                  element: <DashboardLeader />,
                  index: true,
                  loader: LeadersLoader,
                },
                {
                  element: <NewLeadersForm />,
                  path: "new",
                },
              ],
            },
          ],
        },
      ])}
    />
  );
}
