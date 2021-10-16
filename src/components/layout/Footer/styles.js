import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: black;
  box-sizing: border-box;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  border-top: 1px solid white;
  color: white;
  font-size: 16px;
  padding-top: 1rem;
  box-sizing: border-box;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;

  img {
    margin-right: 2rem;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  color: #aaaaaa;
  font-size: 1.2rem;

  span {
    text-align: end;
  }

  a {
    color: #aaaaaa;
    text-decoration: none;
  }
`;
