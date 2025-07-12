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
  SubmitButton,
  Subtitle,
  TitlePlease,
  TitleWelcome,
} from "./Login.style";
import { useNavigate } from "react-router-dom";
import { RightContainer } from "./Register.style";



const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
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
        <RightContainer>

        <IconButton to="#">
          <img src="images/Left navigation.png" alt="left navigation" />
        </IconButton>

        <TitleWelcome>Welcome back!</TitleWelcome>

        <TitlePlease>Please enter your details</TitlePlease>

        <FormContainer>

          <Inputs>
            <InputGroup>
              <label htmlFor="email">E-mail</label>
              <Input id="email" type="text" placeholder="E-mail"></Input>
            </InputGroup>
          </Inputs>

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

          <ForgotPasswordWrapper>
            <MutedLink to="/forgotpasswordpage">Forgot password?</MutedLink>
         </ForgotPasswordWrapper>

          <SubmitButton onClick={handleLogin}>Login</SubmitButton>

          <Subtitle>
            Don't have an account?
            <MutedLink2 to="/registerpage"> Sign up</MutedLink2>
          </Subtitle>

        </FormContainer>
        </RightContainer>
      </LoginRight>
    </LoginWrapper>
  );
};
export default LoginPage;
