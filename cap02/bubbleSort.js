// Bubble sort is a popular sort algorithm. It doesn't have a good time complexity
// but it has a good space complexity
// time complexity: O(nˆ2) - space complexity: O(1)
// Below it has a descending sort implementation

function bubbleSort(array) {
  let isSorted = false
  let swapsCounter = 0

  while (!isSorted) {
    isSorted = true
    for (let i = 0; i < array.length - 1 - swapsCounter; i++) {
      if (array[i] < array[i + 1]) {
        swap(i, i + 1, array)
        isSorted = false
      }
    }
    swapsCounter++
  }

  return array
}

function swap(i, j, array) {
  [array[i], array[j]] = [array[j], array[i]]
}

console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]))
console.log(bubbleSort([1, 9, 9, 9, 1]))
console.log(bubbleSort(['ab', 'yz', 'cd', 'ef']))