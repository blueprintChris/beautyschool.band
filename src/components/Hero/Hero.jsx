import React from 'react';
import { Wrapper, Logo, LogoWrapper } from './styles';
import Video from '../Video/Video';

const Hero = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo>beauty school</Logo>
      </LogoWrapper>

      <Video />
    </Wrapper>
  );
};

export default Hero;
