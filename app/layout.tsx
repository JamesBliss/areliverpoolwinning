import "./global.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

// config
import siteMetadata from "@config/metadata";

export const metadata: Metadata = siteMetadata;

//
const Layout = ({ children }: { children?: ReactNode }) => (
  <html lang="en">
    <body>
      {children}
      <Analytics />
    </body>
  </html>
);
export default Layout;
