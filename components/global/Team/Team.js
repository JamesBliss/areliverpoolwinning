import React from 'react';
import get from 'lodash/get';

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

    const tla = team.tla;
    const crestUrl = get(team, 'crestUrl', '')
    const colorOne = get(team, 'colours[0].hex', '#fff')
    const colorOneContrast = get(team, 'colours[0].textContrast', '#333')
    const colorTwo = get(team, 'colours[1].hex', '#000')
    const colorTwoContrast = get(team, 'colours[1].textContrast', '#fff')

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
}

Team.defaultProps = {
  score: null
}

export default Team;
