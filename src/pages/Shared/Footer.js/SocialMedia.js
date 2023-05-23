import React from "react";

import {
  FaYoutubeSquare,
  FaPinterestSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const SocialMedia = ({className}) => {
  return (
    <div className={`${className} flex space-x-4`}>
      <BsFacebook className="text-2xl text-twilight cursor-pointer duration-300 hover:text-black text-opacity-80" />
      <AiFillTwitterCircle className="text-2xl text-twilight cursor-pointer duration-300 hover:text-black text-opacity-80" />
      <FaYoutubeSquare className="text-2xl text-twilight cursor-pointer duration-300 hover:text-black text-opacity-80" />
      <FaPinterestSquare className="text-2xl text-twilight cursor-pointer duration-300 hover:text-black text-opacity-80" />
      <FaInstagramSquare className="text-2xl text-twilight cursor-pointer duration-300 hover:text-black text-opacity-80" />
    </div>
  );
};

export default SocialMedia;
