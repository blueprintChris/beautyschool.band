import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import MainContent from './components/MainContent/MainContent';
import { AppWrapper, GlobalStyle } from './styles';
import { theme } from './theme';

const App = () => {
  const [isNavBarHidden, setIsNavBarHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle isNavBarHidden={isNavBarHidden} isMobile={isMobile} />
      <AppWrapper>
        <Navbar
          setIsNavBarHidden={setIsNavBarHidden}
          isNavBarHidden={isNavBarHidden}
          isMobile={isMobile}
          setIsMobile={setIsMobile}
        />
        <Hero />
        <MainContent isMobile={isMobile} />
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
