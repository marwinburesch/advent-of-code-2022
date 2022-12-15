import dotenv from "dotenv";
dotenv.config();
import fetch from "node-fetch";

export default async function fetchAdventOfCode(challengeNumber: number) {
  try {
    const input = await fetch(
      `https://adventofcode.com/2022/day/${challengeNumber}/input`,
      {
        headers: {
          Cookie: `session=${process.env.AOC_COOKIE}`,
        },
      }
    );
    const response = await input.text();

    return response;
  } catch (error) {
    console.error(error);
  }
}
