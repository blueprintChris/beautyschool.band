import React, { useEffect, useState, useContext } from 'react';
import MobileContext from '../../../context/MobileContext';
import NavContext from '../../../context/NavContext';
import { Hamburger, Socials } from '../../common';
import { Wrapper, Nav, NavItem, NavWrapper, HamburgerWrapper } from './styles';

const Navbar = () => {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const { refs, isNavBarHidden, setIsNavBarHidden } = useContext(NavContext);
  const { isMobile } = useContext(MobileContext);

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
    const yOffset = isMobile ? -20 : -50;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  const handleMenu = () => {
    setIsNavBarHidden(!isNavBarHidden);
  };

  const handleNavClick = value => {
    scrollWithOffset(refs[value].current);

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
            {/* <NavItem onClick={() => handleNavClick('bio')}>bio</NavItem> */}
            <NavItem onClick={() => handleNavClick('listen')}>listen</NavItem>
            <NavItem onClick={() => handleNavClick('tickets')}>tickets</NavItem>
            <NavItem onClick={() => handleNavClick('shop')}>shop</NavItem>
            <NavItem onClick={() => handleNavClick('contact')}>contact</NavItem>
          </NavWrapper>
          <Socials position={isMobile ? 'center' : 'flex-end'} />
        </Nav>
      </Wrapper>
    </>
  );
};

export default Navbar;
