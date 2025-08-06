import React, { useState } from "react";
import {
  BottomBar,
  ButtonCancel,
  ButtonSave,
  FormContainer,
  Header,
  Input,
  InputGroup,
  Inputs,
  MutedLink,
  MutedLink2,
  NameAndSurnameContainer,
  Wrapper,
} from "./profileSettings.style";

const ProfileSettings: React.FC = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(true);

  const handleSave = () => {
    setIsOverlayOpen(false);
    console.log("Change saved");
  };

  const handleCancel = () => {
    setIsOverlayOpen(false);
    console.log("Changes discarded");
  };

  if (!isOverlayOpen) return null; 

  return (
    <Wrapper>
      <Header>
        Profile settings
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
          <span>Cancel</span>
        </ButtonCancel>

        <ButtonSave onClick={handleSave}>
          <span>Save change</span>
        </ButtonSave>
      </BottomBar>
    </Wrapper>
  );
};

export default ProfileSettings;
