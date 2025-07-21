import { NavLink } from "react-router-dom";
import styled from "styled-components"; // ``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f6f6f4;
  gap: 8px;
  width: 1440px;
  align-items: center;
  padding: 32px 32px ;
`;

export const Inner = styled.div`
  display: flex;
  gap: 16px;
  width: 1376px;
  height: 888px;
 
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 16px;
  width: 680px;
  max-height: 888px;
  border-radius: 16px;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 16px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const RightSide = styled.div` 
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 680px;
  height: 888px;
  radius: 16px;
  
`;
export const DetalisCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 680px;
  height: 283px;
  border-radius: 16px;
  padding: 16px;
  background-color: #ffffff;
`;
export const BiddingHistory = styled.div`
  display: flex;
  gap: 16px;
  width: 680px;
  border-radius: 16px;
  padding: 16px;
  background-color: #ffffff;
  flex-direction: column;
 
`;

export const MetaCard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  width: 650px;
  height: 589px;
  border-radius: 16px;
  padding: 16px;
  background-color: #ffffff;
`;
export const Tag = styled.div`
  display: flex;
  gap: 8px;
  width: 67px;
  height: 28px;
  border-radius: 16px;
  padding: 2px 8px 2px 8px;
  background-color: #ffaa98;
  justify-content: center;
`;

export const Time = styled.div`
  display: flex;
  gap: 4px;
  width: 69px;
  height: 28px;
  border-radius: 16px;
  padding: 2px 8px 2px 8px;
  background-color: #ffaa98;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  width: 274px;
  height: 38px;
  font-family: Inter, sans-serif;
  font-weight: 700px;
  font-size: 32px;
  color: #000000;
`;

export const TextDescription = styled.div`
  width: 648px;
  height: 96px;
  font-family: Inter, sans-serif;
  font-weight: 300px;
  font-size: 16px;
  color: #000000;
`;

export const ActionBar = styled.div`
  width: 648px;
  height: 41px;
  gap: 8px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const BidText = styled.div`
  width: 29px;
  height: 24px;
  display: flex;
  align-items: center;
  font-family: Inter, sans-serif;
  font-weight: 300;
  font-size: 16px;
  font-style: light;
  line-height: 24px;
  color: #000000;
`;

export const NavButton2 = styled(NavLink)`
  width: 71px;
  height: 24px;
  border-radius: 16px;
  padding: 8px 16px 8px 16px;
  gap: 8px;
  background-color: #f4ff47;
  cursor: pointer;
  transition: all 300ms ease-out;
  display: flex;
  align-items: center;

  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 16px;
  font-style: medium;
  line-height: 24px;
  color: #071015;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0py 4px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const Title2 = styled.div`
  width: 205px;
  height: 28px;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 23px;
  font-style: bold;
  line-height: 120%;
  color: #000000;
`;

export const Table = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
`;
export const Name = styled.div`
  width: 339px;
  height: 24px;
  font-family: Inter, sans-serif;
  font-weight: 300;
  font-style: light;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

export const TextDate = styled.div`
  width: 120px;
  height: 24px;
  font-family: Inter, sans-serif;
  font-weight: 300;
  font-size: 16px;
  font-style: light;
  line-height: 24px;
  color: #000000;
  display: flex;
 
`;

export const TableRow = styled.div` 
   display: flex;
  justify-content: space-between; 
  align-items: center;
  width: 100%;
  padding: 8px 16px;
  border: 1px solid #EDF4F2;

 
`;

export const RightSideData = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const ProfilImg = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const Avatar = styled.img` 
  width: 32px;
  height: 32px;
  border-radius: 50%;

`;

export const Price = styled.div` 
  width: 77px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 6px 16px;
  background-color: #F4FF47 ;

   font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 16px;
  font-style: semi-bold;
  line-height: 120%;
  color: #272D2D;

`;
export const ButtonPrice = styled.div` 
  width: 83px;
  height: 40PX;
  gap: 8px;
  border-radius: 16px;
  border: 1px solid #DDE9E6 ;
  padding: 8x 16px;
  background-color: #FFFFFF ;
  display: flex;
  align-items: center ;
  justify-content: center;

  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 16px;
  font-style: semi-bold;
  line-height: 120%;
  color: #071015;
`;

export const LeftCell = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
`;

export const RightCell = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 16px;
`;


