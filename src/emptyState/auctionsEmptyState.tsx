import {
  CircleButton,
  IconButton,
  ProfileImage,
} from "../Base/Base.style";
import { HomeIcon, UserIcon } from "../icons/homeIcon";
import {
  ButtonGroup,
  LeftNavigation,
  Navbar,
  NavButton,
  NavButton2,
  NavigationTab,
  RightNavigation,
  TabBar,
   TitleBar,
   Wrapper
} from "../pages/profile/myAuction.style";
import {
  Content,
  EmptyState,
  TabContent,
  TextCaption,
  TextTitle,
} from "./EmptyState.style";

const AuctionsEmptyState: React.FC = () => {
  return (
    <Wrapper>
           <Navbar>
             
               <LeftNavigation>
                 <IconButton to="#">
                   <img src="images/Left navigation.png" alt="left navigation" />
                 </IconButton>
     
                 <NavigationTab>
                   <NavButton to="/auctions">
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
     
                 <ProfileImage to="/profilepopup">
                   <img src="/images/profile.png" alt="Profile"></img>
                 </ProfileImage>
               </RightNavigation>
       
           </Navbar>
     
     <TitleBar>
           Hello Jamal Reces!
     </TitleBar>
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
            <TextTitle>Oh no, no auctions yet!</TextTitle>
            <TextCaption>
To add new auction, click "+" button in navigation bar or wait for other users to add new auctions.            </TextCaption>
          </EmptyState>
        </TabContent>
      </Content>
    </Wrapper>
  );
};

export default AuctionsEmptyState;
