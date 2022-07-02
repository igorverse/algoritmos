// [0, 2, 3, 4, ... , 97, 98, 99] -> length: 100
// If you want to discover the position of number 42
// Considering the worst scenario:
// First guess: 50 -> high -> between 1 and 50
// second guess: 25 -> low -> between 25 and 50
// Third guess: 38 -> low -> between 38 and 50
// Fourth guess: 44 -> high -> between 38 and 44
// Fifth guess: 41 -> low -> between 41 and 44
// Sixth guess: 43 -> high -> between 41 and 43
// Seventh guess: 42 -> OK
// So, you will take seven steps.
// To write the algorithm, we need to remember that array is 0-based indexing
// Binary search algorithm implementation is all about to control low and high values.

function binarySearch(orderedArray, item) {
  let low = 0
  let high = orderedArray.length - 1

  while (low <= high) {
    let mid = Math.ceil((low + high) / 2)
    let guess = orderedArray[mid]

    if (guess === item) {
      return mid
    }

    if (guess < item) {
      low = mid + 1 // 0-based indexing
    }

    if (guess > item) {
      high = mid - 1 // 0-based indexing
    }
  }

  return 'Number not found!'
}

const orderedArray = Array.from({ length: 100 }, (v, k) => k)
console.log(`index: ${binarySearch(orderedArray, 42)}`)
console.log(`index: ${binarySearch(orderedArray, 100)}`)

console.log(
  `index: ${binarySearch([1, 5, 15, 21, 30, 120, 125, 130, 199], 30)}`
)
console.log(
  `index: ${binarySearch(
    [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    100
  )}`
)
