import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    height: 100%;
    background: #eaeaea;
  }

  * {
    box-sizing: border-box;
    outline: 0;
  }

  *::before,
  *::after {
    box-sizing: inherit;
  }

  body > div,
  body {
    height: 100%;
    margin: 0;
  }

  body {
    color: #4a4a4a;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  }

  main {
    display: block;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  a {
    background-color: transparent;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }

  /* styles */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #363636;
    font-weight: 200;
    line-height: 1.125;
  }

  h1 {
    font-size: 2em;
    margin-bottom: 0.5em;
  }

  h1:not(:first-child) {
    margin-top: 1em;
  }

  h2 {
    font-size: 1.75em;
    margin-bottom: 0.5714em;
  }

  h2:not(:first-child) {
    margin-top: 1.1428em;
  }

  h3 {
    font-size: 1.5em;
    margin-bottom: 0.6666em;
  }

  h3:not(:first-child) {
    margin-top: 1.3333em;
  }

  h4 {
    font-size: 1.25em;
    margin-bottom: 0.8em;
  }

  h5 {
    font-size: 1.125em;
    margin-bottom: 0.8888em;
  }

  h6 {
    font-size: 1em;
    margin-bottom: 1em;
  }

  .button {
    background-color: white;
    border-color: #dbdbdb;
    border-width: 1px;
    color: #363636;
    cursor: pointer;
    justify-content: center;
    padding-bottom: calc(0.375em - 1px);
    padding-left: 0.75em;
    padding-right: 0.75em;
    padding-top: calc(0.375em - 1px);
    text-align: center;
    white-space: nowrap;
  }

  .button:hover {
    border-color: #b5b5b5;
    color: #363636;
  }

  .button:active {
    border-color: #4a4a4a;
    color: #363636;
  }

  .button:focus:not(:active) {
    box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
  }

  .is-link {
    background-color: #3273dc;
    border-color: transparent;
    color: #fff;
  }

  .is-link:hover {
    background-color: #276cda;
    border-color: transparent;
    color: #fff;
  }

  .is-link:focus {
    border-color: transparent;
    color: #fff;
  }

  .is-link:focus:not(:active) {
    box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
  }

  .is-link:active {
    background-color: #2366d1;
    border-color: transparent;
    color: #fff;
  }

`;

export default GlobalStyle;
