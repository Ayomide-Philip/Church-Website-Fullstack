import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";
import DashboardHeader from "./header";
export default function DashboardLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader />

        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
