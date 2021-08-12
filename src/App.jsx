import React, { useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import MainContent from './components/MainContent/MainContent';
import { AppWrapper, GlobalStyle } from './styles';
import { theme } from './theme';

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
        <MainContent isMobile={isMobile} refs={refs} />
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
