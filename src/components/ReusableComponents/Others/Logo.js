import { NavLink } from "react-router-dom";

const Logo = ({ className }) => {
  return (
    <NavLink to="/" className={`${className} font-bold text-2xl`}>
      GARAGE
    </NavLink>
  );
};

export default Logo;
