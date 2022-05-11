import React, { useState } from 'react';
import { BlurredImage, StyledVideo } from './styles';

const Video = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const onLoadedData = () => {
    setIsLoaded(true);
  };

  return (
    <>
      <StyledVideo playsInline autoPlay loop muted onLoadedData={onLoadedData} src={'/video/hero.mp4'} style={{ opacity: isLoaded ? 1 : 0 }} />
      <BlurredImage src='/images/hero-blurred.jpg' alt='hero-blurred' style={{ opacity: isLoaded ? 0 : 1 }} />
    </>
  );
};

export default Video;
