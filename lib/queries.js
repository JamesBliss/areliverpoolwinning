import gql from "graphql-tag";

export const GET_NEXT_MATCH = gql`
  query nextMatchByID($id: Int!) {
    nextMatchByID(
      id: $id
    ) {
      errors {
        call
        message
        errorCode
      }
      data {
        id
        cachedUntil
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
          crestUrl
          tla
          shortName
        }
        awayTeam {
          name
          id
          crestUrl
          tla
          shortName
        }
      }
    }
  }
`;

export const GET_TABLE = gql`
  query competitionStandings($id: Int!) {
    competitionStandings(id: $id) {
      errors {
        call
        message
        errorCode
      }
      data {
        cachedUntil
        cached
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
  }
`;

export const GET_FIXTURES = gql`
  query competitionCurrentMatchday($id: Int!) {
    competitionCurrentMatchday(id: $id) {
      errors {
        call
        message
        errorCode
      }
      data {
        cached
        cachedUntil
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
              }
              awayTeam {
                id
                name
                crestUrl
                tla
                shortName
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
  }
`;
