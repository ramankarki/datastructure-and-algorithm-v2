/**
 * Time complexity is O(log n * 3n)
 */

function merge(leftArr, rightArr) {
  let leftIndex = 0;
  let rightIndex = 0;
  const newArr = [];

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      newArr.push(leftArr[leftIndex]);
      leftIndex += 1;
    } else {
      newArr.push(rightArr[rightIndex]);
      rightIndex += 1;
    }
  }

  while (leftIndex < leftArr.length) {
    newArr.push(leftArr[leftIndex]);
    leftIndex += 1;
  }

  while (rightIndex < rightArr.length) {
    newArr.push(rightArr[rightIndex]);
    rightIndex += 1;
  }

  return newArr;
}

function mergeSort(array) {
  const mid = Math.trunc(array.length / 2);
  if (mid === 0) return [...array];

  const leftArr = mergeSort(array.slice(0, mid));
  const rightArr = mergeSort(array.slice(mid));

  return merge(leftArr, rightArr);
}

console.log(mergeSort([5, 6, 7, 8, 5, 4, 3, 2, 1, 4, 5, 6, 7, 8, 0]));
