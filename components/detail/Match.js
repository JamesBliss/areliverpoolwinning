import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Router from 'next/router'
import Pressure from 'react-pressure';

// comps
import Team from './Team';

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
    const { force } = this.props;

    if (force >= 0.5) {
      Router.push('/');
    }

    return (
      <Query query={query} variables={{ id: 64 }} pollInterval={5000}>
        {({ loading, error, data }) => {

          if (loading) return null;
          if (error) return Router.push('/');

          const { score, homeTeam, awayTeam } = data.nextMatch;

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

export default Pressure(Match);