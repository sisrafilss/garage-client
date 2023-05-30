const Subtitle = ({ children, className }) => {
  return (
    <h4
      className={`${className} text-twilight text-lg uppercase text-center underline font-medium -mb-3 sm:text-xl `}
    >
      {children}
    </h4>
  );
};

export default Subtitle;
