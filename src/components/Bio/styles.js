import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  background: ${(props) => props.theme.colours.black};
  padding: 2rem;
  box-sizing: border-box;

  h1 {
    margin: 0;
    font-size: 4rem;
    color: ${(props) => props.theme.colours.lightGold};
    margin-bottom: 1rem;
  }

  p {
    margin: 0;
    color: white;
    font-size: 2rem;
  }
`;

export const Content = styled.div`
  border: solid;
  border-width: 1px;
  /* border-image-slice: 1;
  border-image-source: linear-gradient(180deg, rgba(127, 83, 31, 1) 0%, rgba(201, 143, 33, 1) 100%); */
  border-color: ${(props) => props.theme.colours.darkGold};
  padding: 1rem;
`;
