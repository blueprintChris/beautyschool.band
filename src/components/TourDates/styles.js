import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EventDate = styled.div`
  font-size: 1.6rem;
`;

export const EventVenue = styled.div``;

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
`;

export const Event = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid white;
`;
