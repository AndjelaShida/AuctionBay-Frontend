import {
  Wrapper,
  Navbar,
  LeftGroup,
  RightGroup,
  NavButton,
  IconButton,
  Title,
} from "./myAuction.style";
import { HomeIcon, UserIcon } from "../../icons/homeIcon";

const MyAuction: React.FC = () => {
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </IconButton>

          <IconButton to="/profile">
            <img
              src="/images/profile.jpg"
              alt="profile"
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </IconButton>
        </RightGroup>
      </Navbar>

      <Title>Hello Jamal Reces !</Title>
    </Wrapper>
  );
};

export default MyAuction;
