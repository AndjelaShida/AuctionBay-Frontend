//PAGE FOR ONE AUCTION

import { FiClock } from "react-icons/fi";
import { CircleButton, IconButton, ProfileImage } from "../../Base/Base.style";
import { HomeIcon, UserIcon } from "../../icons/homeIcon";
import {
  ActionBar,
  Avatar,
  BiddingHistory,
  BidText,
  ButtonPrice,
  Content,
  DetalisCard,
  ImageContainer,
  Inner,
  LeftCell,
  MetaCard,
  Name,
  NavButton2,
  Price,
  RightCell,
  RightSide,
  Table,
  TableRow,
  Tag,
  TextDate,
  TextDescription,
  Time,
  Title,
  Title2,
} from "./auction.style";
import {
  LeftNavigation,
  Navbar,
  NavButton,
  NavigationTab,
  RightNavigation,
  Wrapper,
} from "../profile/myAuction.style";

const Auction: React.FC = () => {
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

      <Content>
        <Inner>
          <ImageContainer>
            <img src="/images/chair1.jpg" alt="chair"></img>
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
              <Title2>Bidding History(2)</Title2>

              <Table>
                <TableRow>
                  <LeftCell>
                    <Avatar src="/images/profile2.jpg" alt="profilepic" />
                    <Name>Joanes Boyl</Name>
                  </LeftCell>

                  <RightCell>
                    <TextDate>14:31 22.6.2023</TextDate>
                    <Price>32€</Price>
                  </RightCell>
                </TableRow>

                <TableRow>
                  <LeftCell>
                    <Avatar src="/images/profile3.jpg" alt="profilepic" />
                    <Name>Bigi Smols</Name>
                  </LeftCell>

                  <RightCell>
                    <TextDate>14:31 22.6.2023</TextDate>
                    <Price>29€</Price>
                  </RightCell>
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
