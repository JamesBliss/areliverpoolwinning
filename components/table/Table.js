import React from 'react';
import ReactTable from 'react-table';

// styled
import { TableWrapper } from './TableStyles';

//
class Table extends React.PureComponent {
  render() {
    const { data } = this.props;

    return (
      <TableWrapper>
        <ReactTable
          data={ data}
          defaultPageSize={ data.length}
          columns={[
            {
              Header: '',
              accessor: 'position'
            },
            {
              Header: 'CLUB',
              id: 'name',
              accessor: 'thing',
              Cell: ({original}) => {
                return (
                  <span>
                    <img
                      style={{ height: '20px', width: '20px' }}
                      src={original.team.crestUrl}
                      alt={original.team.name}
                    />
                    {original.team.name}
                  </span>
                )
              }
            },
            {
              Header: 'MP',
              accessor: 'playedGames'
            },
            {
              Header: 'L',
              accessor: 'lost'
            },
            {
              Header: 'D',
              accessor: 'draw'
            },
            {
              Header: 'W',
              accessor: 'won'
            },
            {
              Header: 'GF',
              accessor: 'goalsFor'
            },
            {
              Header: 'GA',
              accessor: 'goalsAgainst'
            },
            {
              Header: 'GD',
              accessor: 'goalDifference'
            },
            {
              Header: 'P',
              accessor: 'points'
            }
          ]}
        />
      </TableWrapper>
    )
  }
}

export default Table;