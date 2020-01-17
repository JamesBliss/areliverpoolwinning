import React from 'react';
import get from 'lodash/get';

// Match
import Match from '../global/Match'

// styled
import {
  GroupWrapper,
  GroupTime
} from './GroupStyles';

//
const Group = ({data}) => {
  const { matches, displayDateFull } = data;

  return (
    <GroupWrapper>
      <GroupTime><span>{displayDateFull}</span></GroupTime>
      { matches.map((match) => {
        const homeTeamName= get(match, 'homeTeam.name', '-');
        const homeTeamScore= get(match, 'score.fullTime.homeTeam', '-');
        const awayTeamName = get(match, 'awayTeam.name', '-');
        const awayTeamScore = get(match, 'score.fullTime.awayTeam', '-');
        const id = get(match, 'id', '-');
        const status = get(match, 'status', '-');

        return (
          <>
            <Match
              homeTeamName={homeTeamName}
              homeTeamScore={homeTeamScore}
              awayTeamName={awayTeamName}
              awayTeamScore={awayTeamScore}
              status={status}
              id={ id }
            />
          </>
        )
      }) }
    </GroupWrapper>
  )
}

export default Group;