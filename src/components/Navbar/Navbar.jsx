import React, { useCallback, useEffect, useState } from 'react';
import Hamburger from '../Hamburger/Hamburger';
import Socials from '../Socials/Socials';
import { Wrapper, Nav, NavItem, NavWrapper, HamburgerWrapper } from './styles';

const Navbar = props => {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const { setIsNavBarHidden, isNavBarHidden, isMobile, setIsMobile } = props;

  const getWindowDimensions = useCallback(() => {
    const { innerWidth: width } = window;

    if (width <= 800) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [setIsMobile]);

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    window.addEventListener('resize', getWindowDimensions);

    getWindowDimensions();
  }, [getWindowDimensions]);

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
    const yOffset = isMobile ? -20 : -50;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  const handleMenu = () => {
    setIsNavBarHidden(!isNavBarHidden);
  };

  const handleNavClick = () => {
    setIsNavBarHidden(true);
  };

  return (
    <>
      {isMobile && (
        <HamburgerWrapper>
          <Hamburger handleClick={handleMenu} isHidden={isNavBarHidden} />
        </HamburgerWrapper>
      )}
      <Wrapper scrolledPastHero={scrolledPastHero} isMobile={isMobile} isHidden={isNavBarHidden}>
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
          <Socials position={isMobile ? 'center' : 'flex-end'} />
        </Nav>
      </Wrapper>
    </>
  );
};

export default Navbar;
