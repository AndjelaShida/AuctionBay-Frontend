//THE MAIN PAIGE FOR ALL AUCTIONS

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
  Title,
  Wrapper,
} from "../../Base/Base.style";
import AuctionCard from "../../cards/auctionCard";
import { auctionCardItems } from "../../cards/auctionCardData";
import { HomeIcon, UserIcon } from "../../icons/homeIcon";
import { Body, CardsGrid} from "./auctions.style";

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

      <Body>
        <Title>Auctions</Title>

        <CardsGrid>
          {auctionCardItems.map((item, index) => (
            <AuctionCard
              key={index}
              image={item.image}
              timeLeft={item.timeLeft}
              title={item.title}
              price={item.price}
              tag={item.tag}
              tagColor={item.tagColor}
            />
          ))}
        </CardsGrid>
      </Body>
    </Wrapper>
  );
};

export default Auction;
