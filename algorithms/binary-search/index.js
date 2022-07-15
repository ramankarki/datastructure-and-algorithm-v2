function binarySearch(array, target) {
  let left = 0;
  let right = array.length;

  while (left <= right) {
    const middle = Math.trunc((left + right) / 2);

    if (array[middle] === target) return middle;
    else if (target > array[middle]) left = middle + 1;
    else right = middle - 1;
  }
}

console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15));
