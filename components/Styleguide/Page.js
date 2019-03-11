import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

// comps
import Back from '../global/Back';
import Team from '../global/Team';

// styled
import {
  Wrapper
} from './PageStyles';

// mock objects
const teamWithoutColours = {
  "name": "Liverpool FC",
  "tla": "LIV",
  "shortName": "Liverpool"
}
const teamWithColours = {
  "name": "Liverpool FC",
  "crestUrl": "http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg",
  "tla": "LIV",
  "shortName": "Liverpool",
  "colours": [ {
    "hex": "#D40B2B",
    "textContrast": "#ffffff",
  },
  {
    "hex": "#04A49C",
    "textContrast": "#ffffff",
  },
  {
    "hex": "#33B6AD",
    "textContrast": "#333333",
  },
  {
    "hex": "#90D7D2",
    "textContrast": "#333333",
  },
  {
    "hex": "#FAE961",
    "textContrast": "#333333",
  },
  {
    "hex": "#ED98A8",
    "textContrast": "#333333",
  },
  {
    "hex": "#BFE8E6",
    "textContrast": "#333333"
  },
  {
    "hex": "#FCE6A9",
    "textContrast": "#333333"
  } ]
}


class Page extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Back />
        <h1>Typography:</h1>
        <h1>
          H1 with a <br />
          Line break
        </h1>
        <h2>
          H2 with a <br />
          Line break
        </h2>
        <h3>
          H3 with a <br />
          Line break
        </h3>
        <h4>
          H4 with a <br />
          Line break
        </h4>
        <p>
          p with a <br />
          Line break
        </p>
        <h1>Buttons:</h1>
        <button className='button'>A button!</button>
        <button className='button is-link'>A button!</button>
        <h1>Team:</h1>
        <Team team={ teamWithColours } />
        <Team team={ teamWithoutColours } />
      </Wrapper>
    )
  }
}

export default Page;