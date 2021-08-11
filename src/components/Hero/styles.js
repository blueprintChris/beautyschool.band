import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 1rem;

  @media (max-width: 1400px) {
    left: 10rem;
    top: 1.4rem;
    font-size: 30px;
  }

  @media (max-width: 1200px) {
    display: none;
  }

  @media (max-width: 800px) {
    right: auto;
    left: 2rem;
    display: flex;
  }
`;

export const Logo = styled.h1`
  margin: 0;
  color: white;
  font-family: BeautySchool, Arial, Helvetica, sans-serif;
  font-size: 40px;

  @media (max-width: 1400px) {
    font-size: 30px;
  }
`;
