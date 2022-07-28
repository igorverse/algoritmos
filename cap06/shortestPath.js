function shortestPath(edges, source, destiny) {
  const graph = buildGraph(edges)

  const visitedNodes = new Set()
  const queue = [[source, 0]]


  while (queue.length) {
    const [node, distance] = queue.shift()

    if (node === destiny) return distance

    for (const neighbor of graph[node]) {
        if (!visitedNodes.has(neighbor)) {
          visitedNodes.add(neighbor)
          queue.push([neighbor, distance + 1])
      }
    }
  }

  return -1
}

function buildGraph(edges) {
  const graph = {}
  
  for (const nodes of edges) {
    const [nodeA, nodeB] = [nodes[0], nodes[1]]
    
    if (!graph[nodeA]) graph[nodeA] = []
    if (!graph[nodeB]) graph[nodeB] = []

    graph[nodeA].push(nodeB)
    graph[nodeB].push(nodeA)
  }

  return graph
}

const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
]

console.log(shortestPath(edges, 'w', 'z'))
console.log(shortestPath(edges, 'w', 'w'))
console.log(shortestPath(edges, 'w', 'i'))