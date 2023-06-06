import { Outlet } from "react-router-dom";
import Service from "../pages/AdminDashboard/Service/Service/Service";

const LayoutAdminDashboardService = () => {
  return (
    <>
      <Service />
      <Outlet />
    </>
  );
};

export default LayoutAdminDashboardService;
