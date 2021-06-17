import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

export const Nav = styled.div`
  height: 100%;
  max-width: 500px;
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1140px;
`;

export const NavItem = styled(NavLink)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colours.white};
  font-weight: bold;
  text-decoration: none;
  font-size: ${(props) => props.theme.fonts.nav};
  padding: 0 2rem;
  transition: 0.2s ease;
  transition-property: color;

  &:hover {
    color: ${(props) => props.theme.colours.lightGold};
  }
`;
