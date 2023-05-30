import { useEffect, useState } from "react";
import SectionWrapper from "../../components/ReusableComponents/Others/SectionWrapper";
import PageTopHeader from "../../components/ReusableComponents/Others/PageTopHeader";
import OrderSteps from "../ServiceRequest/ServiceDetail/OrderSteps";
import ColsWrapper from "../../components/ResponsiveLayout/ColsWrapper";
import FeatureContainer from "../../components/ResponsiveLayout/FeatureContainer";
import HeadingH3 from "../../components/ReusableComponents/Headings/HeadingH3";
import BodyText from "../../components/ReusableComponents/Others/BodyText";
import LinkedButton from "../Login/LinkedButton";
import Input from "./Input";
import ButtonRegularTwilight from "../../components/ReusableComponents/Buttons/ButtonRegularTwilight";
import ButtonRegularGreen from "../../components/ReusableComponents/Buttons/ButtonRegularGreen";
import BasketContainer from "../../components/ResponsiveLayout/BasketContainer";
import Basket from "../ServiceRequest/Basket";
import TotalAtBottom from "../ServiceRequest/ServiceDetail/TotalAtBottom";


const ConfirmOrder = () => {
  // State for basket
  const [basketItems, setBasketItems] = useState([]);

  // load basket data from local storage
  useEffect(() => {
    // Load the basket items from local storage when the component mounts
    const storedData = localStorage.getItem("basketItems");
    if (storedData) {
      setBasketItems(JSON.parse(storedData));
    }
  }, []);

  const totalPrice = basketItems.reduce((accumulator, item) => {
    return accumulator + parseFloat(item.price);
  }, 0);
  return (
    <div>
      <SectionWrapper>
        <PageTopHeader pageName="We just need a few more details to confirm your booking" />
        <div className="flex justify-center items-center">
          <OrderSteps activeStep="3" />
        </div>

        <ColsWrapper className="pb-10 sm:pb-12 md:pb-16 lg:pb-20">
          <FeatureContainer className="border pb-2 shadow ">
            <div className="p-6 space-y-4">
              <div className="space-y-1">
                <HeadingH3>Your Contact Details</HeadingH3>
                <BodyText>
                  Already have an account?{" "}
                  <LinkedButton to="/login">Login Here</LinkedButton>{" "}
                </BodyText>
              </div>
              <div className="space-y-[14px]">
                <form className="space-y-[14px]">
                  <div className="space-y-[14px] md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
                    <Input label="First Name" type="text" />
                    <Input label="Last Name" type="text" />
                    <Input label="Phone Number" type="number" />
                    <Input label="Email Address" type="email" />
                    <Input label="Create Password" type="password" />
                    <Input label="Confirm Password" type="password" />
                  </div>
                  <div>
                    <label className="text-sm">
                      Additional Detail (Optionals)
                    </label>
                    <textarea
                      cols="10"
                      rows="5"
                      className="bg-light-gray w-full px-2 py-2 rounded outline-light-gray focus:bg-white focus:bg-opacity-80"
                      type="text"
                    />
                  </div>
                </form>
                <div className="flex justify-between items-center">
                  <ButtonRegularTwilight>Back</ButtonRegularTwilight>
                  <ButtonRegularGreen>Confirm</ButtonRegularGreen>
                </div>
              </div>
            </div>
          </FeatureContainer>

          <BasketContainer>
            <Basket basketItems={basketItems} totalPrice={totalPrice} />
          </BasketContainer>
        </ColsWrapper>

        <TotalAtBottom totalPrice={totalPrice}  />
      </SectionWrapper>
    </div>
  );
};

export default ConfirmOrder;
