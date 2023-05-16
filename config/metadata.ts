const metadata = {
  // https://beta.nextjs.org/docs/api-reference/metadata#metadata-fields
  title: {
    default: "Find out if Liverpool are winning or not!",
    template: "%s | Are Liverpool Winning?",
  },
  description: "Find out if Liverpool are winning or not!",
  url: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`,

  //  https://beta.nextjs.org/docs/api-reference/metadata#twitter
  twitter: {
    title: "Are Liverpool Winning?",
    cardType: "summary_large_image",
  },

  // https://beta.nextjs.org/docs/api-reference/metadata#opengraph
  openGraph: {
    title: "Are Liverpool Winning?",
    description: "Find out if Liverpool are winning or not!",
    type: "website",
    url: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`,
    siteName: "Are Liverpool Winning?",
    locale: "en",
    images: [
      {
        url: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/og`,
        width: 1200,
        height: 675,
      },
    ],
  },

  // https://beta.nextjs.org/docs/api-reference/metadata#viewport
  viewport: {
    width: "device-width",
    initialScale: 1,
  },

  // https://beta.nextjs.org/docs/api-reference/metadata#robots
  robots: {
    index: true,
    follow: true,
  },

  // https://beta.nextjs.org/docs/api-reference/metadata#icons
  icons: {
    icon: "./favicon-16x16.png",
    shortcut: "./favicon-32x32.png",
    apple: "./apple-touch-icon.png",
  },

  // https://beta.nextjs.org/docs/api-reference/metadata#manifest
  manifest: "./site.webmanifest",

  // https://beta.nextjs.org/docs/api-reference/metadata#themecolor
  themeColor: "white",
};

export default metadata;
