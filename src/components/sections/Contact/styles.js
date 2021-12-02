import styled from 'styled-components';

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }

  a {
    text-align: left;
    width: 100%;
    color: white;
    text-decoration: none;
    font-size: 20px;

    transition: 0.2s ease;
    transition-property: color;

    &:hover {
      color: ${props => props.theme.colours.lightGold};
    }
  }

  h2 {
    margin: 0;
    font-size: 2rem;
    color: white;
    font-family: BeautySchool, Arial, Helvetica, sans-serif;
    text-align: left;
    width: 100%;
  }
`;
