import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import TrackingCode from '../lib/minimal-ga';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          { this.props.styleTags }
          <meta name='viewport' content='initial-scale=1, viewport-fit=cover' />
        </Head>
        <body>
          <Main />
          <script src='https://cdn.polyfill.io/v2/polyfill.min.js' />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: TrackingCode
            }}
          />
        </body>
      </html>
    );
  }
}
