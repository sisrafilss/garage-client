import { Outlet } from "react-router-dom";
import Service from "../pages/AdminDashboard/Service/Service";

const LayoutAdminDashboardService = () => {
  return (
    <div>
      <Service />
      <Outlet />
    </div>
  );
};

export default LayoutAdminDashboardService;
