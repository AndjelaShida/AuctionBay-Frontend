import type React from "react";
import {
  BackToLogin,
  FormContainer,
  IconButton,
  Input,
  InputGroup,
  LeftWrapper,
  MainWrapper,
  MutedLink,
  RightContainer,
  RightWrapper,
  SubmitButton,
  Subtitle,
  TitleContainer,
  TitleForgot,
} from "./ForgotPassword.style";

const ForgotPasswordPage: React.FC = () => {
  return (
    <MainWrapper>

      <LeftWrapper>
        <img src="/images/registerLeft.png" alt="register illustration" />
      </LeftWrapper>

      <RightWrapper>

        <RightContainer>

          <IconButton to="#">
            <img src="images/Left navigation.png" alt="left navigation" />
          </IconButton>

          <TitleContainer>
            <TitleForgot>Forgot password?</TitleForgot>
            <Subtitle>No worries, we will send you reset instruction</Subtitle>
          </TitleContainer>
          
          <FormContainer>
           
              <InputGroup>
                <label htmlFor="email">E-mail</label>
                <Input
                  id="email"
                  type="text"
                  placeholder="Enter your email"
                ></Input>
              </InputGroup>
          
          </FormContainer>

          <SubmitButton>Resset Password</SubmitButton>

          <BackToLogin>
            <MutedLink to="/loginpage">Back to login</MutedLink>
          </BackToLogin>
        </RightContainer>
      </RightWrapper>
    </MainWrapper>
  );
};
export default ForgotPasswordPage;
