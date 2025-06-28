import AuctionCard from "../../cards/auctionCard";
import { auctionCardDone } from "../../cards/auctionCardData";
import { HomeIcon, UserIcon } from "../../icons/homeIcon";
import {
  ButtonGroup,
  CardsGrid,
  IconButton,
  LeftGroup,
  Navbar,
  NavButton,
  NavButton2,
  RightGroup,
  TabBar,
  Title,
  Wrapper,
} from "./won.style";


const MyAuction: React.FC = () => {

const doneCards = Array.from({ length: 11 }).map((_,index) => ({
  ...auctionCardDone[0],
    key: `done-${index}`,
}));

const firstRow = doneCards.slice(0, 6);
const secondRow = doneCards.slice(6, 11); 

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
