import React from 'react';
import { Link } from './styles';

const ImgLink = props => {
  const { href, imgSrc, alt } = props;
  return (
    <Link href={href} target='_blank'>
      <img src={imgSrc} alt={alt} />
    </Link>
  );
};

export default ImgLink;
