import RecentLeaders from "../../componets/dashboard/home/recentLeaders";
import { redirect } from "react-router-dom";
import NewButton from "../../componets/dashboard/newButton";

export default function DashboardLeader() {
  return (
    <>
      <RecentLeaders heading="The Church Leaders" />
      <NewButton />
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
