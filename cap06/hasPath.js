function hasPath(graph, source, destiny) {
	const wasAlreadySeen = new Set()
	const stack = [source]

	while (stack.length) {
		const currentNode = stack.pop()
		if (wasAlreadySeen[currentNode]) continue
		if (currentNode === destiny) return true

		for (const neighbor of graph[currentNode]) {
			stack.push(neighbor)
		}
		
		wasAlreadySeen.add(currentNode)
	}

	return false
}

const graph = {
	f: ['g', 'i'],
	g: ['h'],
	h: [],
	i: ['g', 'k'],
	j: ['i'],
	k: []
}

console.log(hasPath(graph, 'f', 'k'))
console.log(hasPath(graph, 'f', 'u'))
