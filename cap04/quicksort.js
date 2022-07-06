// quicksort is a special algorithm because it uses divide to conquer strategy
// quicksort is a sort algorithm
// To use, we need to define a pivot and two subarrays
// For example, if you have an array -> [42, 13, 10]
// pivot = array[0] = 42
// first subarray -> numbers higher than pivot -> [13, 10]
// second subarray -> numbers less than pivot -> []
// the base case is when we have an array with 0 or 1 element
// if the array is higher than 1, we can apply quicksort recursively

function quicksort(array) {
  if (array.length < 2) {
    return array
  } else {
    const pivot = array[0]
    const arrayWithoutPivot = array.slice(1)
    const higherThanPivot = []
    const lessThanPivot = []

    for (const number of arrayWithoutPivot) {
      if (number > pivot) {
        higherThanPivot.push(number)
      } else {
        lessThanPivot.push(number)
      }
    }

    return [...quicksort(lessThanPivot), pivot, ...quicksort(higherThanPivot)]
  }
}

console.log(quicksort([42, 13, 10]))
console.log(quicksort([42, 42, 99, 200, 1, 0, -5]))
console.log(
  quicksort([
    Infinity,
    -Infinity,
    Number.MAX_SAFE_INTEGER,
    Number.MIN_SAFE_INTEGER,
  ])
)
