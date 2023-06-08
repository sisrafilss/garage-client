import { NavLink } from "react-router-dom";

const MenuItem = ({ children, className, to }) => {
  return (
    <NavLink
      className={`${className} text-lg font-medium hover:text-evergreen transition duration-300`}
      to={to}
      end
    >
      {children}
    </NavLink>
  );
};

export default MenuItem;
