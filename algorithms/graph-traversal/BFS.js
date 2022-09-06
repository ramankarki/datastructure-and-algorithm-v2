const Graph = require('../../data-structure/graphs')

function bfs(graph, node) {
  const queue = [node]
  const visited = {}

  while (queue.length) {
    const currentNode = queue.shift()
    if (visited[currentNode]) continue

    console.log(currentNode)
    visited[currentNode] = true
    const currentArr = graph.adjacencyList[currentNode]
    for (let i = 0; i < currentArr.length; i++) queue.push(currentArr[i])
  }
}

const graph = new Graph()

graph.addNode('test')
graph.addNode('again')
graph.addNode('test1')
graph.addEdge('test', 'again')
graph.addEdge('test', '2')
graph.addEdge('9', 'again')
graph.addEdge('again1', 'again')
graph.addEdge('test', 'again1')
graph.addEdge('test', 'again2')
graph.addEdge('10', 'again2')
graph.addEdge('10', 'test1')

console.log(graph, '\n')

const t = performance.now()
bfs(graph, 'test')
console.log('Iterative', performance.now() - t, '\n')
