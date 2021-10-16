import React from 'react';
import { StyledVideo } from './styles';

const Video = () => {
  return (
    <StyledVideo playsInline autoPlay loop muted>
      <source type='video/mp4' src='/video/hero.mp4' />
    </StyledVideo>
  );
};

export default Video;
