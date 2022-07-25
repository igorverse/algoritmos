import { Deque } from "./Deque.mjs"

const graph = {}

graph['you'] = ['alice', 'bob', 'claire']
graph['bob'] = ['anuj', 'peggy']
graph['alice'] = ['peggy']
graph['claire'] = ['thom', 'jonny']
graph['anuj'] = []
graph['peggy'] = []
graph['thom'] = []
graph['jonny'] = []


// O(v + e) time complexity and O(v) space complexity
function breadthFirstSearch(graph, person){
  const deque = new Deque()
  const wasPersonSeen = {}

  for (const friend of person) {
    deque.addBack(friend)
  }

  while (deque.size()) {
    const possibleSeller = deque.removeFront()
    if (!wasPersonSeen[possibleSeller]) {
      if (isSeller(possibleSeller)) {
        return `${possibleSeller} é vendedor de manga!`
      } else {
        for (const friend of graph[possibleSeller]) {
          deque.addBack(friend)
        }
        wasPersonSeen[possibleSeller] = true
      }
    }
  }

  return 'Nenhuma pessoa vendedora foi encontrada!'
}

function isSeller(person) {
  if (person[person.length - 1] === 'm') return true

  return false
}

console.log(breadthFirstSearch(graph, graph['you']))