import { Link } from "react-router-dom";
import styled from "styled-components"; // ``;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  background-color: #f6f6f4;
`;

export const LeftWrapper = styled.div`
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

export const RightWrapper = styled.div`
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

export const TitleForgot = styled.h2`
  width: 281px;
  height: 38px;
  font-size: 32px;
  font-weight: 700;
  color: #071015;
  line-height: 120%;
  text-align: center;
`;

export const Subtitle = styled.div`
  width: 347px;
  height: 24px;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;
export const Input = styled.input`
  padding: 12px 24px;
  border-radius: 12px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%;

  &:focus {
    border-color: #333;
    outline: none;
  }

  &::placeholder {
    color: #999;
  }
`;
export const FormContainer = styled.div`
  width: 384px;
  height: 144px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const Inputs = styled.div`
  width: 384px;
  height: 72px;
  display: flex;
  gap: 16px;

  &::placeholder {
    color: #ffffff;
    width: 384px;
    height: 40px;
    min-height: 40px;
    border-radius: 16px;
    border: 1px solid #dde9e6;
    padding: 8px 16px;
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
export const BackToLogin = styled.div`
  width: 97px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  }
`;

export const MutedLink = styled(Link)`
  color: #74817f;
  gap: 4px;
  font-size: 12px;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;

  &::before {
    content: "←";
    margin-top: 4px;
    margin-left: 5.33px;
    font-weight: 900;
    color: #74817f;
  }

  &:hover {
    color: #777;
  }
`;

export const IconButton = styled(Link)`
 width: 64;
  height: 64;
  border-radius: 50%;    
  objectFit: "cover"  
  background-color: #F4FF47; 
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
