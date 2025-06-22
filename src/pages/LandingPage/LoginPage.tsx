import { useState } from "react";
import {
  ForgotPasswordWrapper,
  FormContainer,
  Input,
  InputGroup,
  LoginLeft,
  LoginRight,
  LoginWrapper,
  MutedLink,
  MutedLink2,
  PasswordWrapper,
  Row,
  SubmitButton,
  Subtitle,
  Title,
} from "./Login.style";



const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <LoginWrapper>
      <LoginLeft>
        <img src="/images/registerLeft.png" alt="register illustration" />
      </LoginLeft>

      <LoginRight>
        <img src="/images/Left navigation.png" alt="left navigation" />
        <Title>Welcome back!</Title>
        <Subtitle>Please enter your details</Subtitle>
        <FormContainer>
          <Row>
            <InputGroup>
              <label htmlFor="email">E-mail</label>
              <Input id="email" type="text" placeholder="E-mail"></Input>
            </InputGroup>
          </Row>

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
            <MutedLink to="/forgotpasswordpage">Forgot password?
            </MutedLink>
         </ForgotPasswordWrapper>

          <SubmitButton>Login</SubmitButton>

          <Subtitle style={{ marginTop: 35 }}>
            Don't have an account? 
            <MutedLink2 to="/registerpage">Sign up
            </MutedLink2>
          </Subtitle>

        </FormContainer>
      </LoginRight>
    </LoginWrapper>
  );
};
export default LoginPage;
