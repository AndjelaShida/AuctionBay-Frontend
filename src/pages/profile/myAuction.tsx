import {
  Wrapper,
  Navbar,
  LeftGroup,
  RightGroup,
  NavButton,
  IconButton,
  Title,
  NavButton2,
  ButtonGroup,
  CardsGrid,
  TabBar,
} from "./myAuction.style";
import { HomeIcon, UserIcon } from "../../icons/homeIcon";
import AuctionCard from "../../cards/auctionCard";

const MyAuction: React.FC = () => {
  // 5 "in progress" kartica
  const inProgressCards = Array.from({ length: 5 }).map((_, index) => ({
    key: `in-progress-${index}`,
    image: "/images/chair1.jpg",
    tag: "in progress",
    tagColor: "#FFFF8F",
    timeLeft: "30h",
    title: "Old chair",
    price: "65 €",
  }));

  // 13 "done" kartica (1 za prvi red, 6 za drugi, 6 za treći)
  const doneCards = Array.from({ length: 13 }).map((_, index) => ({
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
        <LeftGroup>
          <IconButton to="#">
            <img
              src="images/Left navigation.png"
              alt="left navigation"
              style={{
                width: 70,
                height: 70,
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </IconButton>

          <NavButton to="/auctions">
            <HomeIcon color="#000" />
            Auction
          </NavButton>

          <NavButton to="/profile">
            <UserIcon color="#000" />
            Profile
          </NavButton>
        </LeftGroup>

        <RightGroup>
          <IconButton to="/create">
            <div
              style={{
                backgroundColor: "#f4ff47",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
            </div>
          </IconButton>

          <IconButton to="/profile">
            <img
              src="/images/profile.png"
              alt="profile"
              style={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </IconButton>
        </RightGroup>
      </Navbar>

      <Title>Hello Jamal Reces! </Title>

      <TabBar>
        <ButtonGroup>
          <NavButton2 to="/myauction">My auction</NavButton2>
          <NavButton2 to="/bidding">Bidding</NavButton2>
          <NavButton2 to="/Won ">Won</NavButton2>
        </ButtonGroup>

        {/* Prvi red: 5 in progress + 1 done */}
        <CardsGrid>
          {firstRowCards.map((card) => (
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

        {/* Drugi red: 6 done */}
        <CardsGrid>
          {secondRowCards.map((card) => (
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

        {/* Treći red: 6 done */}
        <CardsGrid>
          {thirdRowCards.map((card) => (
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
