import React from 'react';
import { Button } from './styles';

const Hamburger = props => {
  const { handleClick } = props;
  return (
    <Button onClick={handleClick}>
      <svg viewBox='0 0 100 80' width='40' height='40' fill='white'>
        <rect width='100' height='20' rx='8'></rect>
        <rect y='30' width='100' height='20' rx='8'></rect>
        <rect y='60' width='100' height='20' rx='8'></rect>
      </svg>
    </Button>
  );
};

export default Hamburger;
