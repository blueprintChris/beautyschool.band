import React from 'react';
import { Button } from './styles';

const Hamburger = props => {
  const { handleClick, isHidden } = props;
  return (
    <Button onClick={handleClick}>
      {isHidden ? (
        <svg viewBox='0 0 100 80' width='40' height='40' fill='white'>
          <rect width='100' height='20' rx='8'></rect>
          <rect y='30' width='100' height='20' rx='8'></rect>
          <rect y='60' width='100' height='20' rx='8'></rect>
        </svg>
      ) : (
        <svg width='40' height='40' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='white'>
          <path d='m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z' />
        </svg>
      )}
    </Button>
  );
};

export default Hamburger;
