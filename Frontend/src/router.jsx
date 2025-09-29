import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { Action as HomeAction } from "./pages/home";
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
import NewLeadersForm, {
  Action as NewLeaderAction,
} from "./componets/dashboard/leaders/form";
import Blog from "./pages/home/blog";
import BlogLayout from "./componets/home/blog/blogLayout";
import BlogId from "./pages/home/blog/blogId";
export default function PageRouter() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <HomeLayout />,
          children: [
            { element: <Home />, index: true, action: HomeAction },
            { path: "/leaders", element: <OurLeader /> },
            { path: "/login", element: <Login />, action: FormAction },
            {
              path: "/blog",
              element: <BlogLayout />,
              children: [
                { element: <Blog />, index: true },
                { element: <BlogId />, path: ":id" },
              ],
            },
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
            { element: <DashboardMembers />, path: "users" },
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
                  action: NewLeaderAction,
                },
              ],
            },
          ],
        },
      ])}
    />
  );
}
