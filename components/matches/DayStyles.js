import styled from 'styled-components';

// styled
export const Block = styled.div`
  padding: 0.2em 6vmin;

  &:not(:last-child) {
    padding: 0.2em 6vmin 20vmin;
  }
`;

export const Day = styled.span`
  color: #fff;
  background: #1a1a1a;
  display: block;
  text-align: center;
  font-size: 4vmin;
  padding: 20px;
  z-index: 100;
`;