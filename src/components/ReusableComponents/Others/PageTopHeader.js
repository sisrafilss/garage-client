import HeadingH2 from "../Headings/HeadingH2";

const PageTopHeader = ({ pageName }) => {
  return (
    <div
      className={`h-52 max-h-52 w-full relative bg-[url('https://i.ibb.co/nzF9TCK/image-16.png')]`}
    >
      <div className="bg-twilight h-52 max-h-52 w-full bg-opacity-90">
        <HeadingH2 className="text-white absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {pageName}
        </HeadingH2>
      </div>
    </div>
  );
};

export default PageTopHeader;
