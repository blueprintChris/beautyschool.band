import React from 'react';
import { ImgLink } from '../MainContent/styles';
import { Wrapper, Container } from './styles';

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <ImgLink>
          <img src='images/slam-dunk-cropped.png' target='_blank' alt='Slam Dunk Records' height='50' />
        </ImgLink>
      </Container>
    </Wrapper>
  );
};

export default Footer;
