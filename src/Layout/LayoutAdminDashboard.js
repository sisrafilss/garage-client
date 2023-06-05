import { Outlet } from "react-router-dom";
import SidebarNavigation from "../pages/AdminDashboard/AdminDashboard/SidebarNavigation/SidebarNavigation";

const LayoutAdminDashboard = () => {
  return (
    <div className="bg-white-smoke h-screen">
      <SidebarNavigation />
      <Outlet />
    </div>
  );
};

export default LayoutAdminDashboard;
