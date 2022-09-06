class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  addNode(node) {
    if (this.adjacencyList[node]) return
    this.adjacencyList[node] = []
  }

  addEdge(node1, node2, weight) {
    this.addNode(node1)
    this.addNode(node2)

    this.adjacencyList[node1].push({ node: node2, weight })
    this.adjacencyList[node2].push({ node: node1, weight })
  }
}

const graph = new WeightedGraph()
graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addEdge('A', 'B', 9)
graph.addEdge('A', 'C', 5)
graph.addEdge('B', 'C', 7)

console.log(graph)

module.exports = WeightedGraph
