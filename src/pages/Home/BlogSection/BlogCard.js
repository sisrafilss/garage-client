import HeadingH5 from "../../../components/ReusableComponents/Headings/HeadingH5";
import BodyText from "../../../components/ReusableComponents/Others/BodyText";


const BlogCard = ({ blog }) => {
  const { title, description, imgURL } = blog;
  return (
    <div className="max-w-sm mx-auto md:mx-0">
      <img className="object-cover w-full" src={imgURL} alt="" />
      <div className="bg-twilight py-8 px-5 rounded-bl-[10px] rounded-br-[10px] space-y-4">
        <HeadingH5 className="text-white font-bold text-xl">{title}</HeadingH5>
        <BodyText className="text-white">{description}</BodyText>
        <button className="font-bold text-base text-white uppercase underline cursor-pointer">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
