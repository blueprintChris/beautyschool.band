import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  color: white;
`;

export const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EventDate = styled.div`
  font-size: 1.8rem;
`;

export const EventVenue = styled.div`
  font-size: 1.4rem;
`;

export const EventButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  border: 1px solid white;
  color: ${props => props.theme.colours.lightGold};
  cursor: pointer;
  padding: 0 2rem;
  text-decoration: none;
  font-size: 1.8rem;

  &:hover {
    color: black;
    background-color: white;
  }
`;

export const Event = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid white;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledText = styled.p`
  font-size: 1.8rem;
  margin: 0;
`;
