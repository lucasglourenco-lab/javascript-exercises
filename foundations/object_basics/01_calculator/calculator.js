const add = function (a, b) {
  let sum = a + b;
  return sum;
};

const subtract = function (a, b) {
  let subtraction = a - b;
  return subtraction;
};

const sum = function (arr) {
  const reduce = arr.reduce((acc, item) => item + acc, 0);
  return reduce;
};

const multiply = function (arr) {
  const mult = arr.reduce((acc, item) => item * acc, 1);
  return mult;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (number) {
  let total = 1;
  for (let i = number; i > 0; i--) {
    total = total * i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
