import React from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import MainContent from './components/MainContent/MainContent';
import { AppWrapper } from './styles';
import { theme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Navbar />
        <Hero />
        <MainContent />
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
