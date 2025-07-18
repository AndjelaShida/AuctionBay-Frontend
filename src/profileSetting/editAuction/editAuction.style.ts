import { FaTrash } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 533px;
  height: 647px;
  border-radius: 16px;
  padding: 16px;
  gap: 16px;
  background-color: #ffffff;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 501px;
  height: 28px;
  gap: 16px;

  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-style: bold;
  font-size: 23px;
  line-height: 120%;
  color: #000000;
`;

export const Picture = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 501px;
  height: 168px;
  border-radius: 16px;
  gap: 8px;
  padding: 16px;
  background-color: #f6f6f4;

  img {
    width: 501px;
    height: 168px;
    border-radius: 16px;
    object-fit: cover;
  }
`;

export const TrashIconWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 40px;
  min-height: 40px;
  border-radius: 16px;
  gap: 8px;
  padding: 8px 16px;
  background-color: #272d2d;
  cursor: pointer;
`;

export const StyledTrashIcon = styled(FaTrash)`
  color: #ffffff;
  width: 16px;
  height: 16px;
`;

export const Inner = styled.div`
  /*CEO srednji ceo*/
  display: flex;
  flex-direction: column;
  width: 501px;
  height: 331px;
  gap: 16px;
`;

export const InputGroupTitle = styled.div`
  /*deo sa tekstom i placeholderom*/
  display: flex;
  flex-direction: column;
  width: 501px;
  height: 72px;
  gap: 8px;

  label {
    /*naslovi: title, description i end date*/
    width: 501px;
    height: 24px;
    font-family: "Inter", sans-serif;
    font-weight: 300;
    font-style: light;
    font-size: 16px;
    line-height: 24px;
    color: #071015;
  }
`;

export const InputGroupDescription = styled.div`
  /*deo sa tekstom i placeholderom*/
  display: flex;
  flex-direction: column;
  width: 501px;
  height: 155px;
  gap: 8px;

  label {
    /*naslovi: title, description i end date*/
    width: 501px;
    height: 24px;
    font-family: "Inter", sans-serif;
    font-weight: 300;
    font-style: light;
    font-size: 16px;
    line-height: 24px;
    color: #071015;
  }
`;

export const InputGroupEndDate = styled.div`
  /*deo sa tekstom i placeholderom*/
  position: relative ;
  display: flex;
  flex-direction: column;
  width: 501px;
  height: 72px;
  gap: 8px;

 
    height: 24px;
    font-family: "Inter", sans-serif;
    font-weight: 300;
    font-style: light;
    font-size: 16px;
    line-height: 24px;
    color: #071015;
  }
`;

export const InputTitle = styled.input`
  /*deo samo sa placeholderom*/
  display: flex;
  flex-direction: row;
  width: 501px;
  height: 40px;
  gap: 8px;
  border-radius: 16px;
  border: 1px solid #dde9e6;
  padding: 8px 16px;
  background-color: #ffffff;

  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-style: medium;
  font-size: 16px;
  line-height: 24px;
  color: #071015;
`;

export const InputEndDate = styled.input`
  /*deo samo sa placeholderom*/
  display: flex;
  flex-direction: row;
  width: 501px;
  height: 40px;
  min-height: 40px;
  gap: 8px;
  border-radius: 16px;
  border: 1px solid #dde9e6;
  padding: 8px 16px;
  background-color: #ffffff;

  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-style: medium;
  font-size: 16px;
  line-height: 24px;
  color: #071015;
`;

export const TextArea = styled.textarea`
  /*description placeholder*/
  width: 501px;
  height: 123px;
  border-radius: 16px;
  border: 1px solid #dde9e6;
  padding: 8px 16px;
  background-color: #ffffff;

  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  resize: none;
`;

export const BottomBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 501px;
  height: 40px;
  gap: 16px;

`;

export const DiscardButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 40px;
  min-height: 40px;
  border-radius: 16px;
  padding: 8px 16px;
  background-color: #edf4f2;

  width: 128px;
  height: 24px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-style: medium;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;
  color: #071015;
`;

export const EditButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 123px;
  height: 40px;
  min-height: 40px;
  border-radius: 16px;
  padding: 8px 16px;
  background-color: #272d2d;

  width: 91px;
  height: 24px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-style: medium;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;
  color: #ffffff;
`;

export const ClockIconWrapper = styled.div`
  position: absolute;
  top: 50px;
  right: 40px;
  display: flex;
  flex-direction: row;
  width: 16px;
  height: 16px;
  gap: 8px;
  padding: 4px;
`;

export const StyledClocksIcon = styled(FiClock)`
  width: 16px;
  height: 16px;
  color: #071015;
`;
