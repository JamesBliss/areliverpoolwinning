import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

// comps
import Team from './Team';
import Back from './Back';

// styled
import {
  Wrapper
} from './MatchStyles';

//
const query = gql`
  query nextMatch($id: Int!) {
    nextMatch(
      id: $id
    ) {
      id
      status
      minute
      time {
        days
        hours
        minutes
      }
      score {
        winner
        fullTime {
          homeTeam
          awayTeam
        }
      }
      homeTeam {
        name
        id
      }
      awayTeam {
        name
        id
      }
    }
  }
`;

class Match extends React.PureComponent {
  render() {
    return (
      <Query query={query} variables={{ id: 64 }} pollInterval={5000}>
        {({ loading, error, data }) => {

          if (loading) return null;
          if (error) return Router.push('/');

          const { score, homeTeam, awayTeam, minute, status } = data.nextMatch;

          return (
            <Wrapper>
              <Team id={homeTeam.id} team={homeTeam} score={score.fullTime.homeTeam} />
              <Team id={awayTeam.id} team={awayTeam} score={score.fullTime.awayTeam}/>
            </Wrapper>
          )
        }}
      </Query>
    )
  }
}

export default Match;