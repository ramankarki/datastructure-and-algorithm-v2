// Bit manipulation question

/**
 *
 * @param {array} nums
 * @returns non repeated number
 */

function singleNumber(nums) {
  let result = 0;
  for (let n of nums) {
    result ^= n;
  }
  return result;
}

console.log(singleNumber([9, 4, 1, 4, 2, 2, 1]));

// ------------------------------------------------------------------------------------------------------------

// Check if second array number is square and has same length of first array number.

function sum(array) {
  return array.reduce((acc, value) => acc + value, 0);
}

function same(array1, array2) {
  if (array1.length !== array2.length) return false;

  const array1Square = [];
  for (let i of array1) {
    array1Square.push(i ** 2);
  }

  return sum(array1Square) === sum(array2);
}

console.log(same([1, 2, 3, 2, 2], [9, 1, 4, 4, 4]));
