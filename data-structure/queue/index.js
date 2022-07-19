// First in first out -> FIFO

/*

first -> second -> third -> ...n

*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);

    if (!this.last) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    this.length++;
    return node;
  }

  shift() {
    let activeNode;

    if (this.first === this.last) {
      activeNode = this.first;
      this.first = null;
      this.last = null;
    } else {
      activeNode = this.first;
      this.first = this.first.next;
    }

    this.length--;
    return activeNode;
  }

  log() {
    let activeNode = this.first;
    let index = 0;
    console.log('Length:', this.length);
    while (activeNode) {
      console.log({ value: activeNode.value, index });
      activeNode = activeNode.next;
      index++;
    }
  }
}

module.exports = Queue;

// const queue = new Queue();

// queue.push(1);
// queue.push(2);
// queue.push(3);
// queue.push(4);
// queue.push(5);
// queue.push(6);
// queue.log();

// console.log();

// queue.shift();
// queue.shift();
// queue.shift();
// queue.log();
