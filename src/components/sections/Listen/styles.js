import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const SpotifyPlayer = styled.iframe`
  width: 100%;
  overflow: auto;
  border: 0;

  &:nth-child(2) {
    margin-bottom: 1rem;
  }
`;
