/**
 *
 * Frequency counter technique
 */

// Determine if the second string is an anagram if the first. "hello" === "olleh"

function isAnagram(firstWord, secondWord) {
  if (firstWord.length !== secondWord.length) return false;

  const keys = {};
  for (let letter of firstWord) keys[letter] = (keys[letter] || 0) + 1;

  for (let letter of secondWord) {
    if (!keys[letter]) {
      return false;
    }
    keys[letter] -= 1;
  }

  return true;
}

// console.log(isAnagram('aaabc', 'aaaab'));

/**
 * Multiple pointer pattern
 */

function pairZero(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right -= 1;
    } else {
      left += 1;
    }
  }
}

// console.log(pairZero([-2, -1, 0, 1, 3]));

/**
 * Sliding window pattern
 */

// Calculate the maximum sum of n consecutive elements in the array.

function maxConsecutive(array, n) {
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < n; i++) {
    maxSum += array[i];
  }

  tempSum = maxSum;
  for (let i = 1; i < array.length; i++) {
    tempSum = tempSum - array[i - 1] + array[i + n - 1];
    if (tempSum > maxSum) maxSum = tempSum;
  }

  return maxSum;
}

// console.log(maxConsecutive([1, 2, 5, 2, 8, 1, 5], 2)); // 10
// console.log(maxConsecutive([1, 2, 5, 2, 8, 1, 5], 4)); // 17
// console.log(maxConsecutive([4, 2, 1, 6], 1)); // 6
// console.log(maxConsecutive([4, 2, 1, 6, 2], 4)); // 13

/**
 * Divide and conquer pattern
 */
