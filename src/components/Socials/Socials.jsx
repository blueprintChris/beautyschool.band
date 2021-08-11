import React from 'react';
import { IconLink, NavWrapper } from '../Navbar/styles';

const Socials = props => {
  const { position } = props;
  return (
    <NavWrapper position={position}>
      <IconLink href='https://twitter.com/beautyschoollds' site='twitter' target='_blank' />
      <IconLink href='https://instagram.com/beautyschooluk' site='instagram' target='_blank' />
      <IconLink href='https://open.spotify.com/artist/46yPZXaKNR5nkEqMzhifG6' site='spotify' target='_blank' />
      <IconLink href='https://www.youtube.com/channel/UCwkFeK8zVScddmxWbjwcfAg' site='youtube' target='_blank' />
      <IconLink href='https://www.facebook.com/beautyschooluk/' site='facebook' target='_blank' />
    </NavWrapper>
  );
};

export default Socials;
