import React from 'react';
import {
  PageWrapper,
  Content,
  Title,
  ButtonGroup,
  Button,
  HeaderButton,
  OrText,
} from './LandingPage.style'

const LandingPage = () => {
  return (
    <PageWrapper>
      <Content>
        <Title>E-Auction made easy!</Title>
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
