export const ResultType = {
  DRAW: "DRAW",
  HOME_TEAM: "HOME_TEAM",
  AWAY_TEAM: "AWAY_TEAM",
} as const;

export type ResultType = (typeof ResultType)[keyof typeof ResultType];

// https://docs.football-data.org/general/v4/match.html#_enums
export const statusType = {
  SCHEDULED: "SCHEDULED", // Time and Date planned
  TIMED: "TIMED", // Time and Date Finalised
  CANCELLED: "CANCELLED", // Game is cancelled
  IN_PLAY: "IN_PLAY", // Live and in an active half of football
  PAUSED: "PAUSED", // Half time
  LIVE: "LIVE", // Either IN_PLAY or PAUSED
  FINISHED: "FINISHED", // Game is complete
} as const;

export type statusType = (typeof statusType)[keyof typeof statusType];

// https://docs.football-data.org/general/v4/match.html#_enums
export const stageType = {
  FINAL: "FINAL",
  THIRD_PLACE: "THIRD_PLACE",
  SEMI_FINALS: "SEMI_FINALS",
  QUARTER_FINALS: "QUARTER_FINALS",
  LAST_16: "LAST_16",
  LAST_32: "LAST_32",
  LAST_64: "LAST_64",
  ROUND_4: "ROUND_4",
  ROUND_3: "ROUND_3",
  ROUND_2: "ROUND_2",
  ROUND_1: "ROUND_1",
  GROUP_STAGE: "GROUP_STAGE",
  PRELIMINARY_ROUND: "PRELIMINARY_ROUND",
  QUALIFICATION: "QUALIFICATION",
  QUALIFICATION_ROUND_1: "QUALIFICATION_ROUND_1",
  QUALIFICATION_ROUND_2: "QUALIFICATION_ROUND_2",
  QUALIFICATION_ROUND_3: "QUALIFICATION_ROUND_3",
  PLAYOFF_ROUND_1: "PLAYOFF_ROUND_1",
  PLAYOFF_ROUND_2: "PLAYOFF_ROUND_2",
  PLAYOFFS: "PLAYOFFS",
  REGULAR_SEASON: "REGULAR_SEASON",
  CLAUSURA: "CLAUSURA",
  APERTURA: "APERTURA",
  CHAMPIONSHIP_ROUND: "CHAMPIONSHIP_ROUND",
  RELEGATION_ROUND: "RELEGATION_ROUND",
} as const;

export type stageType = (typeof stageType)[keyof typeof stageType];

export interface IDBTeam {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
}

export interface IDBScore {
  winner?: ResultType;
  duration: string;
  fullTime: {
    home: number;
    away: number;
  };
  halfTime: {
    home: number;
    away: number;
  };
}

export interface IDBReferee {
  id: number;
  name: string;
  type: string;
  nationality: string;
}

export interface IDBMatch {
  area: {
    id: number;
    name: string;
    code: string;
    flag: string;
  };
  competition: {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem: string;
  };
  season: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner?: string;
  };
  id: number;
  utcDate: string;
  status: statusType;
  matchday: number;
  stage: stageType;
  lastUpdated: string;
  homeTeam: IDBTeam;
  awayTeam: IDBTeam;
  score: IDBScore;
  referees: IDBReferee;
}

export interface IDBMatches {
  filters: {
    dateFrom: string;
    dateTo: string;
    permission: string;
    limit: number;
  };
  resultSet: {
    count: number;
    competitions: string;
    first: string;
    last: string;
    played: number;
    wins: number;
    draws: number;
    losses: number;
  };
  matches: { IDBMatch };
}

export type Match = {
  id: number;
  awayTeam: IDBTeam;
  homeTeam: IDBTeam;
  utcDate: string;
  score: {
    status: statusType;
    liverpoolResult: string;
    winner: ResultType | undefined;
    home: number;
    away: number;
  };
};
