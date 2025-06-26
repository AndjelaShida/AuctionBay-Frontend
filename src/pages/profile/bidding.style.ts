import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0; 
  
`;


export const Navbar = styled.div`
  height: 100px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;


export const NavButton = styled(Link)`
  padding: 14px 20px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  border-radius: 20px;
  border: none;
  background-color:white;
  color: #000;
  cursor: pointer;
  transition: background-color 0.3s ease;
 color: black;
  display: flex;
  align-items: center;
  border-radius: 50px;
  gap: 10px;

  &:hover {
      color:white ;
    background-color:#202020 ;
  }
`;

export const IconButton = styled(Link)`
  width: 48px;
  height: 48px;
  border-radius: 50%;       /* okruglo */
  background-color: #f4ff47; /* žuta pozadina */
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d4d700;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: #000;
  margin: 0;
  padding: 10px ;
  text-align: left;

`;

