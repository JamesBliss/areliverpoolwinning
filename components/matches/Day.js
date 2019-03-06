import React from 'react';

// components
import Group from './Group';

// styled
import {
  Block
} from './DayStyles';

//
class Matches extends React.PureComponent {
  render() {
    const { data } = this.props;
    const { utcDate, groupedMatches } = data;

    return (
      <Block key={ utcDate }>
        { groupedMatches.map((group) =>  ( <Group key={ group.utcDate } data={ group } /> ) ) }
      </Block>
    )
  }
}

export default Matches;