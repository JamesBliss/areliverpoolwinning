import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #c8c8c8;
`;

export const Text = styled.span`
  position: relative;
  z-index: 5;
  font-size: 8vmin;
  line-height: 1.1em;
`;

//
const query = gql`
  query nextMatch($id: Int!) {
    nextMatch(
      id: $id
    ) {
      status
      score {
        winner
      }
      homeTeam {
        name
      }
      awayTeam {
        name
      }
    }
  }
`;

const match = () => (
  <Query query={query} variables={ { id: 64 } } pollInterval={60000} >
    {({ loading, error, data }) => {

      if (loading) return <Wrapper><Text>🏗</Text></Wrapper>;
      if (error) return <Wrapper><Text>☠️</Text></Wrapper>;

      const {status, score, homeTeam, awayTeam} = data.nextMatch;

      if (status === 'SCHEDULED') {
        return <Wrapper><Text>⏳</Text></Wrapper>
      }

      if (score.winner === 'DRAW') {
        return <Wrapper><Text>😐</Text></Wrapper>
      }

      if (score.winner === 'HOME_TEAM' && homeTeam.toLowerCase().indexOf('liverpool') > -1) {
        return <Wrapper><Text>🙂</Text></Wrapper>
      }

      if (score.winner === 'AWAY_TEAM' && awayTeam.toLowerCase().indexOf('liverpool') > -1) {
        return <Wrapper><Text>🙂</Text></Wrapper>
      }

      return <Wrapper><Text>😟</Text></Wrapper>
    }}
  </Query>
);

export default match;