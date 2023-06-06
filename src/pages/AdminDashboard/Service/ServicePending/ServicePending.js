import { TiTick } from "react-icons/ti";
import { RxCrossCircled } from "react-icons/rx";
import AdminDashboardPageContainer from "../../../../components/ReusableComponents/AdminDashboard/AdminDashboardPageContainer";
import TableContainer from "../../../../components/ReusableComponents/AdminDashboard/Table/TableContainer";
import Td from "../../../../components/ReusableComponents/AdminDashboard/Table/Td";
import Th from "../../../../components/ReusableComponents/AdminDashboard/Table/Th";
import Tr from "../../../../components/ReusableComponents/AdminDashboard/Table/Tr";
import TrHead from "../../../../components/ReusableComponents/AdminDashboard/Table/TrHead";
import HeadingH2 from "../../../../components/ReusableComponents/Headings/HeadingH2";

const servicePending = [
  {
    title: "Brake discs and pads replacement (front)",
    email: "john.doe.3@gmail.com",
    placedAt: "03 June 2023 | 02:55:00 PM",
  },
  {
    title: "Brake discs and pads replacement (front)",
    email: "john.doe.3@gmail.com",
    placedAt: "03 June 2023 | 02:55:00 PM",
  },
  {
    title: "Brake discs and pads replacement (front)",
    email: "john.doe.3@gmail.com",
    placedAt: "03 June 2023 | 02:55:00 PM",
  },
  {
    title: "Brake discs and pads replacement (front)",
    email: "john.doe.3@gmail.com",
    placedAt: "03 June 2023 | 02:55:00 PM",
  },
  {
    title: "Brake discs and pads replacement (front)",
    email: "john.doe.3@gmail.com",
    placedAt: "03 June 2023 | 02:55:00 PM",
  },
  {
    title: "Brake discs and pads replacement (front)",
    email: "john.doe.3@gmail.com",
    placedAt: "03 June 2023 | 02:55:00 PM",
  },
  {
    title: "Brake discs and pads replacement (front)",
    email: "john.doe.3@gmail.com",
    placedAt: "03 June 2023 | 02:55:00 PM",
  },
  {
    title: "Brake discs and pads replacement (front)",
    email: "john.doe.3@gmail.com",
    placedAt: "03 June 2023 | 02:55:00 PM",
  },
  {
    title: "Brake discs and pads replacement (front)",
    email: "john.doe.3@gmail.com",
    placedAt: "03 June 2023 | 02:55:00 PM",
  },
  {
    title: "Brake discs and pads replacement (front)",
    email: "john.doe.3@gmail.com",
    placedAt: "03 June 2023 | 02:55:00 PM",
  },
  {
    title: "Brake discs and pads replacement (front)",
    email: "john.doe.3@gmail.com",
    placedAt: "03 June 2023 | 02:55:00 PM",
  },
];

const ServicePending = () => {
  const tableHeadings = [
    "#",
    "Title",
    "Requested By",
    "Placed Time",
    "Actions",
  ];
  return (
    <AdminDashboardPageContainer>
      <div className="pt-24">
        <TableContainer>
          <HeadingH2 className="text-center">
            Pending Service Requests
          </HeadingH2>
          <table className="w-full table-auto">
            <thead>
              <TrHead>
                {tableHeadings.map((item, idx) => (
                  <Th key={idx}>{item}</Th>
                ))}
              </TrHead>
            </thead>
            <tbody>
              {servicePending.map((item, idx) => (
                <Tr key={idx}>
                  <Td className="px-2">{idx + 1}</Td>
                  {Object.keys(item).map((key, idx2) => (
                    <Td key={idx2}>{item[key]}</Td>
                  ))}
                  <Td>
                    <span className="flex space-x-6 justify-center">
                      <TiTick className="text-2xl cursor-pointer text-evergreen" />
                      <RxCrossCircled className="text-2xl cursor-pointer text-red-600" />
                    </span>
                  </Td>
                </Tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </div>
    </AdminDashboardPageContainer>
  );
};

export default ServicePending;
