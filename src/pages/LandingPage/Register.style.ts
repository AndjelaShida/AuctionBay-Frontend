import { Link } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../../styles/media";

export const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1440px;
  background-color: #f6f6f4;

  @media ${devices.mobile} {
    width: 100%
  
  }
`;

export const RegisterLeft = styled.div`
  max-width: 968px;
  width: 100%;
  background-color: #f6f6f4;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }

  @media ${devices.mobile} {
    display: none;
  }
`;

export const RegisterRight = styled.div`
  max-width: 472px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;

  @media ${devices.mobile} {
    width: 100%;
    gap: 4px;
  }
`;

export const RightSide = styled.div`
  width: 464px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 8px;

  @media ${devices.mobile} {
    width: 100%;
    gap: 4px;
    padding: 4px;
  }
`;

export const Container = styled.div`
  width: 448px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 64px 32px;
  border-radius: 32px;
  background-color: #ffffff;

  @media ${devices.mobile} {
    width: 100%;
    padding: 32px 16px;
  }
`;

export const Login = styled.div`
  max-width: 384px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center ;
  align-items: center;s
  gap: 64px;

  @media ${devices.mobile} {
  width: 100%;
  gap: 32px;
  }
 
`;

export const TitleContainer = styled.div`
  width: 185px;
  height: 276px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${devices.mobile} {
    width: 100%;
    gap: 4px;
  }
`;

export const TitleHello = styled.h2`
  width: 91px;
  height: 38px;
  font-size: 32px;
  font-weight: 700;
  color: #071015;
  line-height: 120%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitlePlease = styled.div`
  width: 185px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #071015;
`;

export const Subtitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #071015;
  text-align: center;

  strong {
    font-weight: 900;
    cursor: pointer;
  }
`;

export const FormContainer = styled.form`
  width: 384px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media ${devices.mobile} {
    width: 100%;
    gap: 16px;
  }
`;

export const Inputs = styled.div`
  width: 384px;
  height: 72px;
  display: flex;
  gap: 16px;

  @media ${devices.mobile} {
    width: 100%;
    gap: 8px;
  }
`;

export const InputGroup = styled.div`
  width: 184px;
  height: 72px;
  gap: 8px;
  display: flex;
  flex-direction: column;

  label {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: #071015;
  }

  @media ${devices.mobile} {
    width: 100%;
    gap: 4px;
    font-size: 8px;
  }
`;

export const InputSmall = styled.input`
  width: 184px;
  height: 40px;
  min-height: 40px;
  border-radius: 16px;
  border: 1px solid #dde9e6;
  background: #ffffff;
  padding: 8px 16px;
  font-size: 16px;
  font-family: "Inter", sans-serif;
   

  &::placeholder {
    color: #74817f;
    font-size: 16px;
    font-weight: 300;
    line-height: ;
  }

  &:focus {
    border-color: #333;
    outline: none;
  }

    @media ${devices.mobile} {
    width: 116px;
  padding: 4px 8px;
  font-size:8px;
  }


`;

export const Input = styled.input`
  width: 384px;
  height: 40px;
  min-height: 40px;
  padding: 8px 16px 8px 16px;
  border-radius: 16px;
  border: 1px solid #dde9e6;
  background-color: #ffffff;


  &:focus {
    border-color: #333;
    outline: none;
  }

  &::placeholder {
    color: #74817f;
    font-size: 16px;
    font-weight: 300;
    line-height: ;
  }

    @media ${devices.mobile} {
    width: 312px;
    padding: 4px 8px;
    gap: 4px;
    font-size: 8px;
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 384px;
  height: 72px;
  gap: 8px;

  button {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }

    @media ${devices.mobile} {
    width: 100%;
    gap: 4px;
   
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 384px;
  height: 24px;
  color: #071015;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
`;

export const SubmitButton = styled.button`
  width: 384px;
  height: 40px;
  min-height: 40px;
  padding: 8px 16px 8px 16px;
  gap: 8px;
  border-radius: 16px;
  background-color: #f4ff47;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #dbdb18;
  }

    @media ${devices.mobile} {
    width: 312px;
  padding: 4px 8px;
  }
`;

export const MutedLink = styled(Link)`
  color: #071015;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #333;
  }


`;

export const IconButton = styled(Link)`
  width: 64px;
  height: 64px;
  border-radius: 100px;
  background-color: #f4ff47;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 16px;
  color: black;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;


`;

export const PasswordToggleIcon = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  opacity: 1;
  padding-top: 4px;
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    width: 16px;
    height: 20px;
    transform: rotate(0deg);
    color: #74817f;
  }
`;
