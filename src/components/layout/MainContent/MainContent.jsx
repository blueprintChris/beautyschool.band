import React from 'react';
import { Wrapper, Content } from './styles';
import { Bio, Contact, Watch, Shop, Listen, SocialsMobile, TourDates } from '../../sections';
import Footer from '../Footer/Footer';
import { ContentRow } from '../../common';

const MainContent = props => {
  const { isMobile } = props;

  return (
    <Wrapper>
      <Content>
        {isMobile && <SocialsMobile />}
        <ContentRow>
          <Bio />
        </ContentRow>
        <ContentRow>
          <Listen />
        </ContentRow>
        <ContentRow>
          <TourDates />
        </ContentRow>
        <ContentRow>
          <Shop />
        </ContentRow>
        <ContentRow>
          <Watch />
        </ContentRow>
        <ContentRow>
          <Contact />
        </ContentRow>
        <Footer />
      </Content>
    </Wrapper>
  );
};

export default MainContent;
