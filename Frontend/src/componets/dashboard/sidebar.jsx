/* eslint-disable no-unused-vars */
import {
  Calendar,
  ChartBar,
  ListVideoIcon,
  MessageCircle,
  Settings2,
  Users,
  User2,
  MessageCircleCode,
} from "lucide-react";
import { useLoaderData, useLocation } from "react-router-dom";

export default function SideBar() {
  const {
    user: { fullName, role },
  } = useLoaderData();

  const location = useLocation();
  const Links = [
    {
      href: "/dashboard",
      title: "Dashboard",
      icon: ChartBar,
    },
    {
      href: "/dashboard/members",
      title: "Members",
      icon: User2,
    },
    {
      href: "/dashboard/leaders",
      title: "Leaders",
      icon: Users,
    },
    {
      href: "/dashboard/live",
      title: "Live",
      icon: ListVideoIcon,
    },
    {
      href: "/dashboard/message",
      title: "Message",
      icon: MessageCircle,
    },
    {
      href: "/dashboard/feedback",
      title: "Feedback",
      icon: MessageCircleCode,
    },

    {
      href: "/dashboard/blog",
      title: "Blog",
      icon: Calendar,
    },
    {
      href: "/dashboard/settings",
      title: "Settings",
      icon: Settings2,
    },
  ];

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 bg-blue-800 text-white">
        <div className="flex items-center justify-center h-16 px-4 bg-blue-900">
          <span className="text-xl font-semibold">
            <img src="/logo.png" alt="Logo" className="h-15" />
          </span>
        </div>
        <div className="flex flex-col flex-grow px-4 py-4 overflow-y-auto">
          <nav className="flex-1 space-y-2">
            {Links.map(({ href, title, icon: Icon }, idx) => {
              return (
                <a
                  href={href}
                  key={idx}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                    location.pathname === href
                      ? "bg-blue-700"
                      : "hover:bg-blue-700"
                  } text-white`}
                >
                  <Icon className="mr-4" />
                  {title}
                </a>
              );
            })}
          </nav>
        </div>
        <div className="p-4 border-t border-blue-700">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full"
              src="/blank-profile-picture-973460_960_720.webp"
              alt="Admin"
            />
            <div className="ml-3">
              <p className="text-sm font-medium">{fullName}</p>
              <p className="text-xs text-blue-200">{role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
