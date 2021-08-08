import React, { useEffect, useState } from 'react';
import Hamburger from '../Hamburger/Hamburger';
import { Wrapper, Nav, NavItem, NavWrapper, IconLink, HamburgerWrapper } from './styles';

const Navbar = () => {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    window.addEventListener('resize', getWindowDimensions);

    getWindowDimensions();
  }, []);

  const getWindowDimensions = () => {
    const { innerWidth: width } = window;

    if (width <= 800) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

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

  const handleMenu = () => {
    console.log('clicked');
    setIsHidden(!isHidden);
  };

  const handleNavClick = () => {
    setIsHidden(true);
  };

  return (
    <>
      {isMobile && (
        <HamburgerWrapper>
          <Hamburger handleClick={handleMenu} />
        </HamburgerWrapper>
      )}
      <Wrapper scrolledPastHero={scrolledPastHero} isMobile={isMobile} isHidden={isHidden}>
        <Nav>
          <NavWrapper>
            <NavItem scroll={scrollWithOffset} to='/#bio' onClick={handleNavClick}>
              bio
            </NavItem>
            <NavItem scroll={scrollWithOffset} to='/#merch' onClick={handleNavClick}>
              merch
            </NavItem>
            <NavItem scroll={scrollWithOffset} to='/#listen' onClick={handleNavClick}>
              listen
            </NavItem>
            <NavItem scroll={scrollWithOffset} to='/#contact' onClick={handleNavClick}>
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
    </>
  );
};

export default Navbar;
