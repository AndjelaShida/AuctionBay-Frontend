import { CircleButton, IconButton, ProfileImage } from "../../Base/Base.style";
import AuctionCard from "../../cards/auctionCard";
import {
  auctionCardWinning,
  auctionCardOutbid,
} from "../../cards/auctionCardData";

import { HomeIcon, UserIcon } from "../../icons/homeIcon";

import {
  ButtonGroup,
  CardsGrid,
  Content,
  LeftNavigation,
  Navbar,
  NavButton,
  NavButton2,
  NavigationTab,
  RightNavigation,
  TabBar,
  TitleBar,
  Wrapper,
} from "./myAuction.style";

const Bidding: React.FC = () => {
  // Ovde biramo 2 winning i 3 outbid kartice
  const firstRowCards = [
    { ...auctionCardWinning[0], key: "win-1" },
    { ...auctionCardWinning[0], key: "win-2" },
    { ...auctionCardOutbid[0], key: "outbid-1" },
    { ...auctionCardOutbid[0], key: "outbid-2" },
    { ...auctionCardOutbid[0], key: "outbid-3" },
  ];

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

      <TitleBar>Hello Jamal Reces!</TitleBar>

      <TabBar>
        <ButtonGroup>
          <NavButton2 to="/myauction">My auction</NavButton2>
          <NavButton2 to="/bidding">Bidding</NavButton2>
          <NavButton2 to="/won">Won</NavButton2>
        </ButtonGroup>
      </TabBar>

      <Content>
        {/* 2 winning 3 outbid kartice */}
        <CardsGrid>
          {firstRowCards.map((card) => (
            <AuctionCard
              key={card.key}
              auctionId={card.id}
              image={card.image}
              tag={card.tag}
              tagColor={card.tagColor}
              timeLeft={card.timeLeft}
              title={card.title}
              price={card.price}
            />
          ))}
        </CardsGrid>
      </Content>
    </Wrapper>
  );
};

export default Bidding;
