//PAGE FOR ONE AUCTION

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
} from "../../Base/Base.style";
import { HomeIcon, UserIcon } from "../../icons/homeIcon";
import {
  ActionBar,
  Avatar,
  BiddingHistory,
  BidText,
  Button,
  Content,
  DetalisCard,
  ImageContainer,
  Inner,
  InputBidPrice,
  MetaCard,
  Name,
  Price,
  RightSide,
  RightSideData,
  Table,
  TableRow,
  Tag,
  TextDate,
  TextDescription,
  Time,
  Title,
  Title2,
} from "./auction.style";

const Auction: React.FC = () => {
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
            <CircleButton to="/create">
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
                <InputBidPrice>40</InputBidPrice>
                <Button>Place bid</Button>
              </ActionBar>
            </DetalisCard>

            <BiddingHistory>
              <Title2>Bidding History(2)</Title2>

              <Table>
            
                <TableRow>
                  <Avatar src="/images/profile2.jpg" alt="profilepic"></Avatar>
                  <Name>Joanes Boyl</Name>

                  <RightSideData>
                    <TextDate>14:31 22.6.2023</TextDate>
                    <Price>32€</Price>
                  </RightSideData>
                </TableRow>

                <TableRow>
                  <Avatar src="/images/profile3.jpg" alt="profilepic"></Avatar>
                  <Name>Bigi Smols</Name>

                  <RightSideData>
                    <TextDate>14:31 22.6.2023</TextDate>
                    <Price>29€</Price>
                  </RightSideData>
                </TableRow>
              </Table>
            </BiddingHistory>
          </RightSide>
        </Inner>
      </Content>
    </Wrapper>
  );
};

export default Auction;
