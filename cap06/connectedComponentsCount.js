function connectedComponentsCount(graph) {
  const visited = new Set()
  let count = 0

  for (let node in graph) {
    if (explore(graph, Number(node), visited)) {
      count++
    }

    console.log(visited)
  }

  return count
}

function explore(graph, currentNode, visited) {
  if (visited.has(currentNode)) return false

  visited.add(currentNode)

  for (let neighbor of graph[currentNode]) {
    explore(graph, neighbor, visited)
  }

  return true
}

const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
}

console.log(connectedComponentsCount(graph))