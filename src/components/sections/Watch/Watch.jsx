import React, { useContext } from 'react';
import MobileContext from '../../../context/MobileContext';
import NavContext from '../../../context/NavContext';
import { ContentItem } from '../../common';
import { Wrapper } from './styles';

const Watch = props => {
  const { refs } = useContext(NavContext);
  const { isMobile } = useContext(MobileContext);

  return (
    <ContentItem header='watch' ref={refs.watch}>
      <Wrapper>
        <iframe
          width='100%'
          height={isMobile ? '240' : '560'}
          src={`https://www.youtube.com/embed/wJElPbiUMIk`}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </Wrapper>
      <Wrapper>
        <iframe
          width='100%'
          height={isMobile ? '240' : '560'}
          src={`https://www.youtube.com/embed/7uDiJatHe1M`}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </Wrapper>
    </ContentItem>
  );
};

export default Watch;
