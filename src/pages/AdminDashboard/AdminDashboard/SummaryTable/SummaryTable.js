import React from "react";
import HeadingH2 from "../../../../components/ReusableComponents/Headings/HeadingH2";

const SummaryTable = ({ tableData, className }) => {
  return (
    <div
      className={`${className} bg-white shadow-sm px-10 pt-8 pb-10 space-y-10 rounded`}
    >
      <HeadingH2 className="text-center">
        A Quick Summary of Last 30 Days
      </HeadingH2>
      <table className="table-fixed w-full">
        <tbody>
          {tableData.map((data, idx) => (
            <tr key={idx} className="text-center duration-100 hover:bg-white-smoke">
              <td className="border border-twilight border-opacity-50 font-medium py-4">
                {data.title}
              </td>
              <td className="border border-twilight border-opacity-50 font-medium py-4">
                {data.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SummaryTable;
