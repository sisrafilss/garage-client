import AdminDashboardPageContainer from "../../../../components/ReusableComponents/AdminDashboard/AdminDashboardPageContainer";
import NestedNavbar from "../../../../components/ReusableComponents/AdminDashboard/NestedNavbar";

const Service = () => {
  return (
    <AdminDashboardPageContainer>
      <NestedNavbar routeName="Service" />
    </AdminDashboardPageContainer>
  );
};

export default Service;
