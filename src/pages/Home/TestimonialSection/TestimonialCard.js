import BodyText from "../../../components/ReusableComponents/Others/BodyText";

const TestimonialCard = ({ data }) => {
  const { imgURL, name, description } = data;
  return (
    <div className="max-w-sm bg-twilight pt-20 px-6 pb-6 rounded-md text-center space-y-3 relative mt-20 mx-auto">
      <img
        className="h-32 w-32 rounded-full absolute left-1/2 -top-0 transform -translate-x-1/2 -translate-y-1/2"
        src={imgURL}
        alt=""
      />
      <h5 className="text-white text-lg font-semibold capitalize">{name}</h5>
      <BodyText className="text-white">{description}</BodyText>
    </div>
  );
};

export default TestimonialCard;
