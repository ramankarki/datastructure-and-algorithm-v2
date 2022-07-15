function bubble(array) {
  const newArray = [...array];

  for (let i in newArray) {
    let noSwap = true;
    for (let j = 1; j < newArray.length; j++) {
      if (newArray[j - 1] > newArray[j]) {
        const temp = newArray[j - 1];
        newArray[j - 1] = newArray[j];
        newArray[j] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }

  return newArray;
}

console.log(bubble([5, 6, 7, 8, 5, 4, 3, 2, 1, 4, 5, 6, 7, 8]));
