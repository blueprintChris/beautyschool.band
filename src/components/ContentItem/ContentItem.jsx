import React from 'react';
import { Wrapper } from './styles';

const ContentItem = props => {
  const { header, children } = props;
  return (
    <Wrapper>
      <h1>{header}</h1>
      {children}
    </Wrapper>
  );
};

export default ContentItem;
