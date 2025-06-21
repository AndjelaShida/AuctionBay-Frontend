
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
  
} from './LandingPage.style'

const LandingPage = () => {
  return (
    <PageWrapper>
      <Content>
        <Header>
          <img src='./images/Left navigation.png' alt='Left navigation'></img>
          <AuthButtons>
            <Button>Sing In</Button>
            <OrText>Or</OrText>
            <Button>Log In</Button>
          </AuthButtons>
        </Header>

        <H1>E-auction made easy!</H1>
        <Subtitle>
           Simple way to selling your unused products, <br />
          or getting a deal on product you want!
        </Subtitle>
        <StartButton> <img src='./images/landingPic.png' alt='Landing Picture' />
        </StartButton>
      </Content>
    </PageWrapper>
  );
};

export default LandingPage;
