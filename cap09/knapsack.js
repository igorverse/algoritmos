function knapsack(capacity, weights, values, n) {
  const knapsack = []

  for (let i = 0; i <= n; i++) {
    knapsack[i] = []
  }

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= capacity; j++) {
      if (i === 0 || j === 0) {
        knapsack[i][j] = 0
      } else if (weights[i - 1] <= j) {
        const itemA = values[i - 1] + knapsack[i - 1][j - weights[i - 1]]
        const itemB = knapsack[i - 1][j]
        knapsack[i][j] = itemA > itemB ? itemA : itemB
      } else {
        knapsack[i][j] = knapsack[i - 1][j]
      }
    }
  }
  
  return knapsack[n][capacity]
}

console.log(knapsack(5, [2, 3, 4], [3, 4, 5], 5))