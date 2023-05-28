import React, { useEffect, useState } from "react";
import SectionWrapper from "../../Shared/ReusableComponents/SectionWrapper";
import PageTopHeader from "../../Shared/ReusableComponents/PageTopHeader";
import ColsWrapper from "../../../components/ResponsiveLayout/ColsWrapper";
import FeatureContainer from "../../../components/ResponsiveLayout/FeatureContainer";
import ServiceNavigation from "./ServiceNavigation";
import BasketContainer from "../../../components/ResponsiveLayout/BasketContainer";
import Basket from "../Basket";
import { useLoaderData, useParams } from "react-router-dom";
import HeadingH3 from "../../Shared/ReusableComponents/HeadingH3";
import Features from "./Features";
import ButtonRegularGreen from "../../Shared/Buttons/ButtonRegularGreen";
import axios from "axios";
import FAQBody from "../../Home/MissionAndFaq/FAQ/FAQBody";

const ServiceDetail = ({ className }) => {
  const params = useParams();
  const { serviceId } = params;
  const reparingList = useLoaderData();
  const [activeIndex, setActiveIndex] = useState(null);

  const serviceData = reparingList.find(
    (service) => service.id === parseInt(serviceId)
  );

  const { title, price, discountPrice, imgURL, features, faq } = serviceData;

  const handleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <SectionWrapper className={`${className} mb-12`}>
      <PageTopHeader pageName="What does your Toyota Avensis need?" />

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
                    <Features feature={feature} />
                  ))}
                </div>

                <div className="pt-4">
                  <ButtonRegularGreen className="w-full font-semibold">
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
          <Basket className="h-auto" />
        </BasketContainer>
      </ColsWrapper>
    </SectionWrapper>
  );
};

export default ServiceDetail;
