import React from 'react';
import { Wrapper, Nav, NavItem } from './styles';

const Navbar = () => {
  return (
    <Wrapper>
      <Nav>
        <NavItem to='/#bio' target>
          Bio
        </NavItem>
        <NavItem to='/listen'>Listen</NavItem>
        <NavItem to='/dates'>Dates</NavItem>
        <NavItem to='/contact'>Contact</NavItem>
      </Nav>
    </Wrapper>
  );
};

export default Navbar;
