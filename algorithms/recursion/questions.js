// How to find the sum of digits of a positive integer number using recursion?

function recurSum(num) {
  if (num < 10) return num;
  return (num % 10) + recurSum(Math.trunc(num / 10));
}

// console.log(recurSum(123)); // === 6

// How to calculate power of a number using recursion?

function power(num, pow) {
  if (pow < 0) throw new Error('Power should be positive integer.');

  if (pow === 0) return 1;
  return num * power(num, pow - 1);
}

// console.log(power(2, 1.5));

// How to find greatest common divisor of two numbers using recursion?

/**
 *
 * @description Using Euclidean algorithm
 * @description Step 1: 48/18 = 2, remainder 12
 * @description Step 2: 18/12 = 1, remainder 6
 * @description Step 3: 12/6 = 2, remainder 0
 * @description Answer is 6
 * @returns greatest division of two number
 */

function greatestDivisor(num1, num2) {
  if (num1 <= 0 || num2 <= 0)
    throw new Error('Both number must be positive integer');

  const [greater, smaller] = num1 > num2 ? [num1, num2] : [num2, num1];

  const remainder = greater % smaller;

  if (remainder === 0) return smaller;
  return greatestDivisor(smaller, remainder);
}

// console.log(greatestDivisor(9, 0));

// Convert decimal to binary

function DtoB(num) {
  if (num <= 1) return num;
  return DtoB(Math.trunc(num / 2)) + '' + (num % 2);
}

console.log(DtoB(20));
