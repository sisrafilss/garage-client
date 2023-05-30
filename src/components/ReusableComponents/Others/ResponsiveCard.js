const ResponsiveCard = ({ children, className }) => {
  return (
    <div
      className={`${className} space-y-4 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:gap-4`}
    >
      {children}
    </div>
  );
};

export default ResponsiveCard;
