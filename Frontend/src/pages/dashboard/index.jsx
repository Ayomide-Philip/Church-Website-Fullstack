import { redirect } from "react-router-dom";
import DashboardOverview from "../../componets/dashboard/home/overview";
import DashboardQuickActions from "../../componets/dashboard/home/quickAction";
import RecentLeaders from "../../componets/dashboard/home/recentLeaders";
import DashboardStatus from "../../componets/dashboard/home/dashboardStatus";
export default function DashboardHome() {
  return (
    <>
      <DashboardOverview />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <RecentLeaders heading="Recent Leaders Added" limit={2} />
        <DashboardStatus />
      </div>
      <DashboardQuickActions />
    </>
  );
}

export async function Loader() {
  const userInformation = JSON.parse(localStorage.getItem("userInformation"));
  if (!userInformation) {
    return redirect("/login");
  }
  try {
    const response = await fetch("http://localhost:3000/leaders", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!data.success) {
      console.log("An error was encountered");
    }

    return { leaders: data.data.leaders };
  } catch (err) {
    console.log(err);
  }
}
