import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import MainContent from './components/MainContent/MainContent';
import { AppWrapper, GlobalStyle } from './styles';
import { theme } from './theme';

const App = () => {
  const [isNavBarHidden, setIsNavBarHidden] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle isNavBarHidden={isNavBarHidden} />
      <AppWrapper>
        <Navbar setIsNavBarHidden={setIsNavBarHidden} isNavBarHidden={isNavBarHidden} />
        <Hero />
        <MainContent />
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
