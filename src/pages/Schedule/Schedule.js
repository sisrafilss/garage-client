import { useEffect, useState } from "react";
import SectionWrapper from "../../components/ReusableComponents/Others/SectionWrapper";
import PageTopHeader from "../../components/ReusableComponents/Others/PageTopHeader";
import OrderSteps from "../ServiceRequest/ServiceDetail/OrderSteps";
import ColsWrapper from "../../components/ResponsiveLayout/ColsWrapper";
import FeatureContainer from "../../components/ResponsiveLayout/FeatureContainer";
import MyCalendar from "./MyCalendar";
import TimePicker from "./TimePicker";
import BasketContainer from "../../components/ResponsiveLayout/BasketContainer";
import Basket from "../ServiceRequest/Basket";
import TotalAtBottom from "../ServiceRequest/ServiceDetail/TotalAtBottom";


const Schedule = () => {
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
    <SectionWrapper>
      <PageTopHeader pageName="Choose your Date and Time" />
      <div className="flex justify-center items-center">
        <OrderSteps activeStep="2" />
      </div>

      <ColsWrapper className="pb-10 sm:pb-12 md:pb-16 lg:pb-20">
        <FeatureContainer className="border pb-6 shadow ">
          <div className=" space-y-6 h-auto">
            <div className="px-5 pt-5">
              <h3 className="text-2xl">
                Pick a drop-off time to take your car to the garage
              </h3>
            </div>
            
            <div>
              <MyCalendar />
            </div>

            <hr className="w-full" />

            <div className="mx-5">
              <TimePicker />
            </div>

          </div>
        </FeatureContainer>

        <BasketContainer>
          <Basket basketItems={basketItems} totalPrice={totalPrice} />
        </BasketContainer>
      </ColsWrapper>

      <TotalAtBottom totalPrice={totalPrice} path="/checkout/confirm-order" />
    </SectionWrapper>
  );
};

export default Schedule;
