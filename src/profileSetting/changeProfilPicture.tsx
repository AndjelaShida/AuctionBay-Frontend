import { useState } from "react";
import {
    BottomBar,
  Button,
  ButtonCancel,
  ButtonSave,
  CancelText,
  Header,
  Inner,
  ProfilImage,
  SaveText,
  TextChange,
  Wrapper,
} from "./changeProfilPicture.style";

interface Props {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}
const ChangeProfilPicture: React.FC<Props> = ({ onClick, disabled}) => {

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
        <TextChange>Change profile picture</TextChange>
      </Header>

      <Inner>
        <ProfilImage>
          <img src="/images/profile.png" alt="profile picture"></img>
        </ProfilImage>

        <Button onClick={onClick} disabled={disabled}>       
                Upload new picture 
        </Button>
      </Inner>

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
export default ChangeProfilPicture;
