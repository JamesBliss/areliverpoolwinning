import type { FC, ReactNode } from "react";
import SEO from "@components/Meta.SEO";

interface Props {
  children?: ReactNode;
}
const Head: FC<Props> = ({ children }) => {
  return (
    <SEO>
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />

      {/* <link rel="manifest" href="/site.webmanifest" key="site-manifest" /> */}
      <meta
        name="google-site-verification"
        content="nYZ6wo1Jk1uswFwbUcWtZcTouCkQJWm0X9cFX5CvA_U"
      />
      <link rel="shortcut icon" href="/favicon.ico"></link>
      {children}
    </SEO>
  );
};

export default Head;
