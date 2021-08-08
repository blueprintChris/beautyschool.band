import React from 'react';
import { Wrapper, Row } from './styles';

const ContentRow = props => {
  const { children } = props;
  return (
    <Wrapper>
      <Row>{children}</Row>
    </Wrapper>
  );
};

export default ContentRow;
