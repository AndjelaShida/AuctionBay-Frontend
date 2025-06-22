
import { useState } from "react";
import { FormContainer, H2, Input, InputGroup, PasswordWrapper, RegisterLeft, RegisterRight, RegisterWrapper, Row, SubmitButton, Subtitle } from "./Login.style";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
 
  return (
    <RegisterWrapper>
      <RegisterLeft>
        <img src="/images/registerLeft.png" alt="picture"></img>
      </RegisterLeft>

      <RegisterRight>
        <img src="/images/Left navigation.png" alt="leftNavigation"></img>
        <H2>Welcome back!</H2>
        <Subtitle>Please enter your detalis</Subtitle>

        <FormContainer>
          <Row>
            <InputGroup>
              <label>E-mail</label>
              <Input typeof="text" aria-placeholder="email"></Input>
            </InputGroup>
          </Row>

          <PasswordWrapper>
            <label>Password</label>
            <Input
              typeof={showPassword ? "text" : "password"}
              aria-placeholder="Password"
            ></Input>
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
            <Subtitle>Forgot password?</Subtitle>
          </PasswordWrapper>
          <SubmitButton typeof="submit">Login</SubmitButton>
          <Subtitle style={{ marginTop: "35px" }}>
            Dont have an account? <strong>Sign up</strong>
          </Subtitle>
        </FormContainer>
      </RegisterRight>
    </RegisterWrapper>
  );
};

export default LoginPage;
