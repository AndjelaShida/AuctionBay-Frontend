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
  RightContainer,
  TitleHello,
  TitlePlease,
  Inputs,
  InputSmall,
} from "./Register.style";
import { PasswordToggleIcon } from "../../profileSetting/changePassword.style";
import { FiEye, FiEyeOff } from "react-icons/fi";

const RegisterPage: React.FC = () => {

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <RegisterWrapper>
      
      <RegisterLeft>
        <img src="/images/registerLeft.png" alt="register illustration" />
      </RegisterLeft>

      <RegisterRight>
        <RightContainer>
          
        <IconButton to="#">
          <img src="images/Left navigation.png" alt="left navigation" />
        </IconButton>

        <TitleHello>Hello!</TitleHello>

        <TitlePlease>Please enter your details</TitlePlease>

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

          <label htmlFor="email">E-mail</label>
          <Input id="email" type="email" placeholder="email@example.com" />

          <label htmlFor="password">Password</label>
          <PasswordWrapper>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
           <PasswordToggleIcon type="button" onClick={togglePassword}>
            {showPassword ? <FiEyeOff /> : <FiEye /> }
            </PasswordToggleIcon>
          </PasswordWrapper>

          <label htmlFor="resetPassword">Reset Password</label>
          <PasswordWrapper>
            <Input
              id="resetPassword"
              type={showPassword ? "text" : "password"}
              placeholder="Reset password"
            />
              <PasswordToggleIcon type="button" onClick={togglePassword}>
            {showPassword ? <FiEyeOff /> : <FiEye /> }
            </PasswordToggleIcon>
          </PasswordWrapper>


          <SubmitButton type="submit">
            Sign up
            </SubmitButton>

          <Subtitle>
            Already have an account?
            <MutedLink to="/loginpage">Log in</MutedLink>
          </Subtitle>

        </FormContainer>
        </RightContainer>
      </RegisterRight>
      
    </RegisterWrapper>
  );
};

export default RegisterPage;
