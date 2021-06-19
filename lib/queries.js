import gql from "graphql-tag";

export const GET_NEXT_MATCH = gql`
  query nextMatch($id: Int!) {
    nextMatch(
      id: $id
    ) {
      id
      cached
      status
      time {
        days
        hours
        minutes
      }
      score {
        winner
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

export const GET_TABLE = gql`
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

export const GET_FIXTURES = gql`
  query competitionCurrentMatchday($id: Int!) {
    competitionCurrentMatchday(id: $id) {
      cached
      days {
        utcDate
        displayDate
        groupedMatches {
          utcDate
          displayDate
          displayDateFull
          until
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

export const GET_TEAM = gql`
  query team($id: Int!) {
    team(
      id: $id
    ) {
      name
      crestUrl
      tla
      shortName
    }
  }
`;