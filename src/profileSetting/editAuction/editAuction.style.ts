import { FaTrash } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { styled } from "styled-components";
import { devices } from "../../styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 533px;
  border-radius: 16px;
  padding: 16px;
  gap: 16px;
  background-color: #ffffff;

  @media ${devices.mobile} {
    width: 296px;
 
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 501px;
  height: 28px;
  gap: 16px;
  background-color: #ffffff;


  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 23px;
  line-height: 120%;
  color: #000000;

  @media ${devices.mobile} {
    width: 296px;
    gap: 8px;
  }
`;

export const Picture = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 501px;
  height: 168px;
  border-radius: 16px;
  gap: 8px;
  background-color: #f6f6f4;

  img {
    width: 501px;
    height: 168px;
    border-radius: 16px;
    object-fit: cover;
  }

  @media ${devices.mobile} {
    width: 296px;
    height: 168px;

    img {
      width: 296px;
      height: 168px;
    }
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

  @media ${devices.mobile} {
    width: 48px;
    height: 40px;
 
  }
`;

export const StyledTrashIcon = styled(FaTrash)`
  color: #ffffff;
  width: 16px;
  height: 16px;
`;

/*CEO srednji ceo*/
export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 501px;
  height: 347px;
  gap: 16px;

  @media ${devices.mobile} {
    width: 296px;

  }
`;

export const InputGroupTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 501px;
  height: 72px;
  gap: 8px;

  label {
    width: 501px;
    height: 24px;
    font-family: "Inter", sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: #071015;
  }

  @media ${devices.mobile} {
    width: 296px;
    height: 72px;
    gap: 8px;
  }
`;

export const InputGroupDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 501px;
  height: 155px;
  gap: 8px;
  color: red;

  label {
    width: 501px;
    height: 24px;
    font-family: "Inter", sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: #071015;
  }

  @media ${devices.mobile} {
    width: 296px;
    height: 155px;
    gap: 8px;
  }
`;

export const InputDescription = styled.textarea`
  width: 501px;
  height: 123px;
  border-radius: 16px;
  padding: 8px 16px;

  &::placeholder {
    font-family: "Inter", sans-serif;
    color: #071015;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  @media ${devices.mobile} {
    width: 296px;
    height: 123px;
  }
`;

export const InputTitle = styled.input`
  display: flex;
  flex-direction: row;
  width: 501px;
  height: 40px;
  gap: 8px;
  border-radius: 16px;
  border: 1px solid #dde9e6;
  padding: 8px 16px;
  background-color: #ffffff;

  &::placeholder {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #071015;
  }
  @media ${devices.mobile} {
    width: 264px;
    height: 24px;
  }
`;

export const InputGroupEndDate = styled.div`
  position: relative ;
  display: flex;
  flex-direction: column;
  width: 501px;
  height: 72px;
  gap: 8px;

label {
    font-family: "Inter", sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: #071015;
}

    @media ${devices.mobile} {
    width: 296px;
    height: 72px;
    gap: 16px;
  }
  }
`;

export const InputEndDate = styled.input`
  display: flex;
  flex-direction: row;
  width: 501px;
  height: 40px;
  gap: 8px;
  border-radius: 16px;
  border: 1px solid #dde9e6;
  padding: 8px 16px;
  background-color: #ffffff;

  @media ${devices.mobile} {
    width: 296px;
    height: 40px;
    padding: 8px 16px;
  }

  &::placeholder {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #071015;

    @media ${devices.mobile} {
      width: 296px;
      height: 40px;
      padding: 8px 16px;
    }
  }
`;

export const BottomBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 501px;
  height: 40px;
  gap: 16px;

  @media ${devices.mobile} {
    width: 296px;
    height: 40px;
    gap: 16px;
  }
`;

export const DiscardButton = styled.button`
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

  span {
    width: 128px;
    height: 24px;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0%;
    color: #071015;
  }
`;

export const EditButton = styled.button`
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
  color: #ffffff;

  span {
    width: 91px;
    height: 24px;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0%;
    color: #ffffff;
  }
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

  @media ${devices.mobile} {
    width: 16px;
    height: 20px;
    padding: 4px 8px;
  }
`;

export const StyledClocksIcon = styled(FiClock)`
  width: 16px;
  height: 16px;
  color: #071015;
`;

/*STYLE FOR EDIT AUCTION WHITOUT IMAGE*/

export const ButtonAddImg = styled.button`
  display: flex;
  flex-direction: row;
  width: 114px;
  height: 40px;
  min-height: 40px;
  border-radius: 16px;
  padding: 8px 16px;
  border: 1px solid #272d2d;

  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;
  color: #071015;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoPicture = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 501px;
  border-radius: 16px;
  padding: 32px;
  gap: 8px;
  background-color: #f6f6f4;

  @media ${devices.mobile} {
    width: 296px;
    height: 168px;
    padding: 32px;
    gap: 8px;
    border-radius: 16px;
  }
`;
