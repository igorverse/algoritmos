const A = 'A'
const B = 'B'
const START = 'start'
const END = 'end'


const graph = {}
graph[START] = {}
graph[START][A] = 6
graph[START][B] = 2

graph[A] = {}
graph[A][END] = 1

graph[B] = {}
graph[B][A] = 3
graph[B][END] = 5

graph[END] = {}

const costs = {}
costs[A] = 6
costs[B] = 2
costs[END] = Infinity

const parents = {}
parents[A] = START
parents[B] = START
parents[END] = null

const processed = new Set()

function dijkstra(graph) {
  let node = findInTheLowestCost(costs) 
  while (node) {
    const cost = costs[node]
    const neighbors = graph[node]

    for (const neighbor of Object.keys(neighbors)) {
      console.log(Object.keys(neighbors))
      const newCost = cost + neighbors[neighbor]
      if (costs[neighbor] > newCost) {
        costs[neighbor] = newCost
        parents[neighbor] = node
      }
    }

    processed.add(node)
    node = findInTheLowestCost(costs)
  }
}

function findInTheLowestCost(costs) {
  let lowestCost = Infinity
  let lowestCostNode = null

  for (const node in costs) {
    const cost = costs[node]

    if (cost < lowestCost && !processed.has(node)) {
      lowestCost = cost
      lowestCostNode = node
    }
  }

  return lowestCostNode
}

console.log(costs)

dijkstra(graph)

console.log(costs)
