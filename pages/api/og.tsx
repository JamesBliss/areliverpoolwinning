import { ImageResponse, NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title");

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background: "black",
          justifyContent: "center",
        }}
      >
        {/* Icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 220,
          }}
        >
          <svg
            x="0px"
            y="0px"
            height="1em"
            width="1em"
            viewBox="0 0 140 140"
            xmlns="http://www.w3.org/2000/ svg"
          >
            <g>
              <circle fill="#ffffff" cx="70" cy="70" r="70" />
              <path
                fill="#333333"
                d="M77,53.6l18.8-26.8L73,5.5L41.1,16.9L42.2,47L77,53.6z M65.6,117.7l17.2,18l30-12.8l4.9-26.5 l-29.8-3.7L65.6,117.7z"
              />
              <path
                fill="#333333"
                d="M4.4,95l0.4,0.5C15,121.5,40.4,140,70.1,140c38.6,0,69.9-31.3,69.9-69.9 C140,31.3,108.7,0,69.9,0C31.3,0,0,31.3,0,69.9c0,8.6,1.5,16.9,4.4,24.5V95z M3.7,69.9c0-8.8,1.7-17.3,4.9-25l16.5-20.5l4.3-6.9 C40.7,8.8,54.7,3.7,69.9,3.7H71l7.4,2.8l16.3,2.1c10.5,4.2,19.6,11.1,26.6,19.6L118.7,40l10.7,30.3l6.9,1.7 c-1,35.6-30.4,64.4-66.3,64.4c-17.9,0-34.1-7.1-46.1-18.7l12.8-11.1L24.4,75L5.2,68.3L4.8,82.4C4.1,78.4,3.7,74.3,3.7,69.9z"
              />
              <path
                opacity="0.4"
                d="M65.5,139c35.3-2.9,63.2-32.5,63.2-68.6S100.9,4.7,65.5,1.8c1.8-0.1,3.7-0.2,5.6-0.2 c38,0,68.8,30.8,68.8,68.8s-30.8,68.8-68.8,68.8C69.2,139.3,67.4,139.2,65.5,139z"
              />
            </g>
            <g>
              <g transform="translate(24.000000, 18.000000)">
                <ellipse cx="46" cy="68" rx="9" ry="10" />
              </g>
              <g transform="translate(0.000000, 13.000000)" opacity="0.2">
                <circle cx="40" cy="61" r="3" />
                <circle cx="100" cy="61" r="3" />
              </g>
              <g transform="translate(3.000000, 0.000000)">
                <circle cx="41.5" cy="62.5" r="4.5" />
                <circle cx="93.5" cy="62.5" r="4.5" />
              </g>
            </g>
          </svg>
        </div>

        {/* Text */}
        <div
          style={{
            marginTop: 20,
            marginLeft: 80,
            marginRight: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 80,
            fontStyle: "normal",
            fontFamily:
              '-apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
            color: "white",
            lineHeight: "74px",
            whiteSpace: "pre-wrap",
            textTransform: "uppercase",
          }}
        >
          {title || "Are Liverpool winning?"}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 675,
    }
  );
}
