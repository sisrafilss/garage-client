import { AiOutlineNodeCollapse } from "react-icons/ai";
import { FcSettings } from "react-icons/fc";

const TopBar = () => {
  const userInfo = {
    name: "Mahfuzur Rahman",
    imgURL: "https://i.ibb.co/TPSSBbX/Ellipse-38.png",
  };
  const { name, imgURL } = userInfo;

  return (
    <div className="fixed ml-[245px] w-[100%] bg-white py-4 pl-3 pr-[273px] shadow-sm z-10">
      <div className="flex justify-between ">
        <div>
          <AiOutlineNodeCollapse className="text-2xl cursor-pointer hover:text-evergreen" />
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">{name}</span>
          <img className="h-[30px] w-[30px] rounded-full" src={imgURL} alt="" />
          <FcSettings className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
