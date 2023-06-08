import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaDiagnoses } from "react-icons/fa";
import { MdCarRepair } from "react-icons/md";
import { ImBlog } from "react-icons/im";
import { AiOutlineComment } from "react-icons/ai";
import { MdMiscellaneousServices } from "react-icons/md";

const NavItem = ({ className, path, children }) => {
  let Icon = "";
  if (children === "Dashboard") {
    Icon = AiFillHome;
  } else if (children === "Service") {
    Icon = MdMiscellaneousServices;
  } else if (children === "Diagnosctics") {
    Icon = FaDiagnoses;
  } else if (children === "Repair") {
    Icon = MdCarRepair;
  } else if (children === "Blog") {
    Icon = ImBlog;
  } else if (children === "Testimonials") {
    Icon = AiOutlineComment;
  }

  return (
    <>
      {children === "Dashboard" ? (
        <NavLink
          to={path}
          className={`${className} flex space-x-2 items-center hover:text-evergreen`}
          end
        >
          {Icon && <Icon className="text-xl " />}
          <span className="text-lg font-medium duration-300">{children}</span>
        </NavLink>
      ) : (
        <NavLink
          to={path}
          className={`${className} flex space-x-2 items-center hover:text-evergreen`}
        >
          {Icon && <Icon className="text-xl " />}
          <span className="text-lg font-medium duration-300">{children}</span>
        </NavLink>
      )}
    </>
  );
};

export default NavItem;
