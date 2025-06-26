import styled from "styled-components";
// ``;

export const Card = styled.div`
width: 216px; 
min-width: 216px;
height: 250px ;
min-height: 250px ;
border-radius: 16px;
background-color: #ffffff ;
display: flex;
flex-direction: column;
padding: 8px;
gap: 8px;
position: relative;
 background-color: white;

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

export const Tag = styled.span`
  font-size: 12px;
  background-color: #ffaa98;
  padding: 3px 6px;
  border-radius: 30px;
  display: inline-block;
  width: fit-content;
`;

export const Time = styled.span`
  font-size: 12px;
  background-color: #ffaa98;
  padding: 3px 6px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 4px;
  position: absolute;
  top: 8px;
  right: 8px;
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
justify-content:space-between;
padding: 0 12px 12px 12px ;
gap: 8px;
`;


export const DeleteButton = styled.div ` 
width:36px;
height: 36px;
border: 1px solid black;
border-radius: 12px;
color: black;
background-color:white;
display:flex;
align-items: center;
justify-content: center;
cursor: pointer;
`;
export const EditButton = styled.div` 
flex: 1;
height:36px;
background-color: #1d1d1d;
color:white;
border: none;
border-radius: 12px;
padding: 0 12px;
font-size: 14px;
font-weight: 500cursor: pointer;
display:flex;
align-items: center;
justify-content: center;
gap:6px;

`;


