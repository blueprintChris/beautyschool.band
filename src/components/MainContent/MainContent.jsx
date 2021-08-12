import React from 'react';
import { Wrapper, Content } from './styles';
import Spotify from '../Spotify/Spotify';
import YouTubeVideo from '../YouTubeVideo/YouTubeVideo';
import ContentRow from '../ContentRow/ContentRow';
import ContentItem from '../ContentItem/ContentItem';
import Socials from '../Socials/Socials';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import ImgLink from '../ImgLink/ImgLink';
import Bio from '../Bio/Bio';

const MainContent = props => {
  const { isMobile, refs } = props;

  return (
    <Wrapper>
      <Content>
        {isMobile && (
          <ContentRow>
            <ContentItem>
              <Socials position='space-between' />
            </ContentItem>
          </ContentRow>
        )}
        <ContentRow>
          <ContentItem header='bio' ref={refs.bio}>
            <Bio />
          </ContentItem>
        </ContentRow>
        <ContentRow>
          <ContentItem header='merch' ref={refs.merch}>
            <ImgLink
              href='https://beautyschooluk.bandcamp.com/merch'
              imgSrc='images/merch-web-450.png'
              alt='Get Merch'
            />
          </ContentItem>
          <ContentItem header='listen' ref={refs.listen}>
            <Spotify />
          </ContentItem>
        </ContentRow>
        <ContentRow>
          <ContentItem header='watch' ref={refs.watch}>
            <YouTubeVideo id='gjIlcRfHNVc' />
          </ContentItem>
        </ContentRow>
        <ContentRow>
          <ContentItem header='contact' ref={refs.contact}>
            <Contact />
          </ContentItem>
        </ContentRow>
        <Footer />
      </Content>
    </Wrapper>
  );
};

export default MainContent;
