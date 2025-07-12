import React, { useState } from "react";
import {
  BottomBar,
  ButtonCancel,
  ButtonSave,
  CancelText,
  FormContainer,
  Header,
  Input,
  InputGroup,
  Inputs,
  MutedLink,
  MutedLink2,
  NameAndSurnameContainer,
  SaveText,
  Title,
  Wrapper,
} from "./profileSettings.style";

const ProfileSettings: React.FC = () => {
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
      <Header>
        <Title>Profile settings</Title>
      </Header>

      <FormContainer>
        <NameAndSurnameContainer>
          <Inputs>
            <InputGroup>
              <label htmlFor="name">Name</label>
              <Input id="name" type="text" placeholder="Jamal" />
            </InputGroup>
          </Inputs>

          <Inputs>
            <InputGroup>
              <label htmlFor="surname">Surname</label>
              <Input id="surname" type="text" placeholder="Races" />
            </InputGroup>
          </Inputs>
        </NameAndSurnameContainer>

        <Inputs>
          <InputGroup>
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              type="text"
              placeholder="jamal.races@gamilc.com"
            />
          </InputGroup>
        </Inputs>
      </FormContainer>

      <MutedLink to="/changepassword">Change password</MutedLink>
      <MutedLink2 to="/changeprofilepicture">Change profile picture</MutedLink2>

      <BottomBar>
        <ButtonCancel onClick={handleCancel}>
          <CancelText>Cancel</CancelText>
        </ButtonCancel>

        <ButtonSave onClick={handleSave}>
          <SaveText>Save change</SaveText>
        </ButtonSave>
      </BottomBar>
    </Wrapper>
  );
};

export default ProfileSettings;
