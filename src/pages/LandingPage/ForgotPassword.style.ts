import { Link } from "react-router-dom";
import styled from "styled-components"; // ``;

export const MainWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const LeftWrapper = styled.div`
flex: 2;
 background-color: #f6f6f4;
 display: flex;
 justify-content: center ;
 align-items: center ;

 img {
 max-height: 100%
 width: auto;
 object-fit: contain;
 }
`;

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; /* vertikalno centriranje */
  align-items: center; /* horizontalno centriranje */
  padding: 40px 80px;
  gap: 8px;
`;
export const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: #000;
  margin: 0;
  text-align: center;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;
export const Row = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 10px;
`;

export const InputGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  &:first-child {
    margin-right: 20px;
  }

  label {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 6px;
    color: #333;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 14px 20px;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  border-radius: 20px;
  border: none;
  background-color: #f4ff47;
  color: #000;
  margin-top: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #dbdb18;
  }
`;
export const BackToLogin = styled.div`
    width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 4px;
  margin-bottom: 16px;
  }
`;

export const MutedLink = styled(Link)`
  color: #999;
  font-size: 14px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &::before {
    content: "←"; 
    margin-right: 8px; 
    font-weight: 900; 
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

