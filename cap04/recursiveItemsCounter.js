// It is not useful at all. It is just for fixation purpose

function itemsCounter(listOfItems) {
  if (listOfItems.length === 0) {
    return 0
  } else {
    listOfItems.pop()

    return 1 + itemsCounter(listOfItems)
  }
}

console.log(itemsCounter([1, 2, 3]))
console.log(itemsCounter([]))
console.log(itemsCounter(['borracha', 'lápis', 'caderno']))
