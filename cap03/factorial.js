// To understand recursion, call stack is an essential concept! Call stack has just two operations
// push (add a new item on top) and pop (remove and read the item on top)
// Basically, recursion is when a function call itself.
// Every fuction call goes to the call stack
// Below, a factorial example:

function factorial(number) {
  if (number === 1) {
    // base case
    return 1
  } else {
    // recursive case
    return number * factorial(number - 1)
  }
}

console.log(factorial(5))
console.log(factorial(42))
