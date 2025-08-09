import styled from "styled-components";
import { devices } from "../styles/media";

export const Card = styled.div<{ $tag: string }>`
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
    padding: 8px 4px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const Tag = styled.span<{ $tag: string; $tagColor: string }>`
  padding: 2px 4px;
  border-radius: 8px;
  display: inline-block;
  width: fit-content;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  color: #071015;

  background-color: ${({ $tag, $tagColor }) => {
    if ($tag.toLowerCase() === "done") return "#272D2D";
    if ($tag.toLowerCase() === "in progress") return "#F9FF90";
    if ($tag.toLowerCase() === "outbid") return "#FFAA98";
    if ($tag.toLowerCase() === "winning") return "#ADFF90";
    return $tagColor;
  }};
  color: ${({ $tag }) =>
    $tag.toLowerCase() === "done" ? "white" : "#272D2D"};
`;

export const Time = styled.span<{ $tag: string; $highlightTime?: boolean }>`
  padding: 2px 4px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  position: absolute;
  top: 8px;
  right: 8px;
 font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  color: #000;
  background-color: ${({ $highlightTime, $tag }) =>
    $highlightTime || $tag === "outbid" ? "#FFAA98" : "transparent"};

  border: ${({ $highlightTime, $tag }) =>
    $highlightTime || $tag === "outbid" ? "1px solid #FFAA98" : "none"};
`;

export const Title = styled.h3`
  margin: 0;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #071015;

  @media ${devices.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const Price = styled.p`
  display: flex;
font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  color: #071015;
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
  }
`;

export const DeleteButton = styled.button`
  width: 48px;
  border: 1px solid #272D2D;
  border-radius: 16px;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #071015;

  &:hover {
    background-color: #1d1d1d;
    color: white;
  }

  @media ${devices.mobile} {
    height: 40px;
    padding: 8px 16px;
  }
`;

export const EditButton = styled.div`
  flex: 1;
  background-color: #272D2D;
  color: white;
  border-radius: 16px;
  padding: 8px 16px;
 font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
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
    padding: 8px 16px;
  }
`;

