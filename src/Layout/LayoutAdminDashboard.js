import { Outlet } from "react-router-dom";
import SidebarNavigation from "../pages/AdminDashboard/AdminDashboard/SidebarNavigation/SidebarNavigation";
import TopBar from "../pages/AdminDashboard/AdminDashboard/TopBar/TopBar";

const LayoutAdminDashboard = () => {
  return (
    <div className="bg-white-smoke h-full w-full pb-10">
      <TopBar />
      <SidebarNavigation />
      <div className="mt-20 pt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutAdminDashboard;
