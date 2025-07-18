import { useState } from "react";
import {
  BottomBar,
  ClockIconWrapper,
  DiscardButton,
  EditButton,
  Header,
  Inner,
  InputEndDate,
  InputGroupDescription,
  InputGroupEndDate,
  InputGroupTitle,
  InputTitle,
  Picture,
  StyledClocksIcon,
  StyledTrashIcon,
  TextArea,
  TrashIconWrapper,
  Wrapper,
} from "./editAuction.style";


const EditAuction: React.FC = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(true);

  const handleSave = () => {
    setIsOverlayOpen(false); // Ova linija zatvara "overlay"
    console.log("Change saved");
  };

  const handleCancel = () => {
    setIsOverlayOpen(false); // Zatvaranje na Cancel
    console.log("Changes discarded");
  };

  if (!isOverlayOpen) return null;

  return (
    <Wrapper>
      <Header>Edit auction</Header>

      <Picture>
        <img src="/images/editauction.jpg" alt="editauctions"></img>
        <TrashIconWrapper>
          <StyledTrashIcon />
        </TrashIconWrapper>
      </Picture>

      <Inner>
        <InputGroupTitle>
          <label htmlFor="title">Title</label>
          <InputTitle
            id="title" 
            type="text"
            placeholder="Rode vintage microphone MH55"
          ></InputTitle>
        </InputGroupTitle>

        <InputGroupDescription>
          <label htmlFor="description">Description</label>
          <TextArea
            id="description"
            placeholder="Used only for one production... comes in original box, very nice and vintage microphone with all the new features."
          />
        </InputGroupDescription>

        <InputGroupEndDate>
          <label htmlFor="endDate">End date</label>
          <InputEndDate id="endDate" type="text" placeholder="23.9.2023" />
          <ClockIconWrapper>
          <StyledClocksIcon />
        </ClockIconWrapper>
        </InputGroupEndDate>
      </Inner>

      <BottomBar>
        <DiscardButton onClick={handleCancel}>Discard change</DiscardButton>

        <EditButton onClick={handleSave}>Edit auction</EditButton>
      </BottomBar>
    </Wrapper>
  );
};
export default EditAuction;
