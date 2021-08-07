import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  /* background: url('images/mirror.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 1rem;
  z-index: 1;
`;

export const Logo = styled.h1`
  margin: 0;
  color: white;
  font-family: BeautySchool;
  font-size: 40px;
`;
