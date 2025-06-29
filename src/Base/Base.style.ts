import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
``;

//WRAPPER
export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f6f4;
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
  width: 100%;
  background-color: #f6f6f4;
  display: flex;
  justify-content: center; /* centriramo unutrašnji sadržaj */
`;

export const NavbarContent = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
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
`;

export const Title = styled.div`
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #000000;
  padding: 0 32px;

`;
