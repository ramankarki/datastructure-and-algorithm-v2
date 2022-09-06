// function fib(n) {
//   if (n <= 1) return n
//   return fib(n - 1) + fib(n - 2)
// }

function fib(n, memo = {}) {
  if (n <= 1) return n
  if (memo[n]) return memo[n]

  const value = fib(n - 1, memo) + fib(n - 2, memo)
  memo[n] = value
  return value
}

t = Date.now()
console.log(fib(7849))
console.log(Date.now() - t)
