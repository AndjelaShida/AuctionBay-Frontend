import {
  PageWrapper,
  Content,
  Button,
  OrText,
  Subtitle,
  StartButton,
  Header,
  H1,
  AuthButtons,
  IconButton,
} from "./LandingPage.style";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <PageWrapper>
      <Content>
        <Header>
          <IconButton to="a">
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
        
          <AuthButtons>
            <Link to="LoginPage">
            <Button>Log in</Button>
            </Link>

            <OrText>Or</OrText>

            <Link to="/RegisterPage">
            <Button>Sing Up</Button>
            </Link>
          </AuthButtons>
        </Header>

        <H1>E-auction made easy!</H1>
        <Subtitle>
          Simple way to selling your unused products, <br />
          or getting a deal on product you want!
        </Subtitle>
        <StartButton>
         Start Bidding
        </StartButton>
        <img src="./images/landingPic.png" alt="Landing Picture" />
      </Content>
    </PageWrapper>
  );
};

export default LandingPage;
