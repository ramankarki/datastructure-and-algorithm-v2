// Last in first out -> LIFO

/*

first <- second <- third <- ...n

*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
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
      node.next = this.last;
      this.last = node;
    }

    this.length++;
    return node;
  }

  pop() {
    if (!this.last) return null;

    let node = this.last;
    this.last = this.last.next;
    this.length--;
    return node;
  }

  log() {
    let activeNode = this.last;
    let index = this.length - 1;
    console.log('Length:', this.length);
    while (activeNode) {
      console.log({ value: activeNode.value, index });
      activeNode = activeNode.next;
      index--;
    }
  }
}

module.exports = Stack;

// const stack = new Stack();

// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);
// stack.push(5);
// stack.push(6);
// stack.log();

// console.log();

// stack.pop();
// stack.pop();
// stack.pop();
// stack.log();
