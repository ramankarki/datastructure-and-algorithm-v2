const PQ = require('../../data-structure/trees/binary-heaps/PriorityQueue')
const WG = require('../../data-structure/graphs/WeightedGraph')

function dijkstra(graph, startNode, endNode) {
  const distances = {}
  const pq = new PQ()
  const previous = {}
  let smallest

  // initial state
  for (let node in graph.adjacencyList) {
    if (node === startNode) {
      distances[node] = 0
      pq.insert(node, 0)
    } else {
      distances[node] = Infinity
      pq.insert(node, Infinity)
    }
    previous[node] = null
  }

  // loop as long as there is something
  while (pq.value.length) {
    smallest = pq.remove().value

    // return exact path value
    if (smallest === endNode) {
      const path = []
      let node = endNode
      while (node) {
        path.unshift(node)
        node = previous[node]
      }
      return { path, distance: distances[endNode] }
    }

    graph.adjacencyList[smallest].map((nextNode) => {
      let candidate = distances[smallest] + nextNode.weight

      // update new smallest distance - check if this new path is shorter than the path this new node knows
      if (candidate < distances[nextNode.node]) {
        distances[nextNode.node] = candidate
        previous[nextNode.node] = smallest
        pq.insert(nextNode.node, candidate)
      }
    })
  }
}

const graph = new WG()
graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addNode('D')
graph.addNode('E')
graph.addNode('F')

graph.addEdge('A', 'B', 4)
graph.addEdge('A', 'C', 2)
graph.addEdge('B', 'E', 3)
graph.addEdge('C', 'D', 2)
graph.addEdge('C', 'F', 4)
graph.addEdge('D', 'E', 3)
graph.addEdge('D', 'F', 1)
graph.addEdge('E', 'F', 1)

console.log(dijkstra(graph, 'A', 'E')) // A, C, D, F, E
