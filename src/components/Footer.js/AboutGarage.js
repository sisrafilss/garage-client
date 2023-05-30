
import Logo from "../ReusableComponents/Others/Logo";
import BodyText from "../ReusableComponents/Others/BodyText";
import SocialMedia from "./SocialMedia";


const AboutGarage = () => {
    return (
        <div className="space-y-3 md:space-y-3">
        <Logo />
        <BodyText className="max-w-sm ">
          Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
          eiusmod tempor ut labore et dolore magna aliqua.
        </BodyText>
        <SocialMedia />
      </div>
    );
};

export default AboutGarage;