import React from 'react';
import { Wrapper, Content } from './styles';
import { ContentRow } from '../../common';
import { Bio, Contact, Watch, Shop, Listen, SocialsMobile } from '../../sections';
import Footer from '../Footer/Footer';

const MainContent = props => {
  const { isMobile } = props;

  return (
    <Wrapper>
      <Content>
        {isMobile && <SocialsMobile />}
        <Bio />
        <ContentRow>
          <Shop />
          <Listen />
        </ContentRow>
        <Watch />
        <Contact />
        <Footer />
      </Content>
    </Wrapper>
  );
};

export default MainContent;
