import styled from "styled-components";

export const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: row ;
  width: 100vw;
  height: 1024px;
  margin: 0 auto ;
  overflow: hidden;
  
`;

export const RegisterLeft = styled.div`
  width: 968px;
  height: 1024px;
  background-color: #F6F6F4;
  display: flex;
  justify-content: center;
  align-items: center;

  
  img {
  height: 80%;   
  width: auto;
  object-fit: contain;
 
  }
`;
export const RegisterRight = styled.div`
  width: 472px;
  height: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: center ;
  align-items: center; 
  padding: 20px 50px;
  gap: 8px ;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const H2 = styled.div`
  display: flex;
  justify-content: center;
  font-size: 40px;
  font-weight: bold;
  color: #000000;
`;

export const Subtitle = styled.div`
  text-align: center;
  font-family: "Inter" sans-serif;
  font-weight: 300;
  font-size: 16px;
  margin-bottom: 24px;
  width: 100%;

  strong {
  font-weight: 900;
  cursor: pointer;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;
`;

export const Input = styled.input`
  padding: 12px 16px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%;

  &::placeholder {
    color: #999;
  }

  &:focus {
    border-color: #333;
    outline: none;
  }
`;
export const SubmitButton = styled.button`
  padding: 12px 20px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  margin-top: 16px;
  color: #000000;
  background-color: #f4ff47;
  text-align: center;
`;

export const Row = styled.div`
  display: flex;
  gap: 80px;
  margin-bottom: 10px;

  input {
    flex: 1;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1; /* svaki zauzima polovinu prostora */

  label {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 4px;
    color: #333;
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;

  input {
    width: 100%;
  }

  button {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 18px;
  }
`;
