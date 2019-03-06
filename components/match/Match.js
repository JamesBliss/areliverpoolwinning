import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Router from 'next/router'

// // comps
import Team from '../global/Team';
import Back from '../global/Back';

// styled
import {
  Wrapper
} from './MatchStyles';


const TEAM_QUERY = gql`
  query team($id: Int!) {
    team(
      id: $id
    ) {
      name
      crestUrl
      tla
      shortName
      colours {
        hex
        textContrast
      }
    }
  }
`;


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
  renderTeam({ id, score }) {
    return (
      <Query query={ TEAM_QUERY } variables={{ id }}>
        {({ loading, error, data }) => {

          if (loading) return null;
          if (error) return null;

          return (
            <Team id={id} team={ data.team } score={ score }/>
          )
        }}
      </Query>
    )
  }

  render() {
    return (
      <Query query={query} variables={{ id: 64 }} pollInterval={5000}>
        {({ loading, error, data }) => {

          if (loading) return null;
          if (error) return Router.push('/');

          const { score, homeTeam, awayTeam, minute, status } = data.nextMatch;

          return (
            <Wrapper>
              <Back minute={minute} status={status} />
              { this.renderTeam({ id: homeTeam.id, score: score.fullTime.homeTeam }) }
              { this.renderTeam({ id: awayTeam.id, score: score.fullTime.awayTeam }) }
            </Wrapper>
          )
        }}
      </Query>
    )
  }
}

export default Match;