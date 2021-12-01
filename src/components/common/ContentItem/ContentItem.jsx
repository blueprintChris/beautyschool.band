import React, { forwardRef } from 'react';
import { HeaderWrapper, Wrapper } from './styles';

const ContentItem = forwardRef((props, ref) => {
  const { header, img, imgAlt, children, id } = props;

  return (
    <Wrapper id={id} ref={ref}>
      <HeaderWrapper>
        {header && <h1>{header}</h1>}
        {img && <img src={img} alt={imgAlt} />}
      </HeaderWrapper>
      {children}
    </Wrapper>
  );
});

export default ContentItem;
