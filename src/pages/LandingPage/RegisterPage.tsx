import {
  FormContainer,
  H2,
  Input,
  InputGroup,
  PasswordWrapper,
  RegisterLeft,
  RegisterRight,
  RegisterWrapper,
  Row,
  SubmitButton,
  Subtitle,
} from "./Register.style";
import { useState } from "react";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  return (
    <RegisterWrapper>
      <RegisterLeft>
        <img src="/images/registerLeft.png" alt="registerLeft"></img>
      </RegisterLeft>

      <RegisterRight>
        <img src="/images/Left navigation.png" alt="Left navigation"></img>
        <H2>Hello!</H2>
        <Subtitle>Please enter your detalis</Subtitle>

        <FormContainer>
          <Row>
            <InputGroup>
              <label>Name</label>
              <Input typeof="text" aria-placeholder="Name"></Input>
            </InputGroup>

            <InputGroup>
              <label>Surname</label>
              <Input typeof="text" aria-placeholder="Surname"></Input>
            </InputGroup>
          </Row>
          <label>E-mail</label>
          <Input typeof="text" aria-placeholder="email"></Input>

          <label>Password</label>
          <PasswordWrapper>
          <Input 
          typeof={showPassword ? "text" : "password"}  
          aria-placeholder="Password"></Input>
           <button type="button" onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? "🙈" : "👁️"}
            </button>
          </PasswordWrapper>

          <label>ResetPassword</label>
           <PasswordWrapper>
            <Input
              type={showResetPassword ? "text" : "password"}
              placeholder="Reset password"
            />
            <button
              type="button"
              onClick={() => setShowResetPassword((prev) => !prev)}
            >
              {showResetPassword ? "🙈" : "👁️"}
            </button>
          </PasswordWrapper>
          <SubmitButton typeof="submit">Sign up</SubmitButton>
          <Subtitle style={{ marginTop:"35px"}}>
            Already have an account? <strong>Log in</strong></Subtitle>
        </FormContainer>
      </RegisterRight>
    </RegisterWrapper>
  );
};

export default RegisterPage;
