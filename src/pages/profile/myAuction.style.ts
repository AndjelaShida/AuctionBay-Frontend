import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { devices } from "../../styles/media";

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media ${devices.mobile} {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  background-color: #f6f6f4;

  @media ${devices.mobile} {
    width: 100%;
    padding: 16px 16px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  background-color: #f6f6f4;

  @media ${devices.mobile} {
    width: 360px;
    height: 2316px;
  }
`;
export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 20px 32px;
  background-color: #f6f6f4;
  

  @media ${devices.mobile} {
    width: 480px;
    height: 80px;
    gap: 16px;
  }
`;

export const LeftNavigation = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  width: 347px;
  height: 64px;

  @media ${devices.mobile} {
    width: 152px;
    height: 48px;
    gap: 8px;
  }
`;

export const NavButton2 = styled(NavLink)`
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

  &.active {
    background-color: #272d2d;
    color: white;
  }
`;

export const NavigationTab = styled.div`
  display: flex;
  flex-direction: row;
  width: 251px;
  height: 64px;
  border-radius: 32px;
  padding: 4px;
  gap: 8px;

  @media ${devices.mobile} {
    width: 96px;
    height: 48px;
    gap: 8px;
    border-radius: 32px;
    padding: 4px;
  }
`;

export const NavButton = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1px26px;
  border-radius: 32px;
  padding: 8px 16px;
  gap: 4px;
  background-color: #ffffff;
  color: #071015;

  &:hover {
    color: white;
    background-color: #202020;
  }

  @media ${devices.mobile} {
    width: 96px;
    height: 48px;
    gap: 8px;
    border-radius: 32px;
    padding: 4px;
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

  @media ${devices.mobile} {
    width: 96px;
    height: 48px;
    gap: 8px;
    border-radius: 32px;
    padding: 4px;
  }
`;

export const TitleBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1440px;
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

  @media ${devices.mobile} {
    width: 360px;
    height: 38px;
    padding: 16px 16xpx;
    gap: 8px;
  }
`;

export const TabBar = styled.div`
  width: 1440px;
  flex-direction: row;
  display: flex;
  justify-content: center;
  padding: 32px 32px;
  

  @media ${devices.mobile} {
    width: 360px;
    height: 48px;
    padding: 16px 16px;
  }
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
