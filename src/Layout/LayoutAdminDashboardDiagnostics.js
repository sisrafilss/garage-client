import React from "react";
import Diagnostics from "../pages/AdminDashboard/Diagnostics/Diagnostics";
import { Outlet } from "react-router-dom";

const LayoutAdminDashboardDiagnostics = () => {
  return (
    <>
      <Diagnostics />
      <Outlet />
    </>
  );
};

export default LayoutAdminDashboardDiagnostics;
