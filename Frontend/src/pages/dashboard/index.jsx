import { redirect } from "react-router-dom";
import DashboardOverview from "../../componets/dashboard/home/overview";
import DashboardQuickActions from "../../componets/dashboard/home/quickAction";
import RecentLeaders from "../../componets/dashboard/home/recentLeaders";
import DashboardStatus from "../../componets/dashboard/home/dashboardStatus";
import { toast, ToastContainer } from "react-toastify";
export default function DashboardHome() {
  return (
    <>
      <ToastContainer />
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
  const { token } = JSON.parse(localStorage.getItem("userInformation"));
  if (!token) {
    return redirect("/login");
  }
  try {
    const [leadersResponse, usersResponse] = await Promise.all([
      fetch("http://localhost:3000/leaders", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      fetch("http://localhost:3000/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
    ]);

    if (!leadersResponse.ok || !usersResponse.ok) {
      toast.error("Unable to load data");
    }

    const [leaders, users] = await Promise.all([
      leadersResponse.json(),
      usersResponse.json(),
    ]);

    return { leaders: leaders.data.leaders, users: users.data.users };
  } catch (err) {
    console.log(err);
  }
}
