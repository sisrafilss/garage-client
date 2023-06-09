import BodyText from "../../../components/ReusableComponents/Others/BodyText";
import ButtonRegularGreen from "../../../components/ReusableComponents/Buttons/ButtonRegularGreen";

const ServiceCard = ({ className, cardData, path }) => {
  const { imgURL, title, description } = cardData;
  return (
    <div
      className={`${className} max-w-sm sm:min-w-min text-center px-8 py-8 space-y-4 bg-twilight rounded-md`}
    >
      <img className="shrink-0 mx-auto object-cover" src={imgURL} alt="" />
      <h4 className="text-white font-semibold text-lg">{title}</h4>
      <BodyText className="text-white">{description}</BodyText>
      <ButtonRegularGreen path={path}>View Detail</ButtonRegularGreen>
    </div>
  );
};

export default ServiceCard;
