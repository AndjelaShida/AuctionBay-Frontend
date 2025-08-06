import styled from "styled-components";
import { devices } from "../styles/media";

export const Title3 = styled.div  `
width: 104px;
font-family: Inter, sans-serif;
font-weight: 600;
font-size: 18px;
leading-trim: NONE;
line-height: 120%;
letter-spacing: 0%;
color: #071015 ;



`;

export const TitleCaption = styled.div  `
width: 648px;
font-family: Inter, sans-serif;
font-weight: 300;
font-size: 16px;
leading-trim: NONE;
line-height: 24px;
letter-spacing: 0%;
color: #74817F ;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center ;


`;

export const BiddingHistory = styled.div  `
width: 680px;
height: 589px;
display: flex;
flex-direction: column;
border-radius: 16px;
padding: 16px;
gap: 16px;
background-color: #FFFFFF ;


`;

export const EmptyState = styled.div  `
width: 648px;
height: 513px;
display: flex;
flex-direction: column;
gap: 8px;
align-items: center;
justify-content: center ;

@media ${devices.mobile} {
width:328px;
height: 214px;
border-radius: 16px;
padding: 16px;
gap: 16px;
background-color: #FFFFFF ;
}



`;