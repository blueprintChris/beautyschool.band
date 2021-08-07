import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colours.black};
  padding: 2rem;
  box-sizing: border-box;

  h1 {
    margin: 0;
    font-size: 4rem;
    color: ${props => props.theme.colours.lightGold};
    margin-bottom: 1rem;
  }

  p {
    margin: 0;
    color: white;
    font-size: 2rem;
  }
`;

export const Content = styled.div`
  width: 1140px;
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;
`;

export const Row = styled.div`
  width: 1140px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Bio = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  border: 1px solid ${props => props.theme.colours.darkGold};
  font-family: Futura;
  font-weight: 700;

  h1 {
    font-family: BeautySchool;
    letter-spacing: 1px;
    font-weight: 400;
  }
`;
