import { Redis } from "@upstash/redis";

//
const redis = Redis.fromEnv();

//
import { liverpool_id } from "@config/site";
import { IDBMatches, IDBMatch } from "@/interfaces/db.types";

// Generic Fetcher for Football API
function fetcher<T>(url: string): Promise<T> {
  return fetch(url, {
    method: "POST",
    headers: {
      "X-Auth-Token": process.env.FOOTBALL_KEY,
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as Promise<T>;
  });
}

// Generate API URL calls
function generateAPI(): string {
  const date = new Date();
  const offset = date.getTimezoneOffset();
  const today = new Date(date.getTime() - offset * 60 * 1000)
    .toISOString()
    .split("T")[0];

  const result = new Date(date);
  result.setDate(result.getDate() + 300);
  const tomorrow = new Date(result.getTime() - offset * 60 * 1000)
    .toISOString()
    .split("T")[0];

  return `${process.env.FOOTBALL_URL}/teams/${liverpool_id}/matches?dateFrom=${today}&dateTo=${tomorrow}`;
}

//
const nextMatch = async (): Promise<IDBMatch> => {
  // Get API URL
  const API = generateAPI();

  // Load from REDIS
  const redisMatch = await redis.get<IDBMatches>(API);

  // Return REDIS cache if exists
  if (redisMatch) {
    return redisMatch.matches[0];
  }

  // Fetch from football API
  const matches = await fetcher<IDBMatches>(API);

  // Update redis cache
  await redis.set(API, JSON.stringify(matches));

  // Return value
  return matches.matches[0];
};

export default nextMatch;
