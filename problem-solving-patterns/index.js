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

console.log(pairZero([-2, -1, 0, 1, 3]));
