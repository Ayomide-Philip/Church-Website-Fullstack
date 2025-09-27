import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

export default function HomeLayout() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
