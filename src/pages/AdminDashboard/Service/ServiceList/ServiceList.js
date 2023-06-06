import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import AdminDashboardPageContainer from "../../../../components/ReusableComponents/AdminDashboard/AdminDashboardPageContainer";
import TableContainer from "../../../../components/ReusableComponents/AdminDashboard/Table/TableContainer";
import Td from "../../../../components/ReusableComponents/AdminDashboard/Table/Td";
import Tr from "../../../../components/ReusableComponents/AdminDashboard/Table/Tr";
import Th from "../../../../components/ReusableComponents/AdminDashboard/Table/Th";
import TrHead from "../../../../components/ReusableComponents/AdminDashboard/Table/TrHead";
import ButtonAddHoneydew from "../../../../components/ReusableComponents/Buttons/ButtonAddHoneydew";
import { useLoaderData } from "react-router-dom";

const ServiceList = () => {
  const serviceList = useLoaderData();

  const tableHeadings = [
    "#",
    "Title",
    "Price",
    "Requests",
    "Completed",
    "Pending",
    "Actions",
  ];
  return (
    <AdminDashboardPageContainer>
      <div className="h-[80vh] pt-24 -z-10">
        <TableContainer>
          <div className="flex justify-center">
            <ButtonAddHoneydew>Add New Service</ButtonAddHoneydew>
          </div>

          <table className="table-auto w-full">
            <thead>
              <TrHead>
                {tableHeadings.map((heading, idx) => (
                  <Th key={idx}>{heading}</Th>
                ))}
              </TrHead>
            </thead>
            <tbody>
              {serviceList.map((service, idx) => (
                <Tr key={idx}>
                  <Td className="px-2">{idx + 1}</Td>
                  {Object.keys(service).map((key, idx2) => (
                    <Td key={idx2}>{service[key]}</Td>
                  ))}
                  <Td>
                    <span className="flex space-x-6 justify-center">
                      <AiFillEdit className="text-2xl cursor-pointer text-evergreen" />
                      <AiFillDelete className="text-2xl cursor-pointer text-red-600" />
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

export default ServiceList;
