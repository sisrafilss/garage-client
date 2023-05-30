import { GiCheckMark } from "react-icons/gi";
import BodyText from "../../../components/ReusableComponents/Others/BodyText";

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
