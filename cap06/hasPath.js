function hasPath(graph, source, destiny) {
	const stack = [source]

	while (stack.length) {
		const currentNode = stack.pop()
		if (currentNode === destiny) return true

		for (const neighbor of graph[currentNode]) {
			stack.push(neighbor)
		}
	}

	return false
}

function recursiveHasPath(graph, source, destiny) {
	if (source === destiny) return true

	for (const neighbor of graph[source]) {
		if (recursiveHasPath(graph, neighbor, destiny)) return true
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
console.log(recursiveHasPath(graph, 'f', 'k'))
console.log(recursiveHasPath(graph, 'f', 'u'))