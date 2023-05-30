import BodyText from "../../../components/ReusableComponents/Others/BodyText";
import Subtitle from "../../../components/ReusableComponents/Others/Subtitle";


const Mission = () => {
    return (
        <div className="space-y-7">
        <Subtitle className="sm:text-left">OUR MISSION</Subtitle>
        <div className="space-y-4">
          <BodyText>
            We offer a full range of garage services to vehicle owners located
            in Tucson area. All mechanic services are performed by highly
            qualified mechanics. We can handle any car problem.
          </BodyText>
          <BodyText>
            We offer a full range of garage services to vehicle owners in
            Tucson. Our professionals know how to handle a wide range of car
            services. Whether you drive a passenger car or medium sized truck or
            SUV, our mechanics strive to ensure that your vehicle will be
            performing at its best before leaving our car shop.
          </BodyText>
        </div>
      </div>
    );
};

export default Mission;