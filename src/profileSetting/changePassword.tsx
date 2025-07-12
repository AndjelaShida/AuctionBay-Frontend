import { useState } from "react";
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
  InputWrapper,
  PasswordToggleIcon,
  SaveText,
  Title,
  Wrapper,
} from "./changePassword.style";
import { FiEye, FiEyeOff } from "react-icons/fi";

const ChangePassword: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

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
        <Title>Change password</Title>
      </Header>

      <FormContainer>
        <Inputs>
          <InputGroup>
            <label htmlFor="currentPassword">Current password</label>
            <InputWrapper>
              <Input
                id="currentPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Enter current password"
              />
              <PasswordToggleIcon onClick={togglePassword}>
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </PasswordToggleIcon>
            </InputWrapper>
          </InputGroup>
        </Inputs>

        <Inputs>
          <InputGroup>
            <label htmlFor="newtPassword">New password</label>
            <InputWrapper>
              <Input
                id="newtPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
              />
              <PasswordToggleIcon onClick={togglePassword}>
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </PasswordToggleIcon>
            </InputWrapper>
          </InputGroup>
        </Inputs>

        <Inputs>
          <InputGroup>
            <label htmlFor="repeatNewPassword">Repeat new password</label>
            <InputWrapper>
              <Input
                id="repeatNewPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Repeat new password"
              />
              <PasswordToggleIcon onClick={togglePassword}>
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </PasswordToggleIcon>
            </InputWrapper>
          </InputGroup>
        </Inputs>
      </FormContainer>

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
export default ChangePassword;
