// Unweighted - Undirected graph

class UnweightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  addNode(key) {
    if (this.adjacencyList[key]) return
    this.adjacencyList[key] = []
  }

  removeNode(node) {
    this.adjacencyList[node]?.forEach((v) => this.removeEdgeHelper(node, v))

    let { [node]: remove, ...others } = this.adjacencyList
    this.adjacencyList = others
  }

  addEdge(node1, node2) {
    this.addNode(node1)
    this.addNode(node2)

    this.adjacencyList[node1].push(node2)
    this.adjacencyList[node2].push(node1)
  }

  removeEdge(node1, node2) {
    this.removeEdgeHelper(node1, node2)
    this.removeEdgeHelper(node2, node1)
  }

  removeEdgeHelper(node, from) {
    this.adjacencyList[from] =
      this.adjacencyList[from]?.filter((v) => v !== node) || []
  }
}

module.exports = UnweightedGraph

const graph = new UnweightedGraph()

// graph.addNode('test')
// graph.addNode('again')
// graph.addNode('test1')
// graph.addEdge('test', 'again')
// graph.addEdge('again1', 'again')
// graph.addEdge('test', 'again1')
// graph.addEdge('test', 'again2')

// console.log(graph)

// graph.removeNode('test')

// console.log(graph)
