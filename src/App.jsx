import React from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Bio from './components/Bio/Bio';
import { theme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Navbar />
        <Hero />
        <Bio />
      </div>
    </ThemeProvider>
  );
};

export default App;
