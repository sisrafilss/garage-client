import { useLoaderData } from "react-router-dom";
import Card from "./Card/Card";
import SummaryTable from "./SummaryTable/SummaryTable";
import AdminDashboardPageContainer from "../../../components/ReusableComponents/AdminDashboard/AdminDashboardPageContainer";

const AdminDashboard = () => {
  const summaryData = useLoaderData();
  const { cardData, tableData } = summaryData;
  return (
    <AdminDashboardPageContainer className="space-y-12 pt-10">
      <div className="grid lg:grid-cols-3 lg:gap-6 md:grid-cols-2 md:gap-4 sm:grid-cols-1 sm:gap-4">
        {cardData.map((card, idx) => (
          <Card key={idx} className={card.bg} data={card} />
        ))}
      </div>
      <div>
        <SummaryTable tableData={tableData} />
      </div>
    </AdminDashboardPageContainer>
  );
};

export default AdminDashboard;
