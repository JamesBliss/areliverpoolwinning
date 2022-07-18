import React from 'react';

//
import {
  TeamName,
  Score
} from './TeamStyles';

const Team = ({ team, score }) => {
  const tla = team.tla;
  const crestUrl = team?.crestUrl || '';

  const colorOne = team?.colours?.[0].hex || '#fff';
  const colorOneContrast = team?.colours?.[0].textContrast || '#333';

  const colorTwo = team?.colours?.[1]?.hex || '#000';
  const colorTwoContrast = team?.colours?.[1]?.textContrast || '#fff';

  return (
    <TeamName
      imageSrc={ crestUrl }
      colorOne={ colorOne }
      colorTwo={ colorTwo }
      textColour={ colorOneContrast }
    >
      { tla }
      <Score textColour={ colorTwoContrast }>
        { score === null ? '-' : score }
      </Score>
    </TeamName>
  )
}

Team.defaultProps = {
  score: null
}

export default Team;
