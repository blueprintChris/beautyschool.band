import React, { useContext } from 'react';
import NavContext from '../../../context/NavContext';
import { ContentItem } from '../../common';
import { SpotifyPlayer } from './styles';

const Listen = () => {
  const { refs } = useContext(NavContext);

  return (
    <ContentItem header='listen' ref={refs.listen}>
      <SpotifyPlayer
        src='https://open.spotify.com/embed/track/2n0G4nnYm2GKZGtVkZbigd?utm_source=generator&theme=0'
        height='80'
        frameBorder='1'
        allowfullscreen=''
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
      />
    </ContentItem>
  );
};

export default Listen;

<iframe
  src='https://open.spotify.com/embed/track/2n0G4nnYm2GKZGtVkZbigd?utm_source=generator&theme=0'
  width='100%'
  height='80'
  frameBorder='0'
  allowfullscreen=''
  allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
></iframe>;
