// recursion is a fancy way to solve problems. Its use is very common with dynamic programming
// all recursion solution should have a base case and a recursive case
// for example, a countdown can be implemented using recursion:

function countdown(i) {
  console.log(i)
  if (i <= 1) {
    // base case
    return
  } else {
    // recursive case
    countdown(i - 1)
  }
}

countdown(10)
