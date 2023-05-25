import React from "react";
import FormWrapper from "../Login/FormWrapper";
import HeadingH1 from "../Shared/ReusableComponents/HeadingH1";
import FormContainer from "../Login/FormContainer";
import InputField from "../Shared/ReusableComponents/InputField";
import ButtonRegularGreen from "../Shared/Buttons/ButtonRegularGreen";
import BodyText from "../Shared/ReusableComponents/BodyText";
import LinkedButton from "../Login/LinkedButton";

const Register = () => {
  return (
    <FormWrapper>
      <HeadingH1 className="text-white text-center">Registration</HeadingH1>
      <FormContainer>
        <form className="space-y-5 ">
          <div className="space-y-4">
            <InputField
              type="text"
              label="Name"
              placeholder="Enter your name"
            />
            <InputField
              type="Email"
              label="Email"
              placeholder="Enter your email"
            />
            <InputField
              type="number"
              label="Mobile"
              placeholder="Enter your mobile number"
            />
            <InputField
              type="password"
              label="Password"
              placeholder="Enter your password"
            />
            <InputField
              type="password"
              label="Confirm Password"
              placeholder="Confirm Password"
            />
          </div>
          <ButtonRegularGreen className="">Register</ButtonRegularGreen>
        </form>
        <BodyText className="text-center text-white">
          Already Have an Account?{" "}
          <LinkedButton to="/login">Login Here</LinkedButton>
        </BodyText>
      </FormContainer>
    </FormWrapper>
  );
};

export default Register;
