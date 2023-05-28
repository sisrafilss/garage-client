import React from "react";
import BodyText from "../../Shared/ReusableComponents/BodyText";
import { GiCheckMark } from "react-icons/gi";

const Features = ({ feature, className }) => {
  return (
    <div className={`${className} space-y-3`}>
      <BodyText>{feature.para}</BodyText>
      {feature.points.map((point, idx) => (
        <div className="flex space-x-2 items-center" key={idx}>
          <GiCheckMark className="text-evergreen text-base" />
          <BodyText>{point}</BodyText>
        </div>
      ))}
    </div>
  );
};

export default Features;
