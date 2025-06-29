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
  RightWrapper,
  Row,
  SubmitButton,
  Subtitle,
  Title,
} from "./ForgotPassword.style";

const ForgotPasswordPage: React.FC = () => {
  return (
    <MainWrapper>
      <LeftWrapper>
        <img src="/images/registerLeft.png" alt="register illustration" />
      </LeftWrapper>

      <RightWrapper>
         <IconButton to="#">
                    <img src="images/Left navigation.png" alt="left navigation" />
                  </IconButton>
        <Title>Forgot password?</Title>
        <Subtitle>No worries, we will send you reset instruction</Subtitle>

        <FormContainer>
          <Row>
            <InputGroup>
              <label htmlFor="email">E-mail</label>
              <Input
                id="email"
                type="text"
                placeholder="Enter your email"
              ></Input>
            </InputGroup>
          </Row>
        </FormContainer>

        <SubmitButton>Resset Password</SubmitButton>

        <BackToLogin>
          <MutedLink to="/loginpage">Back to login</MutedLink>
        </BackToLogin>
      </RightWrapper>
    </MainWrapper>
  );
};
export default ForgotPasswordPage;
