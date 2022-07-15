function insertion(array) {
  const newArray = [...array];

  for (let i = 1; i < newArray.length; i++) {
    let previousIndex = i - 1;
    let currentIndex = i;
    while (
      newArray[previousIndex] > newArray[currentIndex] &&
      previousIndex >= 0
    ) {
      let temp = newArray[previousIndex];
      newArray[previousIndex] = newArray[currentIndex];
      newArray[currentIndex] = temp;
      currentIndex -= 1;
      previousIndex -= 1;
    }
  }

  return newArray;
}

console.log(insertion([5, 6, 7, 8, 5, 4, 3, 2, 1, 4, 5, 6, 7, 8, 0]));
