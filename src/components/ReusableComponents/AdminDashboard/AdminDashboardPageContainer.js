const AdminDashboardPageContainer = ({ children, className }) => {
  return (
    <div className="ml-60">
      <div className={`${className} px-6 w-full`}>{children}</div>
    </div>
  );
};

export default AdminDashboardPageContainer;
