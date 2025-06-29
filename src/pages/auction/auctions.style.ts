import styled from "styled-components";
``;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  background-color: #F6F6F4 ; 

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr); // prilagodljivo za tablete
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); // mobilni
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;


//BODY

export const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 1440px;
  width: 100%;
  margin: 0 auto;
  background-color:#F6F6F4 ;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  gap: 16px;
  padding: 0 32px;
   background-color: #F6F6F4 ;

`;


