function fib(num) {
  if (num <= 1) return num;
  return fib(num - 1) + fib(num - 2);
}

console.log(fib(6));

function fibIt(num) {
  let firstNum = 0;
  let secondNum = 1;
  let i = 2;

  while (i < num) {
    let temp = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = temp;
    ++i;
  }

  return firstNum + secondNum;
}

console.log('final', fibIt(6));
