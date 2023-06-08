import { Outlet } from "react-router-dom";
import SidebarNavigation from "../pages/AdminDashboard/AdminDashboard/SidebarNavigation/SidebarNavigation";
import TopBar from "../pages/AdminDashboard/AdminDashboard/TopBar/TopBar";

const LayoutAdminDashboard = () => {
  return (
    <div className="min-h-screen bg-white-smoke">
      <TopBar />
      <SidebarNavigation />
      <div className="mt-20 pt-[47px] pb-10 bg-white-smoke w-full h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutAdminDashboard;
