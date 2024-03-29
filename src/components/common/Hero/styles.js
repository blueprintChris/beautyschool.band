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
  top: 0;
  bottom: 0;

  @media (max-width: 1400px) {
    font-size: 30px;
  }

  @media (max-width: 800px) {
    display: flex;

    img {
      height: 100px;
    }
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
