import fetchAdventOfCode from "../lib/fetchAdventOfCode.js";

export default async function solve() {
  const input = await fetchAdventOfCode(1);
  if (input) {
    const elfCalories = input
      ?.split("\n\n")
      .map((calories) => calories.split("\n").map(Number))
      .map((elf) =>
        elf.reduce((acc, current) => {
          return acc + current;
        }, 0)
      )
      .sort((a, b) => a - b);

    const topThreeCalories = elfCalories.slice(
      elfCalories.length - 3,
      elfCalories.length
    );

    const sumHighestCalories = topThreeCalories.reduce((acc, current) => {
      return acc + current;
    }, 0);

    return sumHighestCalories;
  }
}
