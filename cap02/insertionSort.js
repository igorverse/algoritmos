// insertion sort is a sort algorithm. It has O(nˆ2) time complexity 
// and O(1) space complexity
// Below it is a descending sort implementation

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i
    while (j > 0 && array[j] > array[j - 1]) {
      swap(j, j - 1, array)
      j--
    }
  }

  return array
}

function swap(i, j, array) {
  [array[i], array[j]] = [array[j], array[i]]
}

console.log(insertionSort([8, 5, 2, 9, 5, 6, 3]))
console.log(insertionSort([1, 9, 9, 9, 1]))
console.log(insertionSort(['ab', 'yz', 'cd', 'ef']))