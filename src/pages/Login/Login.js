import React from "react";
import InputField from "../Shared/ReusableComponents/InputField";
import ButtonRegularGreen from "../Shared/Buttons/ButtonRegularGreen";
import HeadingH1 from "../Shared/ReusableComponents/HeadingH1";
import BodyText from "../Shared/ReusableComponents/BodyText";

const Login = () => {
  return (
    <div className="bg-twilight px-10 py-14 md:py-16 lg:py-18 xl:py-20">
      <div className="container  space-y-5 md:space-y-8">
        <HeadingH1 className="text-white text-center">Login</HeadingH1>
        <div className=" mx-auto max-w-md bg-black bg-opacity-20 py-10 rounded-md px-5  shadow-lg space-y-8 md:px-8">
          <form className="space-y-5 ">
            <div className="space-y-2">
              <InputField
                type="Email"
                label="Email"
                placeholder="Enter your email"
              />
              <InputField
                type="password"
                label="Password"
                placeholder="Enter your password"
              />
            </div>
            <ButtonRegularGreen className="">Login</ButtonRegularGreen>
          </form>
          <BodyText className="text-center text-white">Don't Have an Account? <span className="text-turquoise cursor-pointer hover:underline">Register Here</span></BodyText>
        </div>
      </div>
    </div>
  );
};

export default Login;
