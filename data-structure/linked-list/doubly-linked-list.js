class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
      return node;
    }

    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.length++;
    return node;
  }

  pop() {
    if (!this.length) return;

    if (this.length === 1) {
      const removed = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return removed;
    }

    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length--;
  }

  log() {
    let activeNode = this.head;
    let index = 0;
    console.log('Length:', this.length);
    while (activeNode) {
      console.log({ index, value: activeNode.value });
      activeNode = activeNode.next;
      index++;
    }
  }

  logReverse() {
    let activeNode = this.tail;
    let index = this.length - 1;
    console.log('Length:', this.length);
    while (activeNode) {
      console.log({ index, value: activeNode.value });
      activeNode = activeNode.prev;
      index--;
    }
  }
}

const list = new LinkedList();

list.push(5);

// list.pop();

list.log();
list.logReverse();
