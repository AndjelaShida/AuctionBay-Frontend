
import styled from "styled-components";
import { devices } from "../styles/media";

export const ProfileWrapper = styled.div    `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 204px;
border-radius: 16px;
padding: 16px;
gap: 17px;
background-color: #FFFFFF ;

box-shadow: 0px 0px 0px 0px #0000001A;

box-shadow: 0px 4px 8px 0px #0000001A;

box-shadow: 0px 15px 15px 0px #00000017;

box-shadow: 0px 34px 21px 0px #0000000D;

box-shadow: 0px 61px 24px 0px #00000003;

box-shadow: 0px 96px 27px 0px #00000000;  

   @media ${devices.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;


export const SettingButton = styled.button    `
display: flex;
flex-direction: row;
width: 172px;
border-radius: 16px;
padding: 8px 16px;
gap: 8px;


font-family: "Inter", sans-serif;
font-weight: 500;
font-size: 16px;
leading-trim: NONE;
line-height: 24px;
letter-spacing: 0%;
color: #071015 ;

`;

export const LogOutButton = styled.button    `
display: flex;
justify-content: center;
width: 172px;
border-radius: 16px;
border: 1px solid #272D2D ;
padding: 8px 16px;
gap: 8px;

font-family: "Inter", sans-serif;
font-weight: 500;
font-size: 16px;
leading-trim: NONE;
line-height: 24px;
letter-spacing: 0%;
color: #071015 ;

`;

