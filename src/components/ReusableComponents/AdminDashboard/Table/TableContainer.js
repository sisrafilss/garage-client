const TableContainer = ({ className, children }) => {
  return (
    <div
      className={`${className} mt-8 bg-white shadow-sm px-10 pt-8 pb-10 space-y-10 rounded`}
    >
      {children}
    </div>
  );
};

export default TableContainer;
