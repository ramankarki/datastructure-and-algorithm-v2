function selection(array) {
  const newArray = [...array];

  for (let i = 0; i < newArray.length; i++) {
    let smallest = newArray[i];
    let smallestIndex = i;
    for (let j = i + 1; j < newArray.length; j++) {
      const active = newArray[j];
      if (active < smallest) {
        smallest = active;
        smallestIndex = j;
      }
    }
    let temp = newArray[i];
    newArray[i] = newArray[smallestIndex];
    newArray[smallestIndex] = temp;
  }

  return newArray;
}

console.log(selection([5, 6, 7, 8, 5, 4, 3, 2, 1, 4, 5, 6, 7, 8]));
