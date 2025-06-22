import styled from "styled-components";

export const RegisterWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const RegisterLeft = styled.div`
  flex: 2; /* 2/3 širine */
  background-color: #f6f6f4;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-height: 100%;
    width: auto;
    object-fit: contain;
  }
`;

export const RegisterRight = styled.div`
  flex: 1; /* 1/3 širine */
  display: flex;
  flex-direction: column;
  justify-content: center; /* vertikalno centriranje */
  align-items: center;     /* horizontalno centriranje */
  padding: 40px 50px;
  gap: 8px;
`;

export const H2 = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: #000;
  margin: 0;
  text-align: center;
`;

export const Subtitle = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 16px;
  width: 100%;
  text-align: center;
  margin-bottom: 24px;

  strong {
    font-weight: 900;
    cursor: pointer;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const Row = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 10px;
`;

export const InputGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

    &:first-child {
    margin-right: 20px;
  }

  label {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 6px;
    color: #333;
  }
`;

export const Input = styled.input`
  padding: 12px 24px;
  border-radius: 12px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%;

  &:focus {
    border-color: #333;
    outline: none;
  }

  &::placeholder {
    color: #999;
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

export const SubmitButton = styled.button`
  width: 100%;
  padding: 14px 20px;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  border-radius: 20px;
  border: none;
  background-color: #f4ff47;
  color: #000;
  margin-top: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #dbdb18;
  }
`;

