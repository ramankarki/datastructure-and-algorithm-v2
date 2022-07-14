## What is the runtime of the code below?

```
function foo(array) {
  let sum = 0;
  let product = 1;

  for (let i in array) {
    sum += 1;
  }

  for (let i in array) {
    product *= i;
  }

  console.log('sum =', sum, 'product =', product);
}
```

### O(n + n)

---

<br>

```
function printPairs(array) {
  for (let a of array) {
    for (let b of array) {
      console.log(a, b);
    }
  }
}
```

### O(n^2)

---

<br>

```
function printPairs(array) {
  for (let a of array) {
    for (let b of array) {
      for (let c = 0; c < 1000; c++) {
        console.log(a, b, c);
      }
    }
  }
}
```

### O(n^2)

---

<br>

```
function reverse(array) {
  for (let i = 0; i < array.length / 2; i++) {
    let other = array.length - i - 1;
    let temp = array[i];
    array[i] = array[other];
    array[other] = temp;
  }
  console.log(array);
}
```

### O(n/2)

---

<br>

```
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

function allFib(n) {
  for (let i = 0; i < n; i++) {
    console.log(i, fib(i));
  }
}
```

### O(n \* 2^n)

---

<br>

```
function power(n) {
  if (n <= 1) return n;
  return 2 * power(n / 2);
}
```

### O(log n)
