import {
  Wrapper,
  Navbar,
  LeftGroup,
  RightGroup,
  NavButton,
  IconButton,
  Title,
  Content,
  NavButton2,
  ButtonGroup,
} from "./myAuction.style";
import { HomeIcon, UserIcon } from "../../icons/homeIcon";
import AuctionCard from "../../cards/auctionCard";
import { auctionCard } from "../../cards/auctionCardData";



const MyAuction: React.FC = () => {
const inProgressCards = auctionCard.filter(card => card.tag.toLowerCase() === "in progress");
const doneCards = auctionCard.filter(card => card.tag.toLowerCase() === "done");
  return (
    <Wrapper>
      <Navbar>
        <LeftGroup>
          <img src="/images/Left navigation.png" alt="navbar" />

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

      <Title>Hello Jamal Reces !</Title>
<Content>
        <ButtonGroup>
          <NavButton2 to="/myauction">My auction</NavButton2>
          <NavButton2 to="/bidding">Bidding</NavButton2>
          <NavButton2 to="/Won ">Won</NavButton2>
        </ButtonGroup>

        {/* outbid kartice */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            padding: "32px 32px 0px 32px",
          }}
        >
          {inProgressCards.map((card, index) => (
            <AuctionCard
              key={index}
              image={card.image}
              tag={card.tag}
              tagColor={card.tagColor}
              timeLeft={card.timeLeft}
              title={card.title}
              price={card.price}
              
              
            />
          ))}
        </div>
        

       
{/* Done kartice */}
<div
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    padding: "0 32px 32px 32px",
  }}
>
  {doneCards.map((card, index) => (
    <AuctionCard
      key={index}
      image={card.image}
      tag={card.tag}
      tagColor={card.tagColor}
      timeLeft={card.timeLeft}
      title={card.title}
      price={card.price}
    />
  ))}
</div>
      </Content>
    </Wrapper>
  );
};

export default MyAuction;
