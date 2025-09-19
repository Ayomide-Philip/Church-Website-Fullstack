import { Outlet, redirect } from "react-router-dom";
import SideBar from "./sidebar";
import DashboardHeader from "./header";
export default function DashboardLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader />

        <main className="flex-1 overflow-y-auto p-3 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export async function Loader() {
  const userInformation = JSON.parse(localStorage.getItem("userInformation"));
  if (!userInformation) {
    return redirect("/login");
  }
  try {
    const { token } = userInformation;
    const response = await fetch("http://localhost:3000/users/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const serverResponse = await response.json();
    if (!serverResponse.success) {
      return redirect("/login");
    }
    return serverResponse.data;
  } catch (err) {
    console.log(err);
  }
}
