import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  text-decoration: none;
  font-size: ${props => props.theme.fonts.nav};
  font-family: 'BeautySchool';
  margin-right: 3rem;
  transition: 0.2s ease;
  transition-property: color font-size;

  &:last-child {
    margin: 0;
  }
`;

export const IconLink = styled.a`
  height: 30px;
  width: 30px;
  color: white;
  background-color: white;
  mask-image: url(${props => `/images/svgs/${props.site}.svg`});
  -webkit-mask-image: url(${props => `/images/svgs/${props.site}.svg`});
  margin-right: 3rem;
  transition: 0.2s ease;
  transition-property: background-color height;

  &:last-child {
    margin: 0;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: 'center';
  align-items: 'center';

  h1 {
    color: white;
    font-family: BeautySchool;
    font-size: 40px;
    white-space: normal;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: ${props => (props.scrolledPastHero ? '40px' : '70px')};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background: ${props =>
    props.scrolledPastHero
      ? 'white'
      : 'linear-gradient(94deg, rgba(0, 0, 0, 0.1) 0%, rgba(187, 187, 187, 0) 35%, rgba(255, 255, 255, 0) 65%, rgba(0, 0, 0, 0.1) 100%)'};
  transition: 0.2s ease;
  transition-property: background-color height;
  padding: 0 3rem;
  box-sizing: border-box;
  z-index: 1001;

  ${NavItem} {
    color: ${props => (props.scrolledPastHero ? props.theme.colours.black : props.theme.colours.white)};

    &:hover {
      color: ${props => (props.scrolledPastHero ? props.theme.colours.darkGold : props.theme.colours.black)};
    }
  }

  ${NavWrapper} {
    ${NavItem} {
      font-size: ${props => (props.scrolledPastHero ? '1.6rem' : '')};
    }
    ${IconLink} {
      background-color: ${props => (props.scrolledPastHero ? 'black' : 'white')};
      height: ${props => (props.scrolledPastHero ? '2rem' : '3rem')};
      width: ${props => (props.scrolledPastHero ? '2rem' : '3rem')};

      &:hover {
        background-color: ${props => (props.scrolledPastHero ? props.theme.colours.darkGold : 'black')};
      }
    }
  }
`;

export const Nav = styled.div`
  height: 100%;
  width: 1440px;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
