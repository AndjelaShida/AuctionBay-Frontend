
import {
  PageWrapper,
  Content,
  Title,
  ButtonGroup,
  Button,
  HeaderButton,
  OrText,
  Subtitle,
  StartButton,
} from './LandingPage.style'

const LandingPage = () => {
  return (
    <PageWrapper>
      <Content>
        <Title>E-auction made easy!</Title>
        <Subtitle>Simple way to selling your unused products, <br></br>
          or getting a deal on product you want!</Subtitle>
          <StartButton>Start bidding</StartButton>
        <img src='/images/landingPic.png' alt='Landing Picture'></img>
        <ButtonGroup>
          <HeaderButton>
          <Button>Sign In</Button>
          <OrText>Or</OrText>
          <Button>Log In</Button>
          </HeaderButton>
        </ButtonGroup>
      </Content>
    </PageWrapper>
  );
};

export default LandingPage;
