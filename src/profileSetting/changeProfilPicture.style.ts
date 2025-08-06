import styled from "styled-components";
import { devices } from "../styles/media";

export const Wrapper = styled.div`
  width: 533px;
  height: 276px;
  border-radius: 16px;
  padding: 16px;
  gap: 32px;
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media ${devices.mobile} {
    width: 328px;
    border-radius: 16px;
    padding: 16px;
    gap: 32px;
    background-color: #ffffff;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 501px;
  height: 28px;
  gap: 16px;

  span {
    width: 501px;
  height: 28px;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 23px;
  line-height: 120%;
  color: #000000;
  }

  @media ${devices.mobile} {
    width: 296px;
    gap: 16px;
  }
`;

export const Inner = styled.div`
  width: 501px;
  height: 112px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
 

   @media ${devices.mobile} {
    width: 296px;
    gap: 16px;
  }
`;

export const ProfilImage = styled.div`
width: 56px;
height: 56px;
border-radius: 50% ;
overflow: hidden;


img {
width: 100% ;
height: 100%;
object-fit: cover;
display; block;
}
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  min-height: 40px;
  padding: 8px 16px;
  border: 1px solid #272d2d;
  border-radius: 16px;
  background-color: transparent;
  color: #272d2d;

  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f6f6f6;
  }

     @media ${devices.mobile} {
    width: 181px;
    border-radius: 16px;
    gap: 16px;
    padding: 8px 16px;
    border:1px solid #272D2D ;
  }
`;

export const BottomBar = styled.div`
width 501px;
height: 40px;
gap: 16px;
display: flex;
flex-direction: row;
justify-content: flex-end;
margin-top: 70px;

   @media ${devices.mobile} {
    width: 296px;
    gap: 16px;
  }
`;

export const ButtonCancel = styled.button`
width 85px;
height: 40px;
min-height: 40px;
padding: 8px 16px ;
gap: 8px;
display: flex;
flex-direction: column;
background-color: #EDF4F2 ;

span {
width 53px;
height: 24px;
 font-family: "Inter", sans-serif;
 font-weight: 500;
 font-size: 16px;
 line-height: 24px;
 color: #071015 ;
}

 @media ${devices.mobile} {
 width: 85px;
 gap: 16px;
 border-radius: 16px;
 padding: 8px 16px;
 background-color: #EDF4F2 ;
 }
`;

export const ButtonSave = styled.button`
width 139px;
height: 40px;
min-height: 40px;
border-radius: 16px;
padding: 8px 16px;
background-color: #F4FF47 ;

span {
width 107px;
height: 24px;
 font-family: "Inter", sans-serif;
 font-weight: 500;
 font-size: 16px;
 line-height: 24px;
 color: #071015 ;
 text-align: center ;
}

@media ${devices.mobile} {
width: 139px;
gap: 16px;
border-radius: 16px;
padding: 8px 16px;
background-color: #F4FF47 ;
}

`;
