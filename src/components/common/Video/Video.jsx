import React, { useState } from 'react';
import Spinner from '../Spinner/Spinner';
import { BlurredImage, StyledVideo } from './styles';

const Video = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const onLoadedData = () => {
    setIsLoaded(true);
  };

  return (
    <>
      <Spinner style={{ opacity: isLoaded ? 0 : 1, position: 'absolute', zIndex: 1000 }} color='white' />
      <StyledVideo playsInline autoPlay loop muted onLoadedData={onLoadedData} src={'/video/hero.mp4'} style={{ opacity: isLoaded ? 1 : 0 }} />
      <BlurredImage src='/images/hero-blurred.jpg' alt='hero-blurred' style={{ opacity: isLoaded ? 0 : 1 }} />
    </>
  );
};

export default Video;
