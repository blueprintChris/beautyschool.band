import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

export const NavItem = styled(HashLink)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  text-decoration: none;
  font-size: ${props => props.theme.fonts.nav};
  font-family: BeautySchool, Futura, Arial, Helvetica, sans-serif;
  margin-right: 2rem;
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
  justify-content: ${props => props.position};
  align-items: 'center';

  h1 {
    color: white;
    font-family: BeautySchool, Futura, Arial, Helvetica, sans-serif;
    font-size: 40px;
    white-space: normal;
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

export const Wrapper = styled.div`
  width: 100%;
  height: ${props => (props.isMobile ? '100%' : props.scrolledPastHero ? '40px' : '70px')};
  position: fixed;
  display: ${props => (props.isMobile && props.isHidden ? 'none' : 'flex')};
  flex-direction: ${props => (props.isMobile ? 'column' : 'row')};
  justify-content: center;
  align-items: center;
  background: ${props =>
    props.isMobile
      ? 'black'
      : props.scrolledPastHero
      ? 'white'
      : 'linear-gradient(94deg, rgba(0, 0, 0, 0.1) 0%, rgba(187, 187, 187, 0) 35%, rgba(255, 255, 255, 0) 65%, rgba(0, 0, 0, 0.1) 100%)'};
  transition: ${props => !props.isMobile && '0.2s ease'};
  transition-property: ${props => (!props.isMobile ? 'background-color height' : 'display')};
  padding: 0 3rem;
  box-sizing: border-box;
  z-index: 998;

  ${Nav} {
    width: ${props => props.isMobile && '100%'};
    flex-direction: ${props => (props.isMobile ? 'column' : 'row')};
  }

  ${NavItem} {
    color: ${props => (!props.isMobile ? (props.scrolledPastHero ? 'black' : 'white') : 'white')};

    &:hover {
      color: ${props =>
        !props.isMobile && (props.scrolledPastHero ? props.theme.colours.darkGold : props.theme.colours.black)};
    }
  }

  ${NavWrapper} {
    z-index: 1001;
    flex-direction: ${props => (props.isMobile ? 'column' : 'row')};
    padding: ${props => props.isMobile && '5rem 0'};

    &:last-child {
      flex-direction: row;
    }

    ${NavItem} {
      font-size: ${props => (!props.isMobile ? (props.scrolledPastHero ? '1.6rem' : '') : '4rem')};
      margin-bottom: ${props => props.isMobile && '2rem'};
    }
    ${IconLink} {
      background-color: ${props => !props.isMobile && (props.scrolledPastHero ? 'black' : 'white')};
      height: ${props => !props.isMobile && (props.scrolledPastHero ? '2rem' : '3rem')};
      width: ${props => !props.isMobile && (props.scrolledPastHero ? '2rem' : '3rem')};

      &:hover {
        background-color: ${props =>
          !props.isMobile && (props.scrolledPastHero ? props.theme.colours.darkGold : 'black')};
      }
    }
  }
`;

export const HamburgerWrapper = styled.div`
  padding: 0.5rem;
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  z-index: 999;
`;
