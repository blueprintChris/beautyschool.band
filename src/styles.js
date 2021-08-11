import styled, { createGlobalStyle } from 'styled-components';
import BeautySchoolFont from './fonts/HelveticaNeueLTStd-BlkEx.otf';
import FuturaFont from './fonts/futura.woff';

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
