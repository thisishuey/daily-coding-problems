#!/usr/bin/env node

console.log("2019-06-13 Dailing Coding Problem");

let numbers = [];

try {
  numbers = JSON.parse(process.argv[2]);
} catch (exception) {
  console.error(exception);
}

const product = numbers.reduce(
  (accumulator, currentValue) => accumulator * currentValue
);

const products = numbers.map(number => product / number);

console.log(products);
