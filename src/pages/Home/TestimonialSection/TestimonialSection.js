import React from "react";
import Subtitle from "../../Shared/ReusableComponents/Subtitle";
import HeadingH2 from "../../Shared/ReusableComponents/HeadingH2";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "olivia cole - 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.",
    imgURL: "https://i.ibb.co/FnQLLDk/client.png",
  },
  {
    name: "olivia cole - 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.",
    imgURL: "https://i.ibb.co/FnQLLDk/client.png",
  },
  {
    name: "olivia cole - 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.",
    imgURL: "https://i.ibb.co/FnQLLDk/client.png",
  },
];

const TestimonialSection = ({className}) => {
  return (
    <section className={`container space-y-6 ${className}`}>
      <div className="space-y-6">
        <Subtitle>Testimonial</Subtitle>
        <HeadingH2 className="text-center">What our clients saying?</HeadingH2>
      </div>
      <div className="sm:grid sm:grid-cols-1 md:grid-cols-2 md:gap-x-3 lg:grid-cols-3 lg:gap-x-4 ">
        {/* */}

        {testimonials.map((testimonial, idx) => (
          <TestimonialCard key={idx} data={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
