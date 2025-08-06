import styled from "styled-components"; // ``;
import { Link } from "react-router-dom";
import { devices } from "../styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 533px;
  height: 404px;
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
    height: 404px;
    border-radius: 16px;
    padding: 16px;
    gap: 32px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 501px;
  height: 28px;
  gap: 16px;

  width: 501px;
  height: 28px;
  font-family: "Inter", sans-serif;
  font-weight: 700px;
  font-size: 23px;
  line-height: 120&;
  color: #000000;

  @media ${devices.mobile} {
    width: 296px;
    height: 28px;
    gap: 16px;
  }
`;

export const FormContainer = styled.div`
  width: 501px;
  height: 240px;
  gap: 16px;
  display: flex;
  flex-direction: column;

  @media ${devices.mobile} {
    width: 296px;
    height: 240px;
    gap: 16px;
  }
`;

export const NameAndSurnameContainer = styled.div`
  width: 501px;
  height: 240px;
  gap: 100px;
  display: flex;
  flex-direction: row;

  @media ${devices.mobile} {
    width: 296px;
    height: 240px;
    gap: 17px;
  }
`;

export const InputGroup = styled.div`
  width: 184px;
  height: 72px;
  gap: 8px;
  flex: 1;
  display: flex;
  flex-direction: column;

  label {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: #071015;
  }
`;

export const Inputs = styled.div`
  width: 501px;
  height: 72px;
  gap: 17px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 242px;
  height: 40px;
  min-height: 40px;
  gap: 8px;
  border-radius: 16px;
  border: 1px solid #dde9e6;
  padding: 8px 16px;
`;

export const MutedLink = styled(Link)`
  width 139px;
height: 24px;
font-family: "Inter", sans-serif;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #272D2D ;

`;

export const MutedLink2 = styled(Link)`
width 139px;
height: 24px;
font-family: "Inter", sans-serif;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #272D2D ;

`;

export const BottomBar = styled.div`
width 501px;
height: 40px;
gap: 16px;
display: flex;
flex-direction: row;
justify-content: flex-end;

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
width: 53px;
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
width: 107px;
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
