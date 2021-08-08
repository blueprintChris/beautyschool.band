import React from 'react';
import { Wrapper } from './styles';

const YouTubeVideo = props => {
  const { id } = props;
  return (
    <Wrapper>
      <iframe
        width='100%'
        height='600'
        src={`https://www.youtube.com/embed/${id}`}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </Wrapper>
  );
};

export default YouTubeVideo;
