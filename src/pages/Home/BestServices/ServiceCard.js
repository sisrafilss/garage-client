import React from "react";
// import img from "../../../media/img/Services/service-card-img.png";
import BodyText from "../../Shared/ReusableComponents/BodyText";
import ButtonRegularGreen from "../../Shared/Buttons/ButtonRegularGreen";

const ServiceCard = ({ className, cardData }) => {
    const {imgURL, title, description} = cardData;
  return (
    <div
      className={`${className} max-w-sm sm:min-w-min text-center px-8 py-8 space-y-4 bg-twilight px-4 py-6 rounded-md`}
    >
      <img className="shrink-0 mx-auto object-cover" src={imgURL} alt="" />
      <h4 className="text-white font-semibold text-lg">{title}</h4>
      <BodyText className="text-white">
        {description}
      </BodyText>
      <ButtonRegularGreen>View Detail</ButtonRegularGreen>
    </div>
  );
};

export default ServiceCard;
