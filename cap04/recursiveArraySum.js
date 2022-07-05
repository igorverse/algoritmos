// There is a classical technique to think about recursive problems.
// It is called "divide to conquer".
// There are two steps to use this technique:
// 1. determine the base case
// 2. try to reduce your problem to the base case defined

function sumArray(array) {
  if (array.length === 0) {
    return 0
  } else {
    return array.pop() + sumArray(array)
  }
}

console.log(sumArray([]))
console.log(sumArray([1]))
console.log(sumArray([2, 4, 6]))
