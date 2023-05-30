import ButtonRegularGreen from "../../components/ReusableComponents/Buttons/ButtonRegularGreen";
import HeadingH1 from "../../components/ReusableComponents/Headings/HeadingH1";
import BodyText from "../../components/ReusableComponents/Others/BodyText";
import InputField from "../../components/ReusableComponents/Others/InputField";
import FormContainer from "./FormContainer";
import FormWrapper from "./FormWrapper";
import LinkedButton from "./LinkedButton";

const Login = () => {
  return (
    <FormWrapper>
      <HeadingH1 className="text-white text-center">Login</HeadingH1>
      <FormContainer>
        <form className="space-y-5 ">
          <div className="space-y-4">
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
          Don't Have an Account?
          <LinkedButton to="/register"> Register Here</LinkedButton>
        </BodyText>
      </FormContainer>
    </FormWrapper>
  );
};

export default Login;
