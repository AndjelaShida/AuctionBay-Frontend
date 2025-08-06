import styled from "styled-components";
import { devices } from "../../styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 533px;
  height: 647px;
  border-radius: 16px;
  padding: 16px;
  gap: 16px;
  background-color: #ffffff;

  @media ${devices.mobile} {
    width: 328px;
    border-radius: 16px;
    gap: 16px;
    background-color: #ffffff;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 501px;
  height: 28px;
  gap: 16px;

  span {
    width: 501px;
    height: 28px;
    font-weight: 700;
    font-family: "Inter", sans-serif;
    font-size: 23px;
    line-height: 120%;
    color: #000000;
  }
  @media ${devices.mobile} {
    width: 296px;
    gap: 16px;
  }
`;

export const Picture = styled.div`
  width: 501px;
  height: 168px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 32px;
  gap: 8px;
  background-color: #f6f6f4;

  @media ${devices.mobile} {
    width: 296px;
    gap: 16px;
    border-radius: 16px;
    gap: 8px;
    background-color: #f6f6f4;
  }
`;

export const PictureButton = styled.div`
  width: 114px;
  height: 40px;
  min-height: 40px;
  display: flex;
  flex-direction: column;
  justify-conten: center;
  align-items: center;
  border-radius: 16px;
  border: 1px solid #272d2d;
  padding: 8px 16px;
  gap: 8px;

  font-weight: 500;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #071015;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 501px;
  height: 331px;
  gap: 16px;

  @media ${devices.mobile} {
    width: 296px;
    gap: 16px;
  }
`;

export const Inputs = styled.div`
  /*deo bez placeholdera*/
  display: flex;
  flex-direction: column;
  width: 501px;
  height: 72px;
  gap: 8px;

  font-weight: 300;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #071015;

  @media ${devices.mobile} {
    width: 296px;
    gap: 8px;
  }
`;

export const InputGroup = styled.div`
  /*ceo deo sa titlom*/
  width: 501px;
  height: 331px;
  gap: 16px;

  font-weight: 300;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #071015;
`;

export const Input = styled.input`
  /* okvir oko placeholdera*/
  display: flex;
  flex-direction: column;
  width: 242.5px;
  height: 40px;
  min-height: 40px;
  border-radius: 16px;
  border: 1px solid #dde9e6;
  gap: 16px;
  padding: 8px 16px;
  background-color: #ffffff;

  @media ${devices.mobile} {
    width: 296px;
    gap: 8px;
  }
`;

export const InputDescription = styled.input`
  display: flex;
  flex-direction: column;
  width: 501px;
  height: 123px;
  min-height: 40px;
  border-radius: 16px;
  border: 1px solid #dde9e6;
  gap: 16px;
  padding: 8px 16px;
  background-color: #ffffff;


  @media ${devices.mobile} {
    width: 296px;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 16px;
    border: 1px solid #dde9e6;
  }
`;

export const BottomInner = styled.div`
  display: flex;
  flex-direction: row;
  width: 501px;
  height: 72px;
  gap: 16px;

  @media ${devices.mobile} {
    width: 296px;
    gap: 16px;
  }
`;

export const InputLeft = styled.div`
  display: flex;
  flex-direction: row;
  width: 242.5px;
  height: 72px;
  gap: 8px;

  @media ${devices.mobile} {
    width: 140px;
    gap: 8px;
  }
`;

export const InputGroupBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 242.5px;
  height: 72px;
  gap: 8px;
  position: relative;
  width: 100%;

  font-weight: 300;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #071015;
`;

export const InputRight = styled.div`
  display: flex;
  flex-direction: row;
  width: 242.5px;
  height: 72px;
  gap: 8px;
  @media ${devices.mobile} {
    width: 140px;
    gap: 8px;
  }
`;

export const BottomBar = styled.div`
  width: 501px;
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
  width: 85px;
  height: 40px;
  min-height: 40px;
  border-radius: 16px;
  background-color: #edf4f2;
  gap: 8px;
  display: flex;
  flex-direction: row;
  padding: 8px 16px;

  span {
    width: 53px;
    height: 24px;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 16px;
    leading-trim: NONE;
    line-height: 24px;
    letter-spacing: 0%;
    color: #071015;
  }
`;

export const SubmitButton = styled.button`
  width: 132px;
  height: 40px;
  min-height: 40px;
  border-radius: 16px;
  background-color: #f4ff47;
  gap: 8px;
  display: flex;
  flex-direction: row;
  padding: 8px 16px;

  span {
    width: 100px;
    height: 24px;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 16px;
    leading-trim: NONE;
    line-height: 24px;
    letter-spacing: 0%;
    color: #071015;
  }
`;

export const IconInput = styled.div`
  width: 16px;
  height: 20px;
  padding: 4px;
  gap: 8px;
  position: absolute;
  right: 12px;
  top: 70%;
  cursor: pointer;
  color: #74817f;
  font-size: 18px;
`;
