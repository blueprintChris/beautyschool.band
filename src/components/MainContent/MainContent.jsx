import React from 'react';
import { Wrapper, Content, ImgLink } from './styles';
import Spotify from '../Spotify/Spotify';
import YouTubeVideo from '../YouTubeVideo/YouTubeVideo';
import ContentRow from '../ContentRow/ContentRow';
import ContentItem from '../ContentItem/ContentItem';

const MainContent = () => {
  return (
    <Wrapper>
      <Content>
        <ContentRow>
          <ContentItem header='bio'>
            <p>
              Beauty School’s formation built from modest intentions, from stalwarts within the Leeds music scene,
              lyricist Joe Cabrera alongside guitarist Dan Shaw started Beauty School as the result of unfinished
              business and new things to say. With the introduction of bassist Liam Craig, guitarist Jordan Hill and
              drummer Charlie Thomas, Beauty School fully formed. Alongside the band’s signing with Slam Dunk Records,
              Beauty School are set to release their debut full-length record in early 2022; looking to fuse diverse,
              wide-ranging influences into what will essentially be, sad boomer anthems - buckle up.
            </p>
          </ContentItem>
        </ContentRow>
        <ContentRow>
          <ContentItem header='merch'>
            <ImgLink href='https://beautyschooluk.bandcamp.com/merch' target='_blank'>
              <img src='images/merch.png' alt='get merch' />
            </ImgLink>
          </ContentItem>
          <ContentItem header='listen'>
            <Spotify />
          </ContentItem>
        </ContentRow>
        <ContentRow>
          <ContentItem header='watch'>
            <YouTubeVideo id='gjIlcRfHNVc' />
          </ContentItem>
        </ContentRow>
      </Content>
    </Wrapper>
  );
};

export default MainContent;
