import React from 'react';
import { Wrapper, Container, ImgWrapper, TextWrapper } from './styles';

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <ImgWrapper>
          <a href='https://slamdunkrecords.com' target='_blank' rel='noreferrer'>
            <img src='images/slam-dunk-cropped.png' alt='Slam Dunk Records' height='40' />
          </a>
          <a href='https://www.futuresoundgroup.com/' target='_blank' rel='noreferrer'>
            <img src='images/fs-group-400.jpg' target='_blank' alt='Futuresound Group' height='40' />
          </a>
        </ImgWrapper>
        <TextWrapper>
          <span>© 2022 beauty school</span>
          <span>
            &nbsp; website by <a href='https://instagram.com/blueprintchris'>blueprintchris</a>
          </span>
        </TextWrapper>
      </Container>
    </Wrapper>
  );
};

export default Footer;
