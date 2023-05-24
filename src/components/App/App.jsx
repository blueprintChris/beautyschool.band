import React, { useRef, useState, useCallback, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from '../layout/Navbar/Navbar';
import { Hero } from '../common';
import MainContent from '../layout/MainContent/MainContent';
import { AppWrapper, GlobalStyle } from '../../styles';
import { theme } from '../../theme';
import NavContext from '../../context/NavContext';
import MobileContext from '../../context/MobileContext';

const App = () => {
  const [isNavBarHidden, setIsNavBarHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const refs = {
    bio: useRef(null),
    listen: useRef(null),
    tickets: useRef(null),
    shop: useRef(null),
    watch: useRef(null),
    contact: useRef(null),
  };

  const getWindowDimensions = useCallback(() => {
    const { innerWidth: width } = window;

    if (width <= 800) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [setIsMobile]);

  const getScrollPositionY = useCallback(() => {
    const { scrollY } = window;

    setScrollPosition(scrollY);
  }, [setScrollPosition]);

  useEffect(() => {
    window.addEventListener('resize', getWindowDimensions);
    window.addEventListener('scroll', getScrollPositionY);

    getWindowDimensions();

    return () => {
      window.removeEventListener('scroll', getScrollPositionY);
      window.removeEventListener('resize', getWindowDimensions);
    };
  }, [getWindowDimensions, getScrollPositionY]);

  return (
    <ThemeProvider theme={theme}>
      <NavContext.Provider value={{ refs, isNavBarHidden, setIsNavBarHidden, scrollPosition }}>
        <MobileContext.Provider value={{ isMobile }}>
          <GlobalStyle isNavBarHidden={isNavBarHidden} isMobile={isMobile} />
          <AppWrapper>
            <Navbar />
            <Hero />
            {/* <CookiesProvider cookies={cookies}>
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
            </CookiesProvider> */}
            <MainContent isMobile={isMobile} refs={refs} />
          </AppWrapper>
        </MobileContext.Provider>
      </NavContext.Provider>
    </ThemeProvider>
  );
};

export default App;
