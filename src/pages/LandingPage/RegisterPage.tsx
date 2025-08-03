import React, { useState } from "react";
import {
  RegisterWrapper,
  RegisterLeft,
  RegisterRight,
  Subtitle,
  FormContainer,
  InputGroup,
  Input,
  PasswordWrapper,
  SubmitButton,
  MutedLink,
  IconButton,
  TitleHello,
  TitlePlease,
  Inputs,
  InputSmall,
  Container,
  RightSide,
  Login,
  TitleContainer,
  StyledLabel,
  PasswordToggleIcon,
} from "./Register.style";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const RegisterPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(prev => !prev);

  const navigate = useNavigate();

  const handleAuctions = () => {
    navigate("/myauctions");
  };

  return (
    <RegisterWrapper>
      <RegisterLeft>
        <img src="/images/registerLeft.png" alt="register illustration" />
      </RegisterLeft>

      <RegisterRight>

        <RightSide>

          <Container>

            <IconButton to="#">
              <img src="images/Left navigation.png" alt="left navigation" />
            </IconButton>

            <Login>

              <TitleContainer>
                <TitleHello>Hello!</TitleHello>
                <TitlePlease>Please enter your details</TitlePlease>
              </TitleContainer>

              <FormContainer>
                <Inputs>
                  <InputGroup>
                    <label htmlFor="name">Name</label>
                    <InputSmall id="name" type="text" placeholder="Name" />
                  </InputGroup>

                  <InputGroup>
                    <label htmlFor="surname">Surname</label>
                    <InputSmall id="surname" type="text" placeholder="Surname" />
                  </InputGroup>
                </Inputs>

                <StyledLabel  htmlFor="email">E-mail</StyledLabel >
                <Input id="email" type="email" placeholder="email@example.com" />

                <StyledLabel  htmlFor="password">Password</StyledLabel >
                <PasswordWrapper>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <PasswordToggleIcon type="button" onClick={togglePassword}>
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </PasswordToggleIcon>
                </PasswordWrapper>

                <StyledLabel  htmlFor="resetPassword">Reset Password</StyledLabel >
                <PasswordWrapper>
                  <Input
                    id="resetPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Reset password"
                  />
                  <PasswordToggleIcon type="button" onClick={togglePassword}>
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </PasswordToggleIcon>
                </PasswordWrapper>

                <SubmitButton type="button" onClick={handleAuctions}>
                  Sign up
                </SubmitButton>

                <Subtitle>
                  Already have an account?{" "}
                  <MutedLink to="/loginpage">Log in</MutedLink>
                </Subtitle>

              </FormContainer>
            </Login>
          </Container>
        </RightSide>
      </RegisterRight>
    </RegisterWrapper>
  );
};

export default RegisterPage;

