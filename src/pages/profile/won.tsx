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
import AuctionCard from "../../cards/auctionCard";
import { auctionCardDone } from "../../cards/auctionCardData";
import { HomeIcon, UserIcon } from "../../icons/homeIcon";
import { ButtonGroup, CardsGrid, NavButton2, TabBar, Title } from "./won.style";

const MyAuction: React.FC = () => {
  const doneCards = Array.from({ length: 11 }).map((_, index) => ({
    ...auctionCardDone[0],
    key: `done-${index}`,
  }));

  const firstRow = doneCards.slice(0, 6);
  const secondRow = doneCards.slice(6, 11);

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

      <Title>Hello Jamal Reces! </Title>

      <TabBar>
        <ButtonGroup>
          <NavButton2 to="/myauction">My auction</NavButton2>
          <NavButton2 to="/bidding">Bidding</NavButton2>
          <NavButton2 to="/Won ">Won</NavButton2>
        </ButtonGroup>

        <CardsGrid>
          {firstRow.map((card) => (
            <AuctionCard
              key={card.key}
              image={card.image}
              tag={card.tag}
              tagColor={card.tagColor}
              timeLeft={card.timeLeft}
              title={card.title}
              price={card.price}
            />
          ))}
        </CardsGrid>

        <CardsGrid>
          {secondRow.map((card) => (
            <AuctionCard
              key={card.key}
              image={card.image}
              tag={card.tag}
              tagColor={card.tagColor}
              timeLeft={card.timeLeft}
              title={card.title}
              price={card.price}
            />
          ))}
        </CardsGrid>
      </TabBar>
    </Wrapper>
  );
};

export default MyAuction;
