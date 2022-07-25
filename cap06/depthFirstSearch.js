const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
}

// Iterative implementation
// O(v + e) time complexity and O(v) space complexity, where 'v' are vertices and 'e' are edges
function depthFirstSearch(graph, source) {
  const stack = [source]

  while (stack.length) {
    const currentNode = stack.pop()
    console.log(currentNode)

    for (let neighbor of graph[currentNode]) {
      stack.push(neighbor)
    }
  }
}

console.log('Iterative implementaton:')
depthFirstSearch(graph, 'a')

// Recursive implementation
// O(v+e) time complexity and O(v) space complexity
function recursiveDepthFirstSearch(graph, source) {
  console.log(source)
  for (let neighbor of graph[source]) {
    depthFirstSearch(graph, neighbor)
  }
}

console.log('\nRecursive implementaton:')
recursiveDepthFirstSearch(graph, 'a')