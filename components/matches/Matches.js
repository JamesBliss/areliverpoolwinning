import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Router from 'next/router'

// // comps
import Team from './Team';
import Back from './Back';

// styled
import {
  Wrapper,
  Match,
  Day,
  Block
} from './MatchesStyles';


const query = gql`
  query competitionCurrentMatchday($id: Int!) {
    competitionCurrentMatchday(id: $id) {
      days {
        utcDate
        displayDate
        groupedMatches {
          utcDate
          displayDate
          matches {
            time {
              days
              hours
              minutes
            }
            homeTeam {
              id
              name
              crestUrl
              tla
              shortName
              colours {
                hex
                textContrast
              }
            }
            awayTeam {
              id
              name
              crestUrl
              tla
              shortName
              colours {
                hex
                textContrast
              }
            }
            score {
              winner
              fullTime{
                homeTeam
                awayTeam
              }
            }
          }
        }
      }
    }
  }
`;

class Matches extends React.PureComponent {
  render() {
    return (
      <Query query={query} variables={{ id: 2021 }} pollInterval={ 10000 }>
        {({ loading, error, data }) => {

          if (loading) return null;
          if (error) return null;

          const { days } = data.competitionCurrentMatchday;

          return (
            <Wrapper>
              <Back />
              { days.map((day) => {
                const { utcDate, displayDate, groupedMatches } = day;

                return (
                  <Block key={ utcDate }>
                    <Day>{displayDate}</Day>

                    { groupedMatches.map((groups) => {
                      const { matches } = groups;
                      return matches.map((match) => {
                        const { homeTeam, awayTeam, score } = match;
                        return (
                          <Match key={`${homeTeam.id}-${awayTeam.id}`}>
                            <Team id={homeTeam.id} team={homeTeam} score={score.fullTime.homeTeam} />
                            <Team id={awayTeam.id} team={awayTeam} score={score.fullTime.awayTeam} />
                          </Match>
                        )
                      });
                    })}
                  </Block>
                )
              } ) }
            </Wrapper>
          )
        }}
      </Query>
    )
  }
}

export default Matches;