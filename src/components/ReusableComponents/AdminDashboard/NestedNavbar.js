import { NavLink } from "react-router-dom";

const NestedNavbar = ({routeName}) => {
  return (
    
  <div className="w-full h-28 bg-white-smoke fixed pt-10">
     <div className="flex justify-center z-10">
     <div className="fixed left-[45%] flex justify-between rounded shadow-sm bg-white py-4 px-8 space-x-6">
      <NavLink to="" end>{routeName} List</NavLink>
      <Separator />
      <NavLink to="pending" end>Pending</NavLink>
      <Separator />
      <NavLink to="in-progress" end>In-Progress</NavLink>
      <Separator />
      <NavLink to="completed" end>Completed</NavLink>
    </div>
   </div>
  </div>
  );
};

export default NestedNavbar;


const Separator = () => {
    return <div className="w-[1px] h-[25px] bg-twilight"></div>
}