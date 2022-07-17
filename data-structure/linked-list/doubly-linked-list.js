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
    if (!this.tail) return;

    const removed = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.length--;
    return removed;
  }

  shift() {
    if (!this.head) return;

    const removed = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.length--;
    return removed;
  }

  unshift(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.length++;
    return node;
  }

  get(index) {
    if (index < 0 || index >= this.length) return;

    let i = 0;
    let activeNode = this.head;

    while (activeNode && i !== index) {
      i++;
      activeNode = activeNode.next;
    }

    return activeNode;
  }

  set(value, index) {
    const activeNode = this.get(index);
    if (!activeNode) return;
    activeNode.value = value;
    return activeNode;
  }

  insert(value, index) {
    if (index < 0) return;
    if (index === 0) return this.unshift(value);
    if (index >= this.length - 1) return this.push(value);

    let node = new Node(value);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;

    prevNode.next = node;
    node.prev = prevNode;
    node.next = nextNode;
    nextNode.prev = node;
    this.length++;
    return node;
  }

  remove(index) {
    if (index < 0) return;
    if (index === 0) return this.shift();
    if (index >= this.length - 1) return this.pop();

    let removed = this.get(index);
    let prevNode = removed.prev;
    let nextNode = removed.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.length--;
    return removed;
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
list.push(6);
list.push(7);
list.insert(33, 3);
list.insert(44, 4);
list.insert(55, 5);
list.insert(66, 7);

list.unshift(2345);

// list.pop();

list.log();
list.logReverse();
