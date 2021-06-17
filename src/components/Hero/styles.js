import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: url('images/mirror.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  border: solid;
  border-width: 6px;
  border-image-slice: 1;
  border-image-source: linear-gradient(180deg, rgba(127, 83, 31, 1) 0%, rgba(201, 143, 33, 1) 100%);
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.2);
`;
