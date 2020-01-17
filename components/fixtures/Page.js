import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";


// comps
import Back from '../global/Back';
import Day from './Day';

// styled
import {
  Wrapper
} from './PageStyles';


const query = gql`
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

class Page extends React.PureComponent {
  render() {
    return (
      <Query query={query} variables={{ id: this.props.id }} pollInterval={ 10000 }>
        {({ loading, error, data }) => {

          if (loading) return null;
          if (error) return null;

          const { days } = data.competitionCurrentMatchday;

          return (
            <Wrapper>
              { days.map((day) => ( <Day key={ day.utcDate  } data={ day } /> ) ) }
            </Wrapper>
          )
        }}
      </Query>
    )
  }
}

export default Page;