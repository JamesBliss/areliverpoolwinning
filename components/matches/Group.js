import React from 'react';

// comps
import Team from '../global/Team';

// styled
import {
  GroupWrapper,
  GroupTime,
  Match
} from './GroupStyles';

//
class Group extends React.PureComponent {
  render() {
    const { data } = this.props;
    const { matches, displayDateFull } = data;

    return (
      <GroupWrapper>
        <GroupTime><span>{displayDateFull}</span></GroupTime>
        { matches.map((match) => {
          const { homeTeam, awayTeam, score } = match;

          return (
            <Match key={`${homeTeam.id}-${awayTeam.id}`}>
              <Team id={homeTeam.id} team={homeTeam} score={score.fullTime.homeTeam} />
              <Team id={awayTeam.id} team={awayTeam} score={score.fullTime.awayTeam} />
            </Match>
          )
        }) }
      </GroupWrapper>
    )


  }
}

export default Group;