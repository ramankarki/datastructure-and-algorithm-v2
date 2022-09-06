const Graph = require('../../data-structure/graphs')

function dfs(graph, node, visited = {}) {
  if (!graph.adjacencyList[node].length) return

  console.log(node)
  visited[node] = true

  graph.adjacencyList[node].map((key) => {
    if (!visited[key]) dfs(graph, key, visited)
  })
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

console.log(graph)

dfs(graph, 'test')
