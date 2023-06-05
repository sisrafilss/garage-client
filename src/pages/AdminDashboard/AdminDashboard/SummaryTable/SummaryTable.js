import React from "react";
import HeadingH2 from "../../../../components/ReusableComponents/Headings/HeadingH2";

const tableData = [
  {
    title: "Total Visitors",
    value: 772100,
  },
  {
    title: "Total Sale",
    value: 103723,
  },
  {
    title: "Total Requests",
    value: 10854,
  },
  {
    title: "Completed Requests",
    value: 7229,
  },
  {
    title: "Pending Requests",
    value: 2688,
  },
  {
    title: "Rejected by Admin",
    value: 396,
  },
  {
    title: "Cancelled by User",
    value: 1089,
  },
];

const SummaryTable = () => {
  return (
    <div className="bg-white shadow-sm px-10 pt-8 pb-10 space-y-10 rounded">
      <HeadingH2 className="text-center">
        A Quick Summary of Last 30 Days
      </HeadingH2>
      <table className="table-fixed w-full">
        {tableData.map((data, idx) => (
          <tr key={idx} className="text-center hover:bg-white-smoke">
            <td className="border border-twilight border-opacity-50 font-medium py-4">
              {data.title}
            </td>
            <td className="border border-twilight border-opacity-50 font-medium py-4">
              {data.value}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default SummaryTable;
