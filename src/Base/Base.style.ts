import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../styles/media";

``;

//WRAPPER
export const Wrapper = styled.div`  OK
  width: 100%;
  max-width: 1440px;
  margin: 0 auto ;
  display: flex;
  align-items: center;
  background-color: #f6f6f4 ;
  padding: 0 24px;

  @media ${devices.mobile} {
  padding: 24px 16px;
  gap:8px;
  background-color: #F6F6F4 ;
  }
 
`;

//NAVBAR

export const LeftNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const RightNavigation = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  gap: 8px;
  border-radius: 32px;
  background-color: #ffffff;

  @media ${devices.mobile} {
    background-color: #f6f6f4;
  }
`;

export const CircleButton = styled(NavLink)`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #f4ff47;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`;

export const ProfileImage = styled(NavLink)`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
  display: block;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100px;
  }
`;

export const Navbar = styled.div`
  width: 1440px;
  background-color: #f6f6f4;
  display: flex;
  justify-content: center;
`;

export const NavbarContent = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;

  @media ${devices.mobile} {
    padding: 0 16px;
    height: auto;
    flex-direction: column;
    gap: 12px;
  }
`;

export const IconButton = styled(Link)` OK
  width: 64px;
  height: 64px;
  border-radius: 100px;    
  objectFit: "cover"  ;
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
 
   

    @media ${devices.mobile} {
    width: 48px;
    height: 48px;
    border-radius: 100px;
    gap: 16px;
    background-color: #F4FF47 ;
  }
`;
export const NavigationTab = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavButton = styled(NavLink)`
  padding: 14px 20px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  border-radius: 32px;
  border: none;
  background-color: #f0f8ff;
  color: #000;
  cursor: pointer;
  transition: background-color 0.3s ease;
  color: black;
  display: flex;
  align-items: center;
  border-radius: 50px;
  gap: 10px;

  &:hover {
    color: white;
    background-color: #202020;
  }

  &.active {
    background-color: #202020;
    color: white;
  }

  @media ${devices.mobile} {
    padding: 10px 14px;
    font-size: 14px;
  }
`;

export const Title = styled.div`
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #000000;
  padding: 0 32px;
`;
