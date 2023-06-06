import React from "react";
import { NavLink } from "react-router-dom";

const NavServiceToggle = () => {
  return (
   <div className="flex justify-center z-10">
     <div className="fixed flex justify-between rounded shadow-sm bg-white py-4 px-8 space-x-6">
      <NavLink to="" end>Service List</NavLink>
      <Separator />
      <NavLink to="pending" end>Pending</NavLink>
      <Separator />
      <NavLink to="in-progress" end>In-Progress</NavLink>
      <Separator />
      <NavLink to="completed" end>Completed</NavLink>
    </div>
   </div>
  );
};

export default NavServiceToggle;


const Separator = () => {
    return <div className="w-[1px] h-[25px] bg-twilight"></div>
}