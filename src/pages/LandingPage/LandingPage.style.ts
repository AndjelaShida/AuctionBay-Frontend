import { Link } from "react-router-dom";
import styled from "styled-components";

export const Content = styled.div`
  width: 1440px;
  padding: 40px 20px;
  text-align: center;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  algin-items: center;
  height: 104px;
  padding: 20px 32px;
  width: 100%;
  box-sizing: border-box;
`;

export const AuthButtons = styled.div`
  display: flex;
  algin-items: center;
  gap: 16px;
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

export const H1 = styled.h1`
  font-size: 'Inter', sans-serif ;
  font-weight: 700;
  font-size: 64px;
  color: #071015 
  width: 715px;
  height: 77px;
  margin: 0 auto 16px auto ;

`;

export const Subtitle = styled.div`
  font: "Inter" sans-serif;
  font-weight: 300;
  font-size: 16px;
  margin-bottom: 24px;
`;

export const StartButton = styled.button`
  padding: 8px 16px;
  min-height: 40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  font-family: "Inter", sans-serif;
  border-radius: 16px;
  color: #000000;
  background-color: #F4FF47;
  cursor: pointer;
  display: inline-block;
  margin: 24px auto 0 auto;

  &:hover {
  background-color:#cad43b 
  }
`;

export const OrText = styled.span`
  padding: 12px 24px;
  color: #666;
  user-select: none;
  font-weight: 500;
`;

export const Button = styled.button`
  padding: 12px 24px;
  color: black;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #000000;
    color: #f6f6f4;
  }
`;
export const HeaderButton = styled.div`
position: absolute ;
top: 20px ;
right: 40px ;
display: flex ;
gap 16px ;
`;

export const Auctions = styled.div`
  width: 1144px;
  height: auto;
  border-radius: 32px;
  border: 8px solid #272D2D;
  overflow: hidden;
  margin: 40px auto 0 auto;

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
`;

