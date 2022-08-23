// T: O(r*c) and S: O(r*c) where r are rows and c are columns

function minimiumIsland(grid) {
  let minimiumIslandSize = Infinity

  for (let row = 0; row < grid.length; row++) {
    for (let column; column < grid[0].length; column++) {
      const islandSize = exploreIslandSize(grid, row, column)

      if (islandSize && islandSize < minimiumIslandSize) minimiumIslandSize = islandSize
    }
  }
}

function exploreIslandSize(grid, row, column, visited = new Set()) {
  const isRowInbounds = 0 <= row && row < grid.length
  const isColumnInbouds = 0 <= column && column < grid[0].length

  if (!isRowInbounds || !isColumnInbouds) return 0
  if (grid[row][column] === 'W') return 0

  const position = row + ',' + column
  if (visited.has(position)) return 0
  visited.add(position)

  let islandSize = 1

  islandSize += exploreIslandSize(grid, row - 1, column, visited)
  islandSize += exploreIslandSize(grid, row + 1, column, visited)
  islandSize += exploreIslandSize(grid, row, column - 1, visited)
  islandSize += exploreIslandSize(grid, row, column + 1, visited)

  return islandSize
}