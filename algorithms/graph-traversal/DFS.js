const Graph = require('../../data-structure/graphs')

function dfs(graph, node, visited = {}) {
  if (!graph.adjacencyList[node].length) return

  console.log(node)
  visited[node] = true

  graph.adjacencyList[node].map((key) => {
    if (!visited[key]) dfs(graph, key, visited)
  })
}

function dfsItr(graph, node) {
  const stack = [node]
  const visited = {}

  while (stack.length) {
    const currentNode = stack.pop()
    if (visited[currentNode]) continue

    console.log(currentNode)
    visited[currentNode] = true
    const currentArr = graph.adjacencyList[currentNode]
    for (let i = currentArr.length - 1; i >= 0; i--) {
      stack.push(currentArr[i])
    }
  }
}

const graph = new Graph()

graph.addNode('test')
graph.addNode('again')
graph.addNode('test1')
graph.addEdge('test', 'again')
graph.addEdge('9', 'again')
graph.addEdge('again1', 'again')
graph.addEdge('test', 'again1')
graph.addEdge('test', 'again2')
graph.addEdge('10', 'again2')
graph.addEdge('10', 'test1')

// console.log(graph, '\n')

const t = performance.now()
dfs(graph, 'test')
console.log('Recursive', performance.now() - t, '\n')

const t1 = performance.now()
dfsItr(graph, 'test')
console.log('Iterative', performance.now() - t1)
