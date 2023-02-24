import React from 'react';
import Router from 'next/router';
import { FC, ReactNode } from "react";
import type { AppProps } from "next/app";
import NProgress from 'nprogress';

//
import "../global.css";

// components
import Head from "@components/Meta.Head";
import Page from '@components/Layout.Page';
import AnalyticsWrapper from "@components/Meta.Analytics";

//
Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
  window.scrollTo(0, 0);
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

//
const Noop: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>;


// export
export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;

  return (
    <>
      <Head />
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
        <AnalyticsWrapper />
      </Layout>
    </>
  );
};