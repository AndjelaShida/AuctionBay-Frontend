import styled from "styled-components";
import { Link } from "react-router-dom"; 


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


export const NavButton2 = styled(Link)`
  padding: 14px 20px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  border-radius: 32px;
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


export const Title = styled.h2`
width: 1440px;
height: 38px;
  font-size: 40px;
  font-weight: 700;
  color: #000;
  margin: 0;
  padding: 10px ;
  text-align: left;

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
export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
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
`;




