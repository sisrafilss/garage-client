import React from "react";
import Logo from "../../../../components/ReusableComponents/Others/Logo";
import NavItem from "./NavItem";

const SidebarNavigation = () => {
  return (
    <div className="w-60 bg-mintfrost h-screen fixed space-y-10 pl-10 pt-10 shadow">
      <Logo />
      <div>
        <div className="flex flex-col space-y-8">
          <NavItem>Dashboard</NavItem>
          <NavItem>Service</NavItem>
          <NavItem>Diagnosctics</NavItem>
          <NavItem>Repair</NavItem>
          <NavItem>Blog</NavItem>
          <NavItem>Testimonials</NavItem>
        </div>
      </div>
    </div>
  );
};

export default SidebarNavigation;
