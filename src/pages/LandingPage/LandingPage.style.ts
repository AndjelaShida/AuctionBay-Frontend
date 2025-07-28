import { Link } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../../styles/media";

export const Content = styled.div`
  width: 100vw;
  padding: 40px 20px;
  text-align: center;
  background-color: #f6f6f4;
  box-sizing: border-box;

  @media ${devices.mobile} {
    padding: 32px 16px;
    max-width: 360px;
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 104px;
  padding: 20px 32px;
  box-sizing: border-box;
 

  @media ${devices.mobile} {
    justify-content: space-between;
    padding: 20px 16px;
    flex-direction: row;
     gap: 15px;
  }
`;

export const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media ${devices.mobile} {
    width: 100%;
    justify-content: flex-end;
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

  @media ${devices.mobile} {
    width: 48px;
  }
`;

export const H1 = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 64px;
  color: #071015;
  width: 715px;
  height: 77px;
  margin: 0 auto 16px auto;

  @media ${devices.mobile} {
    font-size: 32px;
    padding: 0 8px;
    width: 328px;
  }
`;

export const Subtitle = styled.div`
  font: "Inter" sans-serif;
  font-weight: 300;
  font-size: 16px;
  margin-bottom: 24px;

  @media ${devices.mobile} {
    font-size: 16px;
    padding: 0 8px;
  }
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
  background-color: #f4ff47;
  cursor: pointer;
  display: inline-block;
  margin: 24px auto 0 auto;

  &:hover {
    background-color: #cad43b;
  }

  @media ${devices.mobile} {
    font-size: 14px;
    width: 100%;
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

export const Auctions = styled.div`
  max-width: 1144px;
  width: 100%;
  height: auto;
  border-radius: 32px;
  border: 8px solid #272d2d;
  overflow: hidden;
  margin: 40px auto 0 auto;
  background-color: #f6f6f4;

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

  @media ${devices.mobile} {
    border-width: 4px;
    border-radius: 16px;
  }
`;
