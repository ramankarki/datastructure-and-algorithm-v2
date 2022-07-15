const array = [1, 2, 2, 3, 4, 5, 7, 9, 10, 11, 12, 13, 15, 21, 27];

// Using series formula

/**
 * @question Find the missing number in an integer array
 */

function findMissing(array) {
  let lastNum = array[array.length - 1];
  let sumArray = array.reduce((acc, val) => acc + val, 0);
  let sumOfMaxNum = (lastNum * (lastNum + 1)) / 2;
  return sumOfMaxNum - sumArray;
}

// console.log(findMissing(array));

/**
 *
 * @question Find all the pairs of integers whose sum is equal to the target number
 */

function findPairs(array, target) {
  for (let a of array) {
    for (let b of array) {
      if (a === b) continue;
      else if (a + b === target) return [a, b];
    }
  }
}

// console.log(findPairs(array, 4));

/**
 *
 * @question Find maximum product of two integers in the array where all elements are positive.
 */

function findMaxProduct(array) {
  let maxProduct = 0;
  for (let num of array) {
    if (num < 10 || num > 99) continue;

    const firstDigit = Math.trunc(num / 10);
    const secondDigit = num % 10;
    const product = firstDigit * secondDigit;

    if (product > maxProduct) {
      maxProduct = product;
    }
  }

  return maxProduct;
}

// console.log(findMaxProduct(array));

/**
 * @question Given an image represented by an N x N matrix write a method to rotate the image by 90 degrees anti-clockwise.

[
  [1,2,3,4],
  [5,6,7,8],
]

  ||

[
  [4,8],
  [3,7],
  [2,6],
  [1,5]
]

 */

function rotateArray90deg(array) {
  let newArray = [];

  for (let col of array[0]) newArray.push([]);

  for (let row in array) {
    for (let col in array[row]) {
      const reverseCol = array[row].length - col - 1;
      newArray[reverseCol][row] = array[row][col];
    }
  }

  return newArray;
}

console.log(
  rotateArray90deg([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
  ])
);
