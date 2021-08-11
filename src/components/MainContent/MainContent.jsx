import React from 'react';
import { Wrapper, Content, ImgLink, Field } from './styles';
import Spotify from '../Spotify/Spotify';
import YouTubeVideo from '../YouTubeVideo/YouTubeVideo';
import ContentRow from '../ContentRow/ContentRow';
import ContentItem from '../ContentItem/ContentItem';
import Socials from '../Socials/Socials';
import Footer from '../Footer/Footer';

const MainContent = props => {
  const { isMobile } = props;
  return (
    <>
      <Wrapper>
        <Content>
          {isMobile && (
            <ContentRow>
              <ContentItem header='socials'>
                <Socials position='flex-start' />
              </ContentItem>
            </ContentRow>
          )}
          <ContentRow>
            <ContentItem header='bio' id='bio'>
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
            <ContentItem header='merch' id='merch'>
              <ImgLink href='https://beautyschooluk.bandcamp.com/merch' target='_blank'>
                <img src='images/merch-web-450.png' alt='get merch' />
              </ImgLink>
            </ContentItem>
            <ContentItem header='listen' id='listen'>
              <Spotify />
            </ContentItem>
          </ContentRow>
          <ContentRow>
            <ContentItem header='watch' id='watch'>
              <YouTubeVideo id='gjIlcRfHNVc' />
            </ContentItem>
          </ContentRow>
          <ContentRow>
            <ContentItem header='contact' id='contact'>
              <Field>
                <h2>band</h2>
                <a href='mailto:beautyschoolleeds@gmail.com'>beautyschoolleeds@gmail.com</a>
              </Field>
              <Field>
                <h2>management</h2>
                <a href='mailto:jd@slamdunkrecords.com'>jd@slamdunkrecords.com</a>
              </Field>
              <Field>
                <h2>label</h2>
                <a href='mailto:sam@futuresoundgroup.com'>sam@futuresoundgroup.com</a>
              </Field>
            </ContentItem>
          </ContentRow>
          <Footer />
        </Content>
      </Wrapper>
    </>
  );
};

export default MainContent;

// beautyschoolleeds@gmail.com
// Management: JD@slamdunkrecords.com
// Label: sam@futuresoundgroup.com
