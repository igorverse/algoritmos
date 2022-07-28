function islandCount(grid) {
  const visitedNodes = {}
  let islandCounter = 0
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      if (explore(grid, row, column, visitedNodes)) islandCounter += 1
    }
  }

  return islandCounter
}

function explore(grid, row, column, visitedNodes) {
  const rowInbounds = 0 <= row && row < grid.length
  const columnInbounds = 0 <= column && column < grid[0].length
  if (!rowInbounds || !columnInbounds) return false

  if (grid[row][column] === 'W') return false

  const position = row + ',' + column
  if (visitedNodes.has(position)) return false

  visitedNodes.add(position)

  explore(grid, row - 1, column, visitedNodes)
  explore(grid, row + 1, column, visitedNodes)
  explore(grid, row, column - 1, visitedNodes)
  explore(grid, row, column + 1, visitedNodes)

  return true
}