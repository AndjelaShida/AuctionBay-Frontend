import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  padding: 20px;
  width: 1440px;
  box-sizing: border-box;
  background-color: #f6f6f4;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 1440px;
  height: 850px;
  gap: 16px;
  background-color: #f6f6f4;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 1024px;
  gap: 16px;
  background-color: #f6f6f4;
 
`;
export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  width: 1440px;
  justify-content: space-between;
  padding: 20px 32px;
  background-color: #f6f6f4;

`;

export const LeftNavigation = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

export const NavButton2 = styled(Link)`
  width: 126px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 16px;
  background-color: #edf4f2;
  cursor: pointer;
  transition: background-color 0.3s ease;

  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-style: medium;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;
  color: #071015;

  &:hover {
    color: white;
    background-color: #272d2d;
  }
`;

export const NavigationTab = styled.div`
  display: flex;
  flex-direction: row;
  width: 251px;
  border-radius: 32px;
  padding: 4px;
  gap: 8px;
  background-color: #ffffff;

`;

export const NavButton = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 126px;
  border-radius: 32px;
  padding: 8px 16px;
  gap: 4px;
  background-color: #ffffff;
  color: #071015;

  &:hover {
    color: white;
    background-color: #202020;
  }
`;

export const RightNavigation = styled.div`
  width: 128px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4px;
  gap: 8px;
  border-radius: 32px;
  background-color: #ffffff;
   
`;

export const TitleBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 1440px;
  padding: 32px 32px;
  gap: 8px;
  background-color: #f6f6f4;
  

  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-style: bold;
  font-size: 32px;
  line-height: 120%;
  letter-spacing: 0%;
  color: #000000;
`;

export const TabBar = styled.div`
  width: 1440px;
  flex-direction: row;
  display: flex;
  justify-content: center;
  padding: 32px 32px;
`;
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 402px;
  padding: 4px;
  border-radius: 16px;
  gap: 8px;
  background-color: #edf4f2;
`;
