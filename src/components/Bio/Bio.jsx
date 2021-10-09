import React from 'react';
import Spinner from '../Spinner/Spinner';
import useApi from '../../hooks/useApi';
import { bio } from '../../static/constants';
import { Paragraph } from './styles';

const Bio = () => {
  const { response, error, isLoading } = useApi('text/bio');

  if (isLoading) {
    return <Spinner text='Fetching bio...' />;
  }

  return (
    <Paragraph>
      {error && bio}
      {response && response.bio}
    </Paragraph>
  );
};

export default Bio;
