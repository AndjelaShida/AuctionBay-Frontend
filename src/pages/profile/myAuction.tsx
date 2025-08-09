import { HomeIcon, UserIcon } from "../../icons/homeIcon";
import AuctionCard from "../../cards/auctionCard";
import {
  CircleButton,
  IconButton,
  ProfileImage,
} from "../../Base/Base.style";
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

const MyAuction: React.FC = () => {
  // 5 "in progress" kartica
  const inProgressCards = Array.from({ length: 5 }).map((_, index) => ({
    id: index + 1,
    key: `in-progress-${index}`,
    image: "/images/chair1.jpg",
    tag: "in progress",
    tagColor: "#FFFF8F",
    timeLeft: "30h",
    title: "Old chair",
    price: "65 €",
  }));

  // 13 "done" kartica (1 za prvi red, 6 za drugi, 6 za treći
  const doneCards = Array.from({ length: 13 }).map((_, index) => ({
    id: index + 6,
    key: `done-${index}`,
    image: "/images/chair1.jpg",
    tag: "done",
    tagColor: "#686868",
    timeLeft: "",
    title: "Old chair",
    price: "65 €",
  }));

  // Kombinacija za prvi red: 5 "in progress" + 1 "done"
  const firstRowCards = [...inProgressCards, doneCards[0]];

  // Drugi red: sledećih 6 "done"
  const secondRowCards = doneCards.slice(1, 7);

  // Treći red: još 6 "done"
  const thirdRowCards = doneCards.slice(7, 13);

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
          <NavButton2 to="/won">Won</NavButton2>
        </ButtonGroup>
        </TabBar>

        {/* Prvi red: 5 in progress + 1 done */}
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
              showAuctions={card.tag === "in progress"}
            />
          ))}
        </CardsGrid>

        {/* Drugi red: 6 done */}
        <CardsGrid>
          {secondRowCards.map((card) => (
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

        {/* Treći red: 6 done */}
        <CardsGrid>
          {thirdRowCards.map((card) => (
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

export default MyAuction;
