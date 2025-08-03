import styled from "styled-components";
import { devices } from "../styles/media";

// ``;

export const Card = styled.div<{ tag: string }>`
  width: 216px;
  min-width: 216px;
  height: 298px;
  border-radius: 16px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 8px;

  @media (max-width: 480px) {
    width: 328px;
    height: 298px;
    border-radius: 16px;
    background-color: #ffffff;
  }
`;

export const ImageContainer = styled.div`
  width: 208px;
  height: 150px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;

  @media ${devices.mobile} {
    width: 320px;
    height: 150px;
    border-radius: 12px;
  }
`;

export const AuctionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;

  @media ${devices.mobile} {
    width: 315px;
    height: 145px;
    border-radius: 12px;
  }
`;

export const CardContent = styled.div`
  width: 216px;
  height: 92px;
  padding: 8px 8px 4px 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  flex: 1;

  @media ${devices.mobile} {
    width: 328px;
    height: 92px;
    padding: 8px 4px;
    gap: 8px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const Tag = styled.span<{ tag: string; tagColor: string }>`
  width: 60px;
  height: 16px;
  background-color: #ffaa98;
  padding: 2px 4px;
  border-radius: 8px;
  display: inline-block;
  gap: 4px;
  width: fit-content;

  font-family: Inter;
  font-weight: 300;
  font-style: Light;
  font-size: 10px;
  leading-trim: NONE;
  line-height: 12px;
  letter-spacing: 0%;
  color: #071015;

  @media ${devices.mobile} {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    padding: 2px 4px;
    gap: 8px;
    background-color: #f9ff90;
  }
  background-color: ${({ tag, tagColor }) => {
    if (tag.toLowerCase() === "Done") return "#272D2D ";
    if (tag.toLowerCase() === "In progress") return "#F9FF90";
    if (tag.toLowerCase() === "Outbid") return "#FFAA98";
    if (tag.toLowerCase() === "Winning") return "#ADFF90";
    return tagColor;
  }};
  color: ${({ tag }) =>
    tag.toLocaleLowerCase() === "done" ? "white" : "#272D2D"};
`;

export const Time = styled.span<{ tag: string; highlightTime?: boolean }>`
  width: 43px;
  height: 16px;
  padding: 2px 4px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  position: absolute;
  top: 8px;
  right: 8px;

  font-family: Inter;
  font-weight: 300;
  font-style: Light;
  font-size: 10px;
  leading-trim: NONE;
  line-height: 12px;
  letter-spacing: 0%;
  color: #071015;
  width: 19px;
  height: 12px;

  @media ${devices.mobile} {
    width: 43px;
    height: 43px;
    border-radius: 8px;
    padding: 2px 4px;
    gap: 4px;
  }

  background-color: ${({ highlightTime }) =>
    highlightTime ? "#FFAA98" : "transparent"};

  color: #000;

  border: ${({ highlightTime }) =>
    highlightTime ? "1px solid #FFAA98" : "none"};
`;
export const Title = styled.h3`
  width: 200px;
  height: 24px;
  margin: 0;
  display: flex;
  font-family: Inter;
  font-weight: 300;
  font-style: Light;
  font-size: 16px;
  leading-trim: NONE;
  line-height: 24px;
  letter-spacing: 0%;
  color: #071015;

  @media ${devices.mobile} {
    width: 312px;
    height: 24px;
    display: flex;
    flex-direction: column;
  }
`;

export const Price = styled.p`
width: 43px;
height: 24px;
  display: flex;
font-family: Inter;
font-weight: 500;
font-style: Medium;
font-size: 16px;
leading-trim: NONE;
line-height: 24px;
letter-spacing: 0%;

  margin: 0;
  color: #071015;

  @media ${devices.mobile} {
    width: 43px;
    height: 24px;
    font-family: Inter;
    font-weight: 500;
    font-style: Medium;
    font-size: 16px;
    leading-trim: NONE;
    line-height: 24px;
    letter-spacing: 0%;
    color: #071015;
  }
`;
export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 12px 12px 12px;
  gap: 4px;
  width: 208px;
  height: 40px;
  

  @media ${devices.mobile} {
    width: 320px;
    height: 40px;
    gap: 4px;
    display: flex;
    flex-direction: row;
  }
`;

export const DeleteButton = styled.div`
  width: 48px;

  border: 1px solid #272D2D;
  border-radius: 16px;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color:#071015;

  &:hover {
    background-color: #1d1d1d;
    color: white;
  }

  @media ${devices.mobile} {
    width: 48px;
    height: 40px;
    gap: 8px;
    border-radius: 16px;
    border: 1px solid #272d2d;
    padding: 8px 16px;
    display: flex;
    flex-direction: row;
  }
`;
export const EditButton = styled.div`
  flex: 1;
  width: 156px;
  background-color: #272D2D;
  color: white;
  border-radius: 16px;
  padding: 8px 16px;

font-family: Inter;
font-weight: 500;
font-style: Medium;
font-size: 16px;
leading-trim: NONE;
line-height: 24px;
letter-spacing: 0%;
color:#FFFFFF ;

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  &:hover {
    background-color: #000000;
  }

  @media ${devices.mobile} {
    width: 268px;
    height: 40px;
    gap: 8px;
    border-radius: 16px;
    border: 1px solid #272d2d;
    padding: 8px 16px;
    display: flex;
    flex-direction: row;
  }
`;
