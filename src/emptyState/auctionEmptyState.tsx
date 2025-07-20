import { FiClock } from "react-icons/fi";
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
  ActionBar,
  BiddingHistory,
  BidText,
  ButtonPrice,
  Content,
  DetalisCard,
  ImageContainer,
  Inner,
  MetaCard,
  NavButton2,
  RightSide,
  Tag,
  TextDescription,
  Time,
  Title,
  Title2,
} from "../pages/auction/auction.style";
import { EmptyState, TextCaption, TextTitle } from "./auctionEmptyState.style";

const AuctionEmptyState: React.FC = () => {
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
            <CircleButton to="/addauctions">
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

      <Content>
        <Inner>
          <ImageContainer>
            <img
              src="/images/chair1.jpg"
              alt="chair"
              style={{
                borderRadius: "16px",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            ></img>
          </ImageContainer>

          <RightSide>
            <DetalisCard>
              <MetaCard>
                <Tag>Outbid</Tag>
                <Time>
                  24 <FiClock></FiClock>
                </Time>
              </MetaCard>
              <Title>Old wooden chair</Title>
              <TextDescription>
                Lorem ipsum dolor sit amet consectetur. Non porta posuere nulla
                augue luctus commodo parturient. Ante integer at elementum ipsum
                sodales leo dignissim pellentesque elit. Tempor blandit commodo
                commodo semper. Euismod et nunc tincidunt quisque quis amet
                mauris in eros.{" "}
              </TextDescription>

              <ActionBar>
                <BidText> Bid:</BidText>
                <ButtonPrice>40</ButtonPrice>
                <NavButton2 to="/auctionaddedbid">Place bid</NavButton2>
              </ActionBar>
            </DetalisCard>

            <BiddingHistory>
              <Title2>Bidding History(0)</Title2>

              <EmptyState>
                <TextTitle>No bids yet!</TextTitle>
                <TextCaption>
                  Place your bid to have a chance to get this item.
                </TextCaption>
              </EmptyState>
            </BiddingHistory>
          </RightSide>
        </Inner>
      </Content>
    </Wrapper>
  );
};

export default AuctionEmptyState;
