import styled from "styled-components";

export const Wrapper = styled.div  `
display: flex;
flex-direction: column;
width: 533px;
height: 414px;
border-radius: 16px;
padding: 16px;
gap: 32px;
background-color: #FFFFFF ;
`;

export const Header = styled.div`
display: flex;
flex-direction: column;
width: 501px;
height: 28px;
gap: 16px;
`;


export const Title = styled.div`
width: 501px;
height: 28px;
 font-family: "Inter", sans-serif;
 font-weight: 700;
 font-style: bold;
 font-size: 23px;
 line-height: 120% ;
 color:#000000 ;
`;

export const FormContainer = styled.div`
width: 501px;
height: 250px;
gap: 17px;
display: flex;
flex-direction: column;
`;

export const Inputs = styled.div`
width: 501px;
height: 72px;
gap: 8px;
display: flex;
flex-direction: column;


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
    line-height: 24px ;
    color: #071015;
  }
    
    `;

  export const Input = styled.input`
width: 242px;
height: 40px;
min-height: 40px;
gap: 8px;
border-radius: 16px;
border: 1px solid #DDE9E6 ;
padding: 8px 16px;

&::placeholder {
width: 501px;
height: 40xp;
min-height: 40px;
border-radius: 16px;
border: 1px solid #DDE9E6 ;
}
`;