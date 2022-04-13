import React, { useContext } from 'react';
import NavContext from '../../../context/NavContext';
import { ContentItem } from '../../common';
import { SpotifyPlayer } from './styles';

const Listen = () => {
  const { refs } = useContext(NavContext);

  return (
    <ContentItem header='listen' ref={refs.listen}>
      <SpotifyPlayer
        src='https://open.spotify.com/embed/artist/46yPZXaKNR5nkEqMzhifG6?utm_source=generator'
        height='200'
        frameBorder='1'
        allowfullscreen=''
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
      />
    </ContentItem>
  );
};

export default Listen;
