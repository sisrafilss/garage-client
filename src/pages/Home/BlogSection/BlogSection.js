import HeadingH2 from "../../../components/ReusableComponents/Headings/HeadingH2";
import BodyText from "../../../components/ReusableComponents/Others/BodyText";
import ResponsiveCard from "../../../components/ReusableComponents/Others/ResponsiveCard";
import Subtitle from "../../../components/ReusableComponents/Others/Subtitle";
import BlogCard from "./BlogCard";


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

const BlogSection = ({ className }) => {
  return (
    <section className={`container space-y-8 ${className}`}>
      <div className="space-y-4">
        <Subtitle>Blog/news</Subtitle>
        <HeadingH2 className="text-center">checkout our latest blog</HeadingH2>
        <BodyText className="max-w-[800px] text-center mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </BodyText>
      </div>
      <ResponsiveCard>
        {blogData.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </ResponsiveCard>
    </section>
  );
};

export default BlogSection;
