import React from 'react';
import { Wrapper, Content, Row, Bio } from './styles';
import Spotify from '../Spotify/Spotify';
import YouTubeVideo from '../YouTubeVideo/YouTubeVideo';

const MainContent = () => {
  return (
    <Wrapper id='bio'>
      <Content>
        <Row>
          <Bio>
            <h1>Bio</h1>
            <p>
              Leeds-based guitar-licking pop-punk that writes songs about monsters, dementia and dying of heart attacks.
            </p>
          </Bio>
        </Row>
        <Row>
          <Spotify />
          <Spotify />
        </Row>
        <Row>
          <YouTubeVideo />
        </Row>
      </Content>
    </Wrapper>
  );
};

export default MainContent;
