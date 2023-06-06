const Td = ({ className, children }) => {
  return (
    <td
      className={`${className} border border-twilight border-opacity-50 font-base py-4`}
    >
      {children}
    </td>
  );
};

export default Td;
