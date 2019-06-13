#!/usr/bin/env node

console.log("2019-06-12 Daily Coding Problem");

let numbers = [];

try {
  numbers = JSON.parse(process.argv[2]);
} catch (exception) {
  console.error("Please provide an array of numbers.");
  console.error(exception);
}
const k = process.argv[3];

let solved = false;

for (let number of numbers) {
  solved = numbers.indexOf(k - number) >= 0;
  if (solved) {
    console.log(
      `Match: ${number} + ${numbers[numbers.indexOf(k - number)]} = ${k}`
    );
    break;
  }
}

console.log(solved);
