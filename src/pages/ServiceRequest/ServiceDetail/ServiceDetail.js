import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SectionWrapper from "../../../components/ReusableComponents/Others/SectionWrapper";
import PageTopHeader from "../../../components/ReusableComponents/Others/PageTopHeader";
import OrderSteps from "./OrderSteps";
import ColsWrapper from "../../../components/ResponsiveLayout/ColsWrapper";
import FeatureContainer from "../../../components/ResponsiveLayout/FeatureContainer";
import ServiceNavigation from "./ServiceNavigation";
import HeadingH3 from "../../../components/ReusableComponents/Headings/HeadingH3";
import Features from "./Features";
import ButtonRegularGreen from "../../../components/ReusableComponents/Buttons/ButtonRegularGreen";
import FAQBody from '../../Home/MissionAndFaq/FAQ/FAQBody'
import BasketContainer from "../../../components/ResponsiveLayout/BasketContainer";
import Basket from "../Basket";
import TotalAtBottom from "./TotalAtBottom";
import ResponsiveCard from "../../../components/ReusableComponents/Others/ResponsiveCard";
import FeatureCard from "./FeatureCard";


const ServiceDetail = ({ className }) => {
  // State for handling Service FAQ
  const [activeIndex, setActiveIndex] = useState(null);

  // State for basket
  const [basketItems, setBasketItems] = useState([]);

  // Catching service id for dynamic data fetching
  const params = useParams();
  const { serviceId } = params;
  const reparingList = useLoaderData();
  // Finding specific service based on id [doing it for development purpose only]. It will replaced by real api while integrating backend.
  const serviceData = reparingList.find(
    (service) => service.id === parseInt(serviceId)
  );

  const { title, price, discountPrice, imgURL, features, faq } = serviceData;

  // handle accordion for faq section of each service
  const handleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  // load basket data from local storage
  useEffect(() => {
    // Load the basket items from local storage when the component mounts
    const storedData = localStorage.getItem("basketItems");
    if (storedData) {
      setBasketItems(JSON.parse(storedData));
    }
  }, []);

  // hanlde Add Item to Basket as well as save it to local storage
  const handleAddItemToBasket = (item) => {
    const { title, price } = item;
    const newItem = { title, price };
    setBasketItems([...basketItems, newItem]);
    localStorage.setItem(
      "basketItems",
      JSON.stringify([...basketItems, newItem])
    );
  };

  // Calculate Total price
  const totalPrice = basketItems.reduce((accumulator, item) => {
    return accumulator + parseFloat(item.price);
  }, 0);

  return (
    <SectionWrapper className={`${className} mb-12`}>
      <PageTopHeader pageName="What does your Toyota Avensis need?" />

      <div className="flex justify-center items-center">
        <OrderSteps activeStep="1" />
      </div>

      <ColsWrapper>
        <FeatureContainer className="border pb-6">
          <div className="h-full">
            <ServiceNavigation />

            <div className="px-5 py-4">
              <div className="space-y-6">
                {/* Breadcrumb */}
                <div>
                  <span className="text-evergreen text-base font-medium uppercase">
                    All Repairs
                  </span>
                  {/* Greater than symbol */}
                  <span> &gt; </span>
                  <span className="text-base">{title}</span>
                </div>

                {/* Title and Image */}
                <div className="flex justify-between items-center">
                  <HeadingH3>{title}</HeadingH3>
                  <div className="w-28 h-auto">
                    <img className="w-full" src={imgURL} alt="" />
                  </div>
                </div>

                {/* Price */}
                <div className="flex space-x-6 items-center">
                  <HeadingH3 className="font-medium">
                    ${discountPrice}
                  </HeadingH3>
                  <span className="line-through">${price}</span>
                </div>

                {/* Feature List */}
                <div className="space-y-8">
                  {features.map((feature, idx) => (
                    <Features key={idx} feature={feature} />
                  ))}
                </div>

                <div className="pt-4">
                  <ButtonRegularGreen
                    className="w-full font-semibold"
                    onClick={() => handleAddItemToBasket(serviceData)}
                  >
                    Add to Basket
                  </ButtonRegularGreen>
                </div>
              </div>
            </div>

            <hr />

            <div className="px-5 py-4 space-y-7">
              <HeadingH3 className="font-medium">{faq?.title}</HeadingH3>
              <FAQBody
                handleAccordion={handleAccordion}
                activeIndex={activeIndex}
                faqData={faq?.qna}
              />
            </div>
          </div>
        </FeatureContainer>

        <BasketContainer>
          <Basket
            basketItems={basketItems}
            totalPrice={totalPrice}
            className="h-auto"
          />
        </BasketContainer>
      </ColsWrapper>

      <div className="bg-slate w-full h-auto py-10 z-0">
        <div className="container">
          <div className="flex justify-between items-center">
            <HeadingH3 className="text-white">
              Looking for Someting Else
            </HeadingH3>
            <HeadingH3 className="text-white uppercase underline cursor-pointer hover:text-opacity-90">
              View All Repairs
            </HeadingH3>
          </div>
        </div>

        <div className="container pt-12">
          <ResponsiveCard>
            {reparingList.map((data) => (
              <FeatureCard
                key={data.id}
                className="mx-auto md:mx-0"
                cardData={data}
              />
            ))}
          </ResponsiveCard>
        </div>
      </div>

      <TotalAtBottom totalPrice={totalPrice} path="/checkout/schedule" />
    </SectionWrapper>
  );
};

export default ServiceDetail;
