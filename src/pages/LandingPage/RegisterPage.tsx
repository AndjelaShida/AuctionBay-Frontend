import React, { useState } from "react";
import {
  RegisterWrapper,
  RegisterLeft,
  RegisterRight,
  Subtitle,
  FormContainer,
  Row,
  InputGroup,
  Input,
  PasswordWrapper,
  SubmitButton,
  Title,
  MutedLink,
  
} from "./Register.style";



const RegisterPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);

  return (
    <RegisterWrapper>
      <RegisterLeft>
        <img src="/images/registerLeft.png" alt="register illustration" />
      </RegisterLeft>

      <RegisterRight>
        <img src="/images/Left navigation.png" alt="left navigation" />
        <Title>Hello!</Title>
        <Subtitle>Please enter your details</Subtitle>

        <FormContainer>
          <Row>
            <InputGroup>
              <label htmlFor="name">Name</label>
              <Input id="name" type="text" placeholder="Name" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="surname">Surname</label>
              <Input id="surname" type="text" placeholder="Surname" />
            </InputGroup>
          </Row>

          <label htmlFor="email">E-mail</label>
          <Input id="email" type="email" placeholder="email@example.com" />

          <label htmlFor="password">Password</label>
          <PasswordWrapper>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </PasswordWrapper>

          <label htmlFor="resetPassword">Reset Password</label>
          <PasswordWrapper>
            <Input
              id="resetPassword"
              type={showResetPassword ? "text" : "password"}
              placeholder="Reset password"
            />
            <button
              type="button"
              onClick={() => setShowResetPassword((prev) => !prev)}
              aria-label={
                showResetPassword ? "Hide reset password" : "Show reset password"
              }
            >
              {showResetPassword ? "🙈" : "👁️"}
            </button>
          </PasswordWrapper>

          <SubmitButton type="submit">Log in</SubmitButton>

<Subtitle style={{ marginTop: 35 }}>
  Already have an account?
   <MutedLink to="/loginpage">Log in
   </MutedLink>
</Subtitle>

        </FormContainer>
      </RegisterRight>
    </RegisterWrapper>
  );
};

export default RegisterPage;
