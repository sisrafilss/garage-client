import { useLoaderData } from "react-router-dom";
import Card from "./Card/Card";
import SummaryTable from "./SummaryTable/SummaryTable";

const AdminDashboard = () => {
  const summaryData = useLoaderData();
  const { cardData } = summaryData;
  return (
    <div className="ml-60">
      <div className="px-6 pt-6 w-full space-y-12">
        <div className="grid lg:grid-cols-3 lg:gap-6 md:grid-cols-2 md:gap-4 sm:grid-cols-1 sm:gap-4">
          {cardData.map((card, idx) => (
            <Card key={idx} className={card.bg} data={card} />
          ))}
        </div>
        <div>
          <SummaryTable />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
