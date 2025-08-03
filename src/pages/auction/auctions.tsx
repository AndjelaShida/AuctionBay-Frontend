//THE MAIN PAIGE FOR ALL AUCTIONS

import { CircleButton, IconButton, ProfileImage } from "../../Base/Base.style";
import AuctionCard from "../../cards/auctionCard";
import { auctionCardItems } from "../../cards/auctionCardData";
import { HomeIcon, UserIcon } from "../../icons/homeIcon";
import {
  CardsGrid,
  LeftNavigation,
  Navbar,
  NavButton,
  NavigationTab,
  RightNavigation,
  TitleBar,
  Wrapper,
} from "../profile/myAuction.style";

const Auctions: React.FC = () => {
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

      <TitleBar>Auctions</TitleBar>

      <CardsGrid>
        {auctionCardItems.map((item, index) => {
          const tagLower = item.tag.toLowerCase();

          // Vadi broj iz timeLeft
          const numericTime = parseInt(item.timeLeft.replace(/\D/g, ""));

          const isHours = item.timeLeft.toLowerCase().includes("h");

          // highlight samo ako je in progress i vreme je <=24h
          const highlightTime =
            tagLower === "in progress" && isHours && numericTime <= 24;

          return (
            <AuctionCard
              key={index}
              image={item.image}
              timeLeft={item.timeLeft}
              title={item.title}
              price={item.price}
              tag={item.tag}
              tagColor={item.tagColor}
              highlightTime={highlightTime}
            />
          );
        })}
      </CardsGrid>
    </Wrapper>
  );
};

export default Auctions;
