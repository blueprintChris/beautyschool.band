import React from 'react';
import { SpotifyPlayer } from './styles';

const Spotify = () => {
  return (
    <SpotifyPlayer
      src='https://open.spotify.com/embed/artist/46yPZXaKNR5nkEqMzhifG6?theme=1&view=list'
      frameBorder='0'
      allowtransparency='true'
      allow='encrypted-media'
      title='Spotify'
    />
  );
};

export default Spotify;
