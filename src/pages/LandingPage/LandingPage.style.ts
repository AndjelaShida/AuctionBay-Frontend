import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #F6F6F4;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const Content = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 40px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 'Inter', sans-serif ;
  font-weight: 700;
  font-size: 64px;
  color: #071015 
  width: 715px;
  height: 77px;

`;

export const Subtitle = styled.div`
font: 'Inter' sans-serif ;
font-weight: 300;
font-size: 16px;

`;

export const StartButton = styled.button`
padding: 8px 16px;
min-height: 40px;
font-weight:500 ;
font-size: 16px;
line-height: 24px;
font-family: 'Inter', sans-serif ;
border-radius: 16px;
border: none;
color: #000000 ;
background-color: #F4FF47 ;
cursor: pointer;
display: inline-block;
margin: 24px auto 0 auto ;

&:hover {
background-color: #e2eb00 ;
}
`;

export const ButtonGroup = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 16px;
  algin-items: center ;
  justify-content: center ;
  gap: 8px ; /*razmak izmedju elemenata */ 
  
`;

export const OrText = styled.span  `
padding: 12px 24px;
color: #666 ;
user-select: none ;
font-weight: 500 ;
`

export const Button = styled.button`
  padding: 12px 24px;
  color: black;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #000000;
    color: #F6F6F4 ;
  
  }
`;
export const HeaderButton = styled.div`
position: absolute ;
top: 20px ;
right: 40px ;
display: flex ;
gap 16px ;
`;