import React, { useContext } from 'react';
import { Wrapper, Logo, LogoWrapper } from './styles';
import { Video } from '..';
import NavContext from '../../../context/NavContext';

const Hero = () => {
  const { scrollPosition } = useContext(NavContext);

  return (
    <Wrapper>
      <LogoWrapper>
        <Logo>
          <img
            src='images/logo.png'
            height='225'
            alt='Beauty School'
            style={{ opacity: Math.max(0, Math.min(1, -scrollPosition / 200 + 2)) }}
          />
        </Logo>
      </LogoWrapper>
      <Video />
    </Wrapper>
  );
};

export default Hero;
