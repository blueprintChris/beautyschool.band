import styled, { createGlobalStyle } from 'styled-components';
import BeautySchoolFont from './fonts/HelveticaNeueLTStd-BlkEx.otf';
import FuturaFont from './fonts/futura.woff';
import { CookieBannerUniversal } from 'react-cookie-banner';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    font-family: 'Futura', 'Roboto', 'Hind', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ${props => !props.isNavBarHidden && props.isMobile && 'overflow: hidden'};
  }

  html,
  body {
    min-height: 100%;
    height: 100%;
    width: 100%;
    min-width: 100%;
  }
 
  @font-face {
    font-family: 'BeautySchool';
    src: local('BeautySchool'), url(${BeautySchoolFont}) format('opentype');
  }

  @font-face {
    font-family: 'Futura';
    src: local('Futura'), url(${FuturaFont}) format('woff');
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;

export const AppWrapper = styled.div`
  min-height: 100vh;
`;

export const CookieBannerStyled = styled(CookieBannerUniversal)`
  background-color: black;
  max-width: 500px;
  height: 50px;
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  right: 2rem;
  border: 1px solid white;
  transition: 0.5s ease;
  transition-property: position bottom background-color;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1001;

  button {
    height: 100%;
    background-color: ${props => props.theme.colours.darkGold};
    color: white;
    border: 1px solid white;
    cursor: pointer;
    font-family: Futura, Arial, Helvetica, sans-serif;
  }

  button:hover {
    background-color: ${props => props.theme.colours.lightGold};
  }

  span {
    font-family: Futura, Arial, Helvetica, sans-serif;
    color: white;
    display: flex;
    padding: 20px;
    font-size: 15px;
  }

  a {
    color: ${props => props.theme.colours.lightGold};
    text-decoration: none;
  }
`;
