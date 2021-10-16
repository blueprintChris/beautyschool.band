import React from 'react';
import { Wrapper, Logo, LogoWrapper } from './styles';
import { Video } from '..';

const Hero = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo>
          <img src='images/logo.png' height='50' alt='Beauty School' />
        </Logo>
      </LogoWrapper>
      <Video />
    </Wrapper>
  );
};

export default Hero;
