import React from "react";
import AdminDashboardPageContainer from "../../../components/ReusableComponents/AdminDashboard/AdminDashboardPageContainer";
import NestedNavbar from "../../../components/ReusableComponents/AdminDashboard/NestedNavbar";

const Diagnostics = () => {
  return (
    <AdminDashboardPageContainer>
      <NestedNavbar routeName="Diagnostics" />
    </AdminDashboardPageContainer>
  );
};

export default Diagnostics;
