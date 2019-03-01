import React from 'react';

//
import {
  TeamName,
  Score
} from './TeamStyles';

class Team extends React.PureComponent {
  render() {
    const {
      team, score
    } = this.props;

    const crestUrl = team.crestUrl;
    const tla = team.tla;

    return (
      <TeamName
        imageSrc={ crestUrl }
        colorOne={ team.colours[0].hex }
        colorTwo={ team.colours[1].hex }
        textColour={ team.colours[0].textContrast }
      >
        { tla }
        <Score
          textColour={ team.colours[1].textContrast }
        >
          {score === null ? '-' : score}
        </Score>
      </TeamName>
    )
  }
}

export default Team;
