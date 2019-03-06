import styled from 'styled-components';

// styled
export const GroupWrapper = styled.div`

`;

export const GroupTime = styled.div`
  color: #333;
  font-size: 4vmin;
  background: #fff;
  padding: 0.3em 6vmin;
  display: inline-block;
  margin: 0 -2vmin;
  transform: skew(-35deg);

  span {
    display: block;
    transform: skew(35deg);
  }
`;

export const Match = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;