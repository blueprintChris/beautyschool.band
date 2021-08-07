import React from 'react';
import { Wrapper, Logo } from './styles';
import Video from '../Video/Video';

const Hero = () => {
  return (
    <Wrapper>
      <Logo src='images/logo.png' />
      <Video />
    </Wrapper>
  );
};

export default Hero;
