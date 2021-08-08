import React from 'react';
import { Wrapper } from './styles';

const Spotify = () => {
  return (
    <Wrapper>
      <iframe
        src='https://open.spotify.com/embed/artist/46yPZXaKNR5nkEqMzhifG6?theme=0'
        width='100%'
        height='450'
        frameBorder='0'
        allowtransparency='true'
        allow='encrypted-media'
        title='spotify'
      />
    </Wrapper>
  );
};

export default Spotify;
