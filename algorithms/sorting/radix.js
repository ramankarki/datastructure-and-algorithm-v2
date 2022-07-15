function getIndexDigit(num, index) {
  return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;
}

function digitCount(num) {
  return Math.trunc(Math.log10(Math.abs(num || 1)) + 1);
}

function radix(array) {
  const maxDigits = digitCount(Math.max(...array));

  for (let k = 0; k < maxDigits; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < array.length; i++) {
      const digit = getIndexDigit(array[i], k);
      digitBuckets[digit].push(array[i]);
    }
    array = [].concat(...digitBuckets);
  }

  return array;
}

console.log(radix([5, 999, 6, 7, 8, 5, 4, 3, 2, 1, 4, 5, 6, 7, 8, 0, 100]));
