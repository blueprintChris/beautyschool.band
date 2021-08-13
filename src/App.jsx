import React, { useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Cookies, CookiesProvider } from 'react-cookie-banner';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import MainContent from './components/MainContent/MainContent';
import { AppWrapper, GlobalStyle, CookieBannerStyled } from './styles';
import { theme } from './theme';

const cookies = new Cookies();

const App = () => {
  const [isNavBarHidden, setIsNavBarHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const refs = {
    bio: useRef(null),
    merch: useRef(null),
    listen: useRef(null),
    watch: useRef(null),
    contact: useRef(null),
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle isNavBarHidden={isNavBarHidden} isMobile={isMobile} />
      <AppWrapper>
        <Navbar
          setIsNavBarHidden={setIsNavBarHidden}
          isNavBarHidden={isNavBarHidden}
          isMobile={isMobile}
          setIsMobile={setIsMobile}
          refs={refs}
        />
        <Hero />
        <CookiesProvider cookies={cookies}>
          <CookieBannerStyled
            dismissOnScroll={false}
            buttonMessage='Accept all cookies'
            disableStyle={true}
            message='This website uses cookies. &nbsp;'
            link={
              <a
                href='https://www.futuresoundgroup.com/futuresound-group-cookies-policy'
                target='_blank'
                rel='noreferrer'
              >
                Read our cookie policy here
              </a>
            }
          />
        </CookiesProvider>
        <MainContent isMobile={isMobile} refs={refs} />
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
