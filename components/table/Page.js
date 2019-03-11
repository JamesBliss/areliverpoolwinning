import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

// comps
import Back from '../global/Back';
import Table from './Table';

// styled
import {
  Wrapper
} from './PageStyles';

const query = gql`
  query competitionStandings($id: Int!, $filter: String) {
    competitionStandings(id: $id, filter: $filter) {
      standings {
        type
        table {
          position
          playedGames
          lost
          draw
          won
          points
          goalsFor
          goalsAgainst
          goalDifference
          team {
            name
            crestUrl
          }
        }
      }
    }
  }
`;

class Page extends React.PureComponent {
  render() {
    return (
      <Query query={ query } variables={ {
        id: this.props.id,
        filter: 'TOTAL'
      } }>
        {({ loading, error, data }) => {

          if (loading) return null;
          if (error) return null;

          const { standings } = data.competitionStandings;

          console.log(standings[0].table)

          return (
            <Wrapper>
              <Back />

              { standings.map(standing => (
                <Table data={standing.table} />
              ) ) }
            </Wrapper>
          )
        }}
      </Query>
    )
  }
}

export default Page;