import {
  CircleButton,
  IconButton,
  LeftNavigation,
  Navbar,
  NavbarContent,
  NavButton,
  NavigationTab,
  ProfileImage,
  RightNavigation,
  Wrapper,

} from "../Base/Base.style";
import { HomeIcon, UserIcon } from "../icons/homeIcon";
import {
  ButtonGroup,
  NavButton2,
  TabBar,
  Title
} from "../pages/profile/myAuction.style";
import {
  Content,
  EmptyState,
  TabContent,
  TextCaption,
  TextTitle,

} from "./EmptyState.style";

const ProfilEmptyState: React.FC = () => {
  return (
    <Wrapper>
      <Navbar>
        <NavbarContent>
          <LeftNavigation>
            <IconButton to="#">
              <img src="images/Left navigation.png" alt="left navigation" />
            </IconButton>

            <NavigationTab>
              <NavButton to="/auction">
                <HomeIcon />
                Auction
              </NavButton>

              <NavButton to="/profile">
                <UserIcon />
                Profil
              </NavButton>
            </NavigationTab>
          </LeftNavigation>

          <RightNavigation>
            <CircleButton to="/addauction">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </CircleButton>

            <ProfileImage to="/profile">
              <img src="/images/profile.png" alt="Profile"></img>
            </ProfileImage>
          </RightNavigation>
        </NavbarContent>
      </Navbar>

      <Title>Hello Jamal Reces! </Title>
      <Content>
        <TabBar>
          <ButtonGroup>
            <NavButton2 to="/myauction">My auction</NavButton2>
            <NavButton2 to="/bidding">Bidding</NavButton2>
            <NavButton2 to="/Won ">Won</NavButton2>
          </ButtonGroup>
        </TabBar>

        <TabContent>
          <EmptyState>
            <TextTitle>On no, no auctions added!</TextTitle>
            <TextCaption>
              To add new auction click “+” button in navigation bar and new
              auctions wil be added here!
            </TextCaption>
          </EmptyState>
        </TabContent>
      </Content>
    </Wrapper>
  );
};

export default ProfilEmptyState;
