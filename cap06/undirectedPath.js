function undirectedPath(edges, nodeA, nodeB) {
	const graph = buildGraph(edges)
	
	return hasPath(graph, nodeA, nodeB)
}

function buildGraph(edges) {
	const graph = {}
	
	for (const nodes of edges) {
		const [firstNode, secondNode] = [nodes[0], nodes[1]]

		if (!(graph[firstNode])) graph[firstNode] = []
		if (!(graph[secondNode])) graph[secondNode] = []
		
		graph[firstNode].push(secondNode)
		graph[secondNode].push(firstNode)
	}
	
	return graph
}

function hasPath(graph, source, destiny, visitedNodes = new Set()) {
	if (source === destiny) return true
	if (visitedNodes.has(source)) return false
	
	visitedNodes.add(source)

	for (const neighbor of graph[source]) {
		if (hasPath(graph, neighbor, destiny, visitedNodes)) return true
	}

	return false
}

const edges = [['i', 'j'], ['k','i'], ['m', 'k'], ['k', 'l'], ['o', 'n']]

console.log(undirectedPath(edges, 'i', 'k'))
console.log(undirectedPath(edges, 'i', 'o'))
console.log(undirectedPath(edges, 'm', 'n'))
console.log(undirectedPath(edges, 'i', 'm'))