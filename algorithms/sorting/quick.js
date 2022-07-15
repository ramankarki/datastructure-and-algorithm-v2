function quick(array) {
  if (array.length <= 1) return array;

  let selected = array[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < selected) leftArr.push(array[i]);
    else rightArr.push(array[i]);
  }

  return [...quick(leftArr), selected, ...quick(rightArr)];
}

console.log(quick([5, 6, 7, 8, 5, 4, 3, 2, 1, 4, 5, 6, 7, 8, 0]));
