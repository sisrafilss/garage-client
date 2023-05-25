import React from "react";
import InputField from "../Shared/ReusableComponents/InputField";
import ButtonRegularGreen from "../Shared/Buttons/ButtonRegularGreen";
import HeadingH1 from "../Shared/ReusableComponents/HeadingH1";
import BodyText from "../Shared/ReusableComponents/BodyText";
import FormWrapper from "./FormWrapper";
import FormContainer from "./FormContainer";
import LinkedButton from "./LinkedButton";

const Login = () => {
  return (
    <FormWrapper>
      <HeadingH1 className="text-white text-center">Login</HeadingH1>
      <FormContainer>
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
        <BodyText className="text-center text-white">
          Don't Have an Account?{" "}
         <LinkedButton to="/register">Register Here</LinkedButton>
        </BodyText>
      </FormContainer>
    </FormWrapper>
  );
};

export default Login;
