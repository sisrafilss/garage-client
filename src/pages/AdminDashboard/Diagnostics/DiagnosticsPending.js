import { TiTick } from "react-icons/ti";
import { RxCrossCircled } from "react-icons/rx";
import AdminDashboardPageContainer from "../../../components/ReusableComponents/AdminDashboard/AdminDashboardPageContainer";
import TableContainer from "../../../components/ReusableComponents/AdminDashboard/Table/TableContainer";
import HeadingH2 from "../../../components/ReusableComponents/Headings/HeadingH2";
import TrHead from "../../../components/ReusableComponents/AdminDashboard/Table/TrHead";
import Th from "../../../components/ReusableComponents/AdminDashboard/Table/Th";
import Tr from "../../../components/ReusableComponents/AdminDashboard/Table/Tr";
import Td from "../../../components/ReusableComponents/AdminDashboard/Table/Td";
import Pagination from "../../../components/ReusableComponents/Others/Pagination";
import { useLoaderData } from "react-router-dom";

const DiagnosticsPending = () => {
  const diagnosticsPending = useLoaderData();

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
            Pending Diagnostics Requests
          </HeadingH2>
          <table className="w-full table-auto">
            <thead className="sticky top-[159px]">
              <TrHead>
                {tableHeadings.map((item, idx) => (
                  <Th key={idx}>{item}</Th>
                ))}
              </TrHead>
            </thead>
            <tbody>
              {diagnosticsPending.map((item, idx) => (
                <Tr key={idx}>
                  <Td className="px-4">{idx + 1}</Td>
                  {Object.keys(item).map((key, idx2) => (
                    <Td key={idx2}>{item[key]}</Td>
                  ))}
                  <Td>
                    <span className="flex space-x-6 justify-center">
                      <TiTick
                        title="Approve"
                        className="text-2xl cursor-pointer text-evergreen"
                      />
                      <RxCrossCircled
                        title="Reject"
                        className="text-2xl cursor-pointer text-red-600"
                      />
                    </span>
                  </Td>
                </Tr>
              ))}
            </tbody>
          </table>
          <Pagination />
        </TableContainer>
      </div>
    </AdminDashboardPageContainer>
  );
};

export default DiagnosticsPending;
