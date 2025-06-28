import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  background-color: #F6F6F4 ; 

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr); // prilagodljivo za tablete
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); // mobilni
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #F6F6F4 ; 
  overflow-x: hidden;
  
`;


export const Navbar = styled.div`
  height: 100px;
  background-color: #F6F6F4;
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

export const TabBar = styled.div`
flex-direction: column;
display: flex ;
align-items: center ;
text-align: center;
justify-content: center;
gap: 32px;
padding: 24px ;
`;


export const NavButton = styled(NavLink)`
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
  gap: 10px;

  &:hover {
      color:white ;
    background-color:#202020 ;
  }
    &.active {
    background-color: #202020;
    color: white;
    }
`;

export const IconButton = styled(Link)`
  width: 48px;
  height: 48px;
  border-radius: 50%;      
  background-color: white; 
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  color: black;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
 
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: #000;
  margin: 0;
  padding: 10px ;
  text-align: left;

`;
export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;
export const NavButton2 = styled(Link)`
  padding: 14px 20px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  border-radius: 20px;
  border: none;
  background-color:#F0F8FF;
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


