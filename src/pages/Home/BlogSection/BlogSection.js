import React from "react";
import Subtitle from "../../Shared/ReusableComponents/Subtitle";
import BodyText from "../../Shared/ReusableComponents/BodyText";
import HeadingH2 from "../../Shared/ReusableComponents/HeadingH2";
import HeadingH5 from "../../Shared/ReusableComponents/HeadingH5";
import ResponsiveCard from "../../Shared/ReusableComponents/ResponsiveCard";

const blogData = [
  {
    title: "How To Boost Up Your Vehicle Engine",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
    imgURL: "https://i.ibb.co/N2GjhsB/image-13-1.png",
  },
  {
    title: "How To Boost Up Your Vehicle Engine",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
    imgURL: "https://i.ibb.co/N2GjhsB/image-13-1.png",
  },
  {
    title: "How To Boost Up Your Vehicle Engine",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
    imgURL: "https://i.ibb.co/N2GjhsB/image-13-1.png",
  },
];

const BlogSection = () => {
  return (
    <div className="container space-y-8">
      <div className="space-y-4">
        <Subtitle>Blog/news</Subtitle>
        <HeadingH2>checkout our latest blog</HeadingH2>
        <BodyText className="max-w-[800px] text-center mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </BodyText>
      </div>
      <ResponsiveCard>
        {blogData.map((blog, index) => (
          <div className="max-w-sm mx-auto md:mx-0">
            <img className="object-cover w-full" src={blog.imgURL} alt="" />
            <div
              key={index}
              className="bg-twilight py-8 px-5 rounded-bl-[10px] rounded-br-[10px] space-y-4"
            >
              <HeadingH5 className="text-white font-bold text-xl">
                {blog.title}
              </HeadingH5>
              <BodyText className="text-white">{blog.description}</BodyText>
              <button className="font-bold text-base text-white uppercase underline cursor-pointer">
                Read More
              </button>
            </div>
          </div>
        ))}
      </ResponsiveCard>
    </div>
  );
};

export default BlogSection;
