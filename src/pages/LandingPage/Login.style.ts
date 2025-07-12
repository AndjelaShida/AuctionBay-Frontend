import { Link } from "react-router-dom";
import styled from "styled-components"; // ``;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1440px;
  height: 1024px;
  background-color: #f6f6f4;
`;

export const LoginLeft = styled.div`
  max-width: 968px;
  width: 968px;
  height: 1024px;
  background-color: #f6f6f4;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
`;

export const LoginRight = styled.div`
  max-width: 472px;
  width: 472px;
  height: 1024px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
`;

export const RightContainer = styled.div`
  max-width: 448px;
  width: 448px;
  height: 1008px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 32px;
  padding: 64px 32px;
  background-color: #ffffff;
`;

export const TitleWelcome = styled.h2`
  width: 240px;
  height: 38px;
  font-size: 32px;
  font-weight: 700;
  color: #071015;
  line-height: 120%;
  text-align: center;
`;

export const TitlePlease = styled.div`
  width: 185px;
  height: 24px;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #071015;
`;
export const FormContainer = styled.div`
  width: 384px;
  height: 408px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Inputs = styled.div`
  width: 384px;
  height: 336px;
  display: flex;
  gap: 16px;

  &::placeholder {
    color: #ffffff;
    width: 184px;
    height: 40px;
    min-height: 40px;
    border-radius: 16px;
    border: 1px solid #dde9e6;
    padding: 8px 16px 8px 16px;
    gap: 8px;
  }
`;

export const InputGroup = styled.div`
width 184px;
height: 72px;
gap: 8px;
flex: 1;
display: flex;
flex-direction: column;

  label {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px ;
    color: #071015;
  }
`;

export const Input = styled.input`
  width: 384px;
  height: 40px;
  min-height: 40px;
  padding: 8px 16px 8px 16px;
  border-radius: 16px;
  border: 1px solid #dde9e6;
  background-color: #ffffff;

  &:focus {
    border-color: #333;
    outline: none;
  }

  &::placeholder {
    color: #74817f;
    font-size: 16px;
    font-weight: 300;
    line-height: ;
  }
`;

export const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 384px;
  height: 72px;
  gap: 8px;
  position: relative;

  button {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button`
  width: 384px;
  height: 40px;
  min-height: 40px;
  padding: 8px 16px 8px 16px;
  gap: 8px;
  border-radius: 16px;
  background-color: #f4ff47;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #dbdb18;
  }
`;

export const Subtitle = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 16px;
  width: 100%;
  text-align: center;
  margin-bottom: 24px;

  strong {
    font-weight: 900;
    cursor: pointer;
  }
`;

export const ForgotPasswordWrapper = styled.div`
  width: 100px;
  height: 16px;
  gap: 4px;
  display: flex;
 
`;

export const MutedLink = styled(Link)` 
  width: 100px;
  height: 16px;
  color: #74817f;
  font-weight: 300;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #333;
  }
`;
export const MutedLink2 = styled(Link)`
  color: #071015;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #333;
  }
`;
export const IconButton = styled(Link)`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #f4ff47;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 16px;
  color: black;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;
