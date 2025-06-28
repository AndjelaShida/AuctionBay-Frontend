import styled from "styled-components";

// ``;

export const Card = styled.div<{ tag: string }>`
  width: 216px;
  min-width: 216px;
  height: 250px;
  border-radius: 16px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
  position: relative;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
`;

export const AuctionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  flex: 1;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const Tag = styled.span<{ tag: string; tagColor: string }>`
  font-size: 12px;
  background-color: #ffaa98;
  padding: 3px 6px;
  border-radius: 30px;
  display: inline-block;
  width: fit-content;
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

export const Time = styled.span<{ tag: string }>`
  font-size: 12px;
  padding: 3px 6px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 4px;
  position: absolute;
  top: 8px;
  right: 8px;

  background-color: ${({ tag }) => {
    switch (tag.toLowerCase()) {
      case "in progress":
        return "transparent";
      case "winning":
      case "outbid":
        return "#FFAA98";
      default:
        return "transparent";
    }
  }};

  color: ${({ tag }) => {
    switch (tag.toLowerCase()) {
      case "outbid":
      case "winning":
      case "in progress":
        return "#000"; // crna boja za outbid, winning i in progress
      default:
        return "#fff"; // bela boja za ostalo
    }
  }};

  border: ${({ tag }) =>
    tag.toLowerCase() === "in progress" ? "none" : "1px solid transparent"};
`;
export const Title = styled.h3`
  font-size: 14px;
  color: #071015;
  margin: 0;
  display: flex;
  font-weight: 400;
`;

export const Price = styled.p`
  display: flex;
  font-size: 16px;
  font-family: inter medium;
  font-weight: 700;
  margin: 0;
  color: #071015;
`;
export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 12px 12px 12px;
  gap: 8px;
`;

export const DeleteButton = styled.div`
  width: 36px;
  height: 36px;
  border: 1px solid black;
  border-radius: 12px;
  color: black;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #1d1d1d;
    color: white;
  }
`;
export const EditButton = styled.div`
  flex: 1;
  height: 36px;
  background-color: #1d1d1d;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  &:hover {
    background-color: #000000;
  }
`;
