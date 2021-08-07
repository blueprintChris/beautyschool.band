import React, { useEffect, useState } from 'react';
import { Wrapper, Nav, NavItem, NavWrapper, IconLink } from './styles';

const Navbar = () => {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
  }, []);

  const listenToScroll = () => {
    const position = window.pageYOffset;

    if (position > window.innerHeight - 70) {
      setScrolledPastHero(true);
    } else {
      setScrolledPastHero(false);
    }
  };

  return (
    <Wrapper scrolledPastHero={scrolledPastHero}>
      <Nav>
        <NavWrapper>
          <NavItem to='/bio'>Listen</NavItem>
          <NavItem to='/listen'>Merch</NavItem>
          <NavItem to='/dates'>Tour</NavItem>
        </NavWrapper>
        <NavWrapper>
          <IconLink href='https://twitter.com/beautyschoollds' site='twitter' target='_blank' />
          <IconLink href='https://instagram.com/beautyschooluk' site='instagram' target='_blank' />
          <IconLink href='https://open.spotify.com/artist/46yPZXaKNR5nkEqMzhifG6' site='spotify' target='_blank' />
          <IconLink href='https://www.youtube.com/channel/UCwkFeK8zVScddmxWbjwcfAg' site='youtube' target='_blank' />
          <IconLink href='https://www.facebook.com/beautyschooluk/' site='facebook' target='_blank' />
        </NavWrapper>
      </Nav>
    </Wrapper>
  );
};

export default Navbar;
