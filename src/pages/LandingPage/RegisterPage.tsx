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

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [username, ] = useState(""); 
  const [password, setPassword] = useState("");
  const [resetPassword, setResetPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    if(password !== resetPassword) {
      alert("Passwords do not match");
      return;
    }

    const registerData = {
      name,
      surname,
      email,
      username,
      password
    };

    try {
      const response = await fetch("http://localhost:5000/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });

      if(!response.ok) {
        const errorData = await response.json();
        alert("Registration failed: " + (errorData.message || "Unknown error"));
        return;
      }

      alert("Registration successful!");
      navigate("/myauctions"); // pazii ovde, u kodu pišeš myauction ili myauctions? Budi konzistentan.
    } catch(error) {
      alert("Network error, try again later");
    }
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
                    <InputSmall 
                      id="name" 
                      type="text" 
                      placeholder="Name" 
                      value={name} 
                      onChange={e => setName(e.target.value)} 
                    />
                  </InputGroup>

                  <InputGroup>
                    <label htmlFor="surname">Surname</label>
                    <InputSmall 
                      id="surname" 
                      type="text" 
                      placeholder="Surname" 
                      value={surname} 
                      onChange={e => setSurname(e.target.value)} 
                    />
                  </InputGroup>
                </Inputs>

                <StyledLabel htmlFor="email">E-mail</StyledLabel>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="email@example.com" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                />

      

                <StyledLabel htmlFor="password">Password</StyledLabel>
                <PasswordWrapper>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <PasswordToggleIcon type="button" onClick={togglePassword}>
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </PasswordToggleIcon>
                </PasswordWrapper>

                <StyledLabel htmlFor="resetPassword">Confirm Password</StyledLabel>
                <PasswordWrapper>
                  <Input
                    id="resetPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    value={resetPassword}
                    onChange={e => setResetPassword(e.target.value)}
                  />
                  <PasswordToggleIcon type="button" onClick={togglePassword}>
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </PasswordToggleIcon>
                </PasswordWrapper>

                <SubmitButton type="button" onClick={handleRegister}>
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
