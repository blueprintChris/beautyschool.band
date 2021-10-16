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
`;

export const Content = styled.div`
  max-width: 1000px;
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
