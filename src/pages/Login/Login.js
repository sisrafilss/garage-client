import React from "react";
import HeadingH2 from "../Shared/ReusableComponents/HeadingH2";
import InputField from "../Shared/ReusableComponents/InputField";
import ButtonRegularGreen from "../Shared/Buttons/ButtonRegularGreen";

const Login = () => {
  return (
    <div className="bg-twilight py-20 px-10">
      <div className="container bg-mintfrost py-10 px-5 rounded shadow-lg">
        <HeadingH2 className="text-left">Login</HeadingH2>
        <form className="space-y-5">
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
      </div>
    </div>
  );
};

export default Login;
