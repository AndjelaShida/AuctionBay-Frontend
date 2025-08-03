import { useState } from "react";
import {
  ForgotPasswordWrapper,
  FormContainer,
  IconButton,
  Input,
  InputGroup,
  Inputs,
  LoginLeft,
  LoginRight,
  LoginWrapper,
  MutedLink,
  MutedLink2,
  PasswordWrapper,
  Register,
  SubmitButton,
  Subtitle,
  TitleContainer,
  TitlePlease,
  TitleWelcome,
} from "./Login.style";
import { useNavigate } from "react-router-dom";
import { Container } from "./Register.style";
import { PasswordToggleIcon } from "../../profileSetting/changePassword.style";
import { FiEye, FiEyeOff } from "react-icons/fi";

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/myAuction");
  };
  return (
    <LoginWrapper>
      <LoginLeft>
        <img src="/images/registerLeft.png" alt="register illustration" />
      </LoginLeft>

      <LoginRight>
        <Container>
          <IconButton to="#">
            <img src="images/Left navigation.png" alt="left navigation" />
          </IconButton>

          <TitleContainer>
            <TitleWelcome>Welcome back!</TitleWelcome>
            <TitlePlease>Please enter your details</TitlePlease>
          </TitleContainer>

          <Register>
            <FormContainer>
              <Inputs>
                <InputGroup>
                  <label htmlFor="email">E-mail</label>
                  <Input id="email" type="text" placeholder="E-mail"></Input>
                </InputGroup>
              </Inputs>

              <Inputs>
                <InputGroup>
                  <label htmlFor="password">Password</label>
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
                </InputGroup>
              </Inputs>

              <ForgotPasswordWrapper>
                <MutedLink to="/forgotpasswordpage">Forgot password?</MutedLink>
              </ForgotPasswordWrapper>

              <SubmitButton onClick={handleLogin}>Login</SubmitButton>

              <Subtitle>
                Don't have an account?
                <MutedLink2 to="/registerpage"> Sign up</MutedLink2>
              </Subtitle>
            </FormContainer>
          </Register>
        </Container>
      </LoginRight>
    </LoginWrapper>
  );
};
export default LoginPage;
