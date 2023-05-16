//
import { IDBMatch, Match } from "@/interfaces/db.types";

// Generic Fetcher for Football API
const getApi = async (route: string) => {
  const response = await fetch(`${process.env.NEXT_PRIVATE_API}${route}`, {
    next: { revalidate: 30 },
    headers: {
      "X-Auth-Token": process.env.NEXT_PRIVATE_API_KEY as string,
    },
  });

  return response.json();
};

// Generate API URL calls
function generateRoute(): string {
  const date = new Date();
  const offset = date.getTimezoneOffset();
  const today = new Date(date.getTime() - offset * 60 * 1000)
    .toISOString()
    .split("T")[0];

  // Calculating 1 year from now and formatting YYYY-MM-DD
  const result = new Date(date);
  result.setFullYear(result.getFullYear() + 1);
  const oneYearFromNow = new Date(result.getTime() - offset * 60 * 1000)
    .toISOString()
    .split("T")[0];

  return `/teams/${process.env.NEXT_PRIVATE_TEAM_ID}/matches?limit=500&dateFrom=${today}&dateTo=${oneYearFromNow}`;
}

function formatMatch(match: IDBMatch): Match {
  const { awayTeam, homeTeam, utcDate, score, status, id } = match;

  const teamID: number = parseInt(process.env.NEXT_PRIVATE_TEAM_ID || "64", 10);

  const liverpoolIsHome = homeTeam.id === teamID;
  let liverpoolResult = "LOSS";
  if (
    (liverpoolIsHome && score.winner === "HOME_TEAM") ||
    (!liverpoolIsHome && score.winner === "AWAY_TEAM")
  ) {
    liverpoolResult = "WIN";
  } else if (score.winner === "DRAW") {
    liverpoolResult = "DRAW";
  }

  return {
    id,
    awayTeam,
    homeTeam,
    utcDate,
    score: {
      status,
      liverpoolResult,
      winner: score.winner,
      home: score.fullTime.home,
      away: score.fullTime.away,
    },
  };
}

//
const getData = async (): Promise<Match> => {
  // Fetch from football API
  const matches = await getApi(generateRoute());
  const match = formatMatch(matches.matches[0]);

  // Return value
  return match;
};

export default getData;
