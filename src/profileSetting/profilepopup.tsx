
import { useNavigate } from "react-router-dom";
import { LogOutButton, ProfileWrapper,
     SettingButton } from "./profilePopUp.style";
import { FiSettings } from "react-icons/fi";

const ProfilePopUp: React.FC = () => {

  const navigate = useNavigate();

  const handleProfil = () => {
    navigate("/profilepopup");
  };

    const handleLogin = () => {
    navigate("/#");
  };

    return (
<ProfileWrapper>
    <SettingButton onClick={handleProfil}>
       <FiSettings size={16} /> Profile setting
        </SettingButton>

        <LogOutButton onClick={handleLogin}>
            Log out
        </LogOutButton>
    
</ProfileWrapper>
    );
};
export default ProfilePopUp ;