const HeadingH2 = ({ children, className }) => {
  return (
    <h2
      className={`${className} text-black font-extrabold capitalize text-2xl  md:text-4xl`}
    >
      {children}
    </h2>
  );
};

export default HeadingH2;
