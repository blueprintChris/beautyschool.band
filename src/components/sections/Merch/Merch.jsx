import React, { useContext } from 'react';
import NavContext from '../../../context/NavContext';
import useApi from '../../../hooks/useApi';
import { ContentItem, Spinner } from '../../common';
import { Link } from './styles';

const Merch = () => {
  const { refs } = useContext(NavContext);
  const { response, error, isLoading } = useApi('images/merch');

  if (isLoading) {
    return <Spinner text='Fetching merch...' />;
  }

  return (
    <ContentItem header='merch' ref={refs.merch}>
      <Link href='https://beautyschooluk.bandcamp.com/merch' target='_blank'>
        {error && <img src='images/merch-web-450.png' alt='Get Merch' />}
        {response && <img src={`https://beauty-school-content.s3.eu-west-1.amazonaws.com/${response[0].Key}`} />}
      </Link>
    </ContentItem>
  );
};

export default Merch;
