import React from 'react';
import { Wrapper } from './styles';

const ContentItem = props => {
  const { header, children, id } = props;

  return (
    <Wrapper id={id}>
      <h1>{header}</h1>
      {children}
    </Wrapper>
  );
};

export default ContentItem;
