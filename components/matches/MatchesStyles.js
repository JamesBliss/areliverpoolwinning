import styled from 'styled-components';

// styled
export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  position: relative;
  background: #333;
  display: flex;
  flex-direction: column;
`;

export const Match = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding: 0 0 5vmin;

  &:last-child {
    padding: 0;
  }
`;