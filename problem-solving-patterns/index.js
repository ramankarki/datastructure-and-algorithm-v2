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
