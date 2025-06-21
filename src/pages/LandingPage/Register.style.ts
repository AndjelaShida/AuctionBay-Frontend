import styled from "styled-components";

export const RegisterWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const RegisterLeft = styled.div`
  width: 968px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-height: 100vh;
    width: auto;
    object-fit: contain;
  }
`;
export const RegisterRight = styled.div`
    width: 472px;
  height: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center; /* centriraj sve horizontalno */
padding: 30px 20px ;

  img {
    margin-bottom: 20px;
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
  padding: 12px 16px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  border-radius: 8px;
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

