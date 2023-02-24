import React from "react";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import type { AppProps } from "next/app";
import NProgress from "nprogress";

//
import "../global.css";

// components
import Head from "@components/Meta.Head";
import AnalyticsWrapper from "@components/Meta.Analytics";

//
const Noop: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>;

// export
export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  React.useEffect(() => {
    const handleStart = (url: string) => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };

    const handleStop = () => {
      window.scrollTo(0, 0);
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

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
}
