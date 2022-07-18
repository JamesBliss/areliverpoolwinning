import React from 'react';

// styled
import { TableWrapper } from './TableStyles';

import Test from './Test';
import Club from './Club';

//
class Table extends React.PureComponent {
  render() {
    const { data } = this.props;

    const columns = [
      {
        Header: '',
        data: 'position',
      },
      {
        head: '',
        data: 'playedGames',
        render: ({ item }) => <Club data={item} />,
      },
      {
        head: 'PG',
        data: 'playedGames',
      },
      {
        head: 'GD',
        data: 'goalDifference',
      },
      {
        head: 'P',
        data: 'points',
      },
    ];

    return (
      <TableWrapper>
        <Test
          columns={columns}
          data={data}
          theme={{
            header: {
              fontSize: '3vmin',
              padding: '2vmin',
            },
            row: {
              fontSize: '3vmin',
              padding: '2vmin',
            },
          }}
          rowProps={{
            gridTemplateColumns: '6vmin 1fr 10vmin 10vmin 10vmin',
          }}
        />
      </TableWrapper>
    );
  }
}

export default Table;
