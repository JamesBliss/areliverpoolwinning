import Head from 'next/head';
import gql from 'graphql-tag'
import get from 'lodash/get';
import styled from 'styled-components';

// styled components
const Match = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 2vmin 4vmin;

  background: linear-gradient(
    120deg,
    rgb(222, 222, 222) 0%,
    rgb(222, 222, 222) 50%,
    rgb(51, 51, 51) 50%,
    rgb(51, 51, 51) 100%
  ) 0% 0% / 100% 100%;

  & + & {
    border-top: 5px solid #000;
  }
`;

const Tags = styled.span`
  position: absolute;
  bottom: 15px;
  left: 50%;
  font-size: 0.8em;
  transform: translateX(-50%);
`;

const Pill = styled.span`
  font-size: 0.8em;
  padding: 5px 15px;
  background: #f2f2f2;
  border-radius: 20px;
  margin: 0 5px;
  white-space: nowrap;
  text-transform: capitalize;
`;

const Team = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 0;
  font-size: 1.2em;

  div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    padding: 0 15px;
  }

  @media(min-width: 640px) {
    font-size: 2.2em;
  }

  width: 50%;
  color: ${ ({colour}) => colour };
`;


// exported component
const Test = ({
  homeTeamName,
  homeTeamScore,
  awayTeamName,
  awayTeamScore,
  status,
  id
}) => {
  const labels = {
    IN_PLAY: "In play",
    POSTPONED: "Postponed",
    CANCELED: "Canceled",
    SUSPENDED: "Suspended",
    PAUSED: "Paused",
    FINISHED: "Finished"
  }
  return (
    <Match key={id}>
      <Team colour="rgb(51, 51, 51)">
        <div>{homeTeamName}</div> <span>{homeTeamScore !== null ? homeTeamScore : '-'}</span>
      </Team>
      <Team colour="rgb(222, 222, 222)">
        <span>{awayTeamScore !== null ? awayTeamScore : '-'}</span> <div>{awayTeamName}</div>
      </Team>
      <Tags>
        {labels[status] && <Pill>{labels[status]}</Pill>}
      </Tags>
    </Match>
  );
}

export default Test;
