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

  const scrollWithOffset = el => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -50;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <Wrapper scrolledPastHero={scrolledPastHero}>
      <Nav>
        <NavWrapper>
          <NavItem scroll={scrollWithOffset} to='/#bio'>
            bio
          </NavItem>
          <NavItem scroll={scrollWithOffset} to='/#merch'>
            merch
          </NavItem>
          <NavItem scroll={scrollWithOffset} to='/#contact'>
            contact
          </NavItem>
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
