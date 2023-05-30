import ButtonRegularGreen from "../../../components/ReusableComponents/Buttons/ButtonRegularGreen";
import BodyText from "../../../components/ReusableComponents/Others/BodyText";


const FeatureCard = ({ className, cardData }) => {
  const { imgURL, title, description } = cardData;
  return (
    <div
      className={`${className} max-w-sm sm:min-w-min text-center px-8 py-8 space-y-4 bg-twilight rounded-md`}
    >
      <div className="w-28 mx-auto h-auto shrink-0">
      <img className="mx-auto w-full h-auto" src={imgURL} alt="" />
      </div>
      <h4 className="text-white font-semibold text-lg">{title}</h4>
      <BodyText className="text-white">{description}</BodyText>
      <ButtonRegularGreen path="">View Detail</ButtonRegularGreen>
    </div>
  );
};

export default FeatureCard;
