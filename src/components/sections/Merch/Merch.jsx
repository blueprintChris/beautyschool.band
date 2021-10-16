import React, { useContext } from 'react';
import NavContext from '../../../context/NavContext';
import { ContentItem } from '../../common';
import { Link } from './styles';

const Merch = () => {
  const { refs } = useContext(NavContext);

  return (
    <ContentItem header='merch' ref={refs.merch}>
      <Link href='https://beautyschooluk.bandcamp.com/merch' target='_blank'>
        <img src='images/merch-web-450.png' alt='Get Merch' />
      </Link>
    </ContentItem>
  );
};

export default Merch;
