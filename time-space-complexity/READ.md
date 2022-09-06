# Big 0 notation

A way to describe the performance of the function as the input size grows. Time and space have the same concept for Big O notation.

## O(1)

Constant

```
function constant_1(n) {
  return n * 2 + 1; // T(2) -> O(1)
}

function constant_2(n) {
  for (let i = 1; i <= 100; i++) {} // T(1) -> 0(1)
}
```

## O(log n)

Logarithmic

```
function logarithmic(n) {
  if (n <= 1) return;
  logarithmic(n / 2);
}
```

## O(n)

Linear

```
function linear_1(n) {
  for (let i = 1; i <= n; i++) {}
}

function linear_2(n) {
  if (n === 1) return;
  linear_2(n - 1);
}
```

## O(n log n)

Logarithmic linear

```
function loglinear(n) {
  if (n <= 1) return;

  for (let i = 1; i <= n; i++) {}
  loglinear(n / 2);
  loglinear(n / 2);
}
```

## O(n^2)

Polynomial or Quadratic

```
function quadratic(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {}
  }
}

function cubic(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= n; k++) {}
    }
  }
}
```

## O(2^n)

Exponential

```
function exponential_2n(n) {
  if (n === 1) return;
  exponential_2n(n - 1);
  exponential_2n(n - 1);
}

function exponential_3n(n) {
  if (n === 0) return;
  exponential_3n(n - 1);
  exponential_3n(n - 1);
  exponential_3n(n - 1);
}
```

## O(n!)

Factorial

```
function factorial(n) {
  if (n === 1) return;

  for (let i = 1; i <= n; i++) {
    factorial(n - 1);
  }
}
```

<br>

# Drop constants and non-dominant terms

Reason is as the input size grows, constant factors are negligible. And makes us easier to compare.

### O(2n) -> O(n)

### O(n^2 + n) -> O(n^2)

### O(n + log n) -> O(n)

<br>
<br>

# Add VS Multiply

- Addition is done if the loops are running in different scope.
- Multiplication is done if the loops are nested.

<br>

## O(n + n)

```
for (let a in array) {}

for (let a in array) {}
```

<br>

## O(n \* n) -> O(n^2)

```
for (let a in array) {
  for (let a in array) {}
}
```

<br>

# Space complexity for data types

## Most primitives types - O(1)

- Boolean
- Number
- Undefined
- Null

## Strings, Arrays, Objects - O(n)
