function largestComponent(graph) {
  let largestComponentFoundSize = -Infinity
  const visitedNodes = new Set()

  for (const node in graph) {
    const quantityOfNodes = countComponents(graph, Number(node), visitedNodes)

    if (quantityOfNodes > largestComponentFoundSize) largestComponentFoundSize = quantityOfNodes
  }

  return largestComponentFoundSize 
}

function countComponents(graph, node, visitedNodes) {
  if (visitedNodes.has(node)) return 0

  visitedNodes.add(node)

  let nodesCounter = 1

  for (const neighbor of graph[node]) {
    nodesCounter++
    countComponents(graph, neighbor, visitedNodes)
  }

  return nodesCounter
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

console.log(largestComponent(graph))