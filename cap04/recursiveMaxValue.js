function findMaxValue(listOfNumbers) {
  if (listOfNumbers.length < 2) {
    throw 'The list must have at least two numbers!'
  }

  if (listOfNumbers.length === 2) {
    return listOfNumbers[0] > listOfNumbers[1]
      ? listOfNumbers[0]
      : listOfNumbers[1]
  } else {
    const subMax = findMaxValue(listOfNumbers.slice(1))
    return listOfNumbers[0] > subMax ? listOfNumbers[0] : subMax
  }
}

console.log(findMaxValue([1, 5, 0, -1, 3]))
console.log(findMaxValue([99, 1, 0, 55]))
