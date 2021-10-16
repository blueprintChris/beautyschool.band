import React, { useContext } from 'react';
import { NavContext } from '../../../context';
import useApi from '../../../hooks/useApi';
import { ContentItem, ContentRow, Spinner } from '../../common';
import { bio } from '../../../static/constants';
import { Paragraph } from './styles';

const Bio = () => {
  const { refs } = useContext(NavContext);
  const { response, error, isLoading } = useApi('text/bio');

  if (isLoading) {
    return <Spinner text='Fetching bio...' />;
  }

  return (
    <ContentRow>
      <ContentItem header='bio' ref={refs.bio}>
        <Paragraph>
          {error && bio}
          {response && response.bio}
        </Paragraph>
      </ContentItem>
    </ContentRow>
  );
};

export default Bio;