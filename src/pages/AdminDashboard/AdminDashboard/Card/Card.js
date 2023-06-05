import HeadingH3 from "../../../../components/ReusableComponents/Headings/HeadingH3";

const Card = ({ className, data }) => {
  const { title, properties } = data;
  return (
    <div
      className={`${className} min-w-[240px] max-w-lg px-8 py-6 rounded text-white text-center shadow-sm`}
    >
      <div className="space-y-4">
        <HeadingH3 className="text-white">{title}</HeadingH3>
        <div className="space-y-2">
          {properties.map((item, idx) => (
            <div key={idx} className="flex justify-between">
              <span>{item.title}:</span>
              <span className="font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
