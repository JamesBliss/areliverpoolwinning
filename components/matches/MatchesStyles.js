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
`;

export const Block = styled.div`
  padding: 0 2vmin;
`;

export const Day = styled.span`
  color: #fff;
  background: #1a1a1a;
  display: block;
  text-align: center;
  font-size: 8vmin;
  padding: 20px;
  position: sticky;
  top: 0;
  z-index: 100;
  margin: 0 -2vmin 5vmin;
`;