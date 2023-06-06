

const TrHead = ({ className, children }) => {
  return (
    <tr
      className={`${className} bg-twilight border border-white-smoke  text-white`}
    >
      {children}
    </tr>
  );
};

export default TrHead;
