import React, { useContext } from 'react';
import { ContentItem, Spinner } from '../../common';
import useApi from '../../../hooks/useApi';
import { bio } from '../../../static/constants';
import { Paragraph } from './styles';
import NavContext from '../../../context/NavContext';

const Bio = () => {
  const { refs } = useContext(NavContext);
  const { response, error, isLoading } = useApi('text/bio');

  if (isLoading) {
    return <Spinner text='Fetching bio...' />;
  }

  return (
    <ContentItem header='bio' ref={refs.bio}>
      <Paragraph>
        {error && bio}
        {response && response.bio}
      </Paragraph>
    </ContentItem>
  );
};

export default Bio;
