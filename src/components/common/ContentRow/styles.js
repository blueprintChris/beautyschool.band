import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 4rem;

  h1 {
    margin: 0;
    font-size: 4rem;
    color: ${props => props.theme.colours.lightGold};
    margin-bottom: 1rem;
    font-family: BeautySchool, Arial, Helvetica, sans-serif;
    text-align: left;
    width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
