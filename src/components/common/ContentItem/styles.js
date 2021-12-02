import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;

  h1 {
    margin: 0;
    font-size: 4rem;
    color: ${props => props.theme.colours.lightGold};
    margin-bottom: 1rem;
    font-family: BeautySchool, Arial, Helvetica, sans-serif;
    text-align: left;
    width: 100%;
  }

  &:last-child {
    padding-right: 0;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 0;
    padding-bottom: 2rem;

    &:last-child {
      padding-bottom: 0;
    }
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  img {
    max-height: 40px;
  }
`;
