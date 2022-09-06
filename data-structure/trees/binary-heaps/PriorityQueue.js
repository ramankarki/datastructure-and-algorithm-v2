class Node {
  constructor(value, priority) {
    this.value = value
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.value = []
  }

  swap(fIndex, sIndex) {
    let temp = this.value[fIndex]
    this.value[fIndex] = this.value[sIndex]
    this.value[sIndex] = temp
  }

  insert(value, priority) {
    this.value.push(new Node(value, priority))
    let childIndex = this.value.length - 1

    while (true) {
      let parentIndex = Math.floor((childIndex - 1) / 2)

      if (
        parentIndex < 0 ||
        this.value[parentIndex].priority < this.value[childIndex].priority
      )
        break

      this.swap(childIndex, parentIndex)
      childIndex = parentIndex
    }
  }

  remove() {
    const remove = this.value[0]
    this.value[0] = this.value.pop()
    let newRootIndex = 0

    while (true) {
      let leftChildIndex = 2 * newRootIndex + 1
      let rightChildIndex = 2 * newRootIndex + 2

      if (!this.value[leftChildIndex] || !this.value[rightChildIndex]) {
        // console.log(remove)
        return remove
      }

      const isLeftSmaller =
        this.value[newRootIndex].priority > this.value[leftChildIndex].priority
      const isRightSmaller =
        this.value[newRootIndex].priority > this.value[rightChildIndex].priority

      if (isLeftSmaller) {
        this.swap(newRootIndex, leftChildIndex)
        newRootIndex = leftChildIndex
      } else if (isRightSmaller) {
        this.swap(newRootIndex, rightChildIndex)
        newRootIndex = rightChildIndex
      } else {
        // console.log(remove)
        return remove
      }
    }
  }
}

// const priorityQueue = new PriorityQueue()

// priorityQueue.insert('common cold', 5)
// priorityQueue.insert('gunshot wound', 1)
// priorityQueue.insert('high fever', 4)
// priorityQueue.insert('broken arm', 2)
// priorityQueue.insert('glass in foot', 3)

// console.log(priorityQueue.value)
// console.log()

// priorityQueue.remove()
// priorityQueue.remove()
// priorityQueue.remove()
// priorityQueue.remove()
// priorityQueue.remove()

module.exports = PriorityQueue
