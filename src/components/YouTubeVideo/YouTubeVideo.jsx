import React from 'react';
import { Wrapper } from './styles';

const YouTubeVideo = () => {
  return (
    <Wrapper>
      <iframe
        width='100%'
        height='600'
        src='https://www.youtube.com/embed/gjIlcRfHNVc'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      />
    </Wrapper>
  );
};

export default YouTubeVideo;
