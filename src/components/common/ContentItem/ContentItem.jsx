import React, { forwardRef } from 'react';
import { Wrapper } from './styles';

const ContentItem = forwardRef((props, ref) => {
  const { header, children, id } = props;

  return (
    <Wrapper id={id} ref={ref}>
      {header && <h1>{header}</h1>}
      {children}
    </Wrapper>
  );
});

export default ContentItem;
