import styled from 'styled-components';

export const Link = styled.a`
  display: flex;

  align-items: center;
  height: 100%;
  width: 100%;

  img {
    max-width: 100%;
    max-height: 450px;

    @media (max-width: 1024px) {
      width: 100%;
      max-height: 100%;
    }
  }
`;
