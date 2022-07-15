# Big 0 notation

A way to describe the performance of the function as the input size grows. Time and space have the same concept for Big O notation.

## O(1)

Constant

## O(log n)

Logarithmic

## O(n)

Linear

## O(n log n)

Logarithmic linear

## O(n^2)

Polynomial or Quadratic

## O(2^n)

Exponential

## O(n!)

Factorial

<br>

# Drop constants and non-dominant terms

Reason is as the input size grows, constant factors are negligible. And makes us easier to compare.

### O(2n) -> O(n)

### O(n^2 + n) -> O(n^2)

### O(n + log n) -> O(n)

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

# Space complexity for data types

## Most primitives types - O(1)

- Boolean
- Number
- Undefined
- Null

## Strings, Arrays, Objects - O(n)
