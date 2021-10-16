import React, { useContext } from 'react';
import NavContext from '../../../context/NavContext';
import { ContentItem } from '../../common';
import { SpotifyPlayer } from './styles';

const Listen = () => {
  const { refs } = useContext(NavContext);

  return (
    <ContentItem header='listen' ref={refs.listen}>
      <SpotifyPlayer
        src='https://open.spotify.com/embed/artist/46yPZXaKNR5nkEqMzhifG6?theme=1&view=list'
        frameBorder='0'
        allowtransparency='true'
        allow='encrypted-media'
        title='Spotify'
      />
    </ContentItem>
  );
};

export default Listen;
