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

  p {
    margin: 0;
    color: white;
    font-size: 2rem;
  }
`;

export const Content = styled.div`
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  font-weight: 700;

  p {
    word-break: break-word;
  }
`;

export const ImgLink = styled.a`
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

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;

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
