// [156, 141, 35, 94, 88, 61, 111]
// The goal is to return the elements ordered in an descending way
// [156, 141, 111, 94, 88, 61, 35]
// To order, we can take the highest number and add to a new list
// So, in the end, we will have a new list with the ordered elements
// [156, 141, 35, 94, 88, 61, 111] -> []
// [141, 35, 94, 88, 61, 111] -> [156]
// [35, 94, 88, 61, 111] -> [156, 141]
// [35, 94, 88, 61] -> [156, 141, 111]
// ...
// [] -> [156, 141, 111, 94, 88, 61, 35]

function findTheHighestNumberIndex(arr) {
  let highest = arr[0]
  let highestIndex = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i]
      highestIndex = i
    }
  }

  return highestIndex
}

function selectionSort(arr) {
  const ARR_LENGTH = arr.length
  const orderedArr = []

  for (let i = 0; i < ARR_LENGTH; i++) {
    const highestIndex = findTheHighestNumberIndex(arr)
    orderedArr.push(arr[highestIndex])
    arr.splice(highestIndex, 1)
  }

  return orderedArr
}

console.log(selectionSort([156, 141, 35, 94, 88, 61, 111]))
console.log(selectionSort([0, 199, 250, 42, -1, 1000, 15]))
