class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * @description Add new node to the end of the linked list.
   */
  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return node;
  }

  /**
   * @description Remove last node from the linked list.
   */
  pop() {
    if (!this.length) return;

    if (this.head === this.tail) {
      let activeNode = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return activeNode;
    }

    let activeNode = this.head;
    while (activeNode.next.next) {
      activeNode = activeNode.next;
    }

    let removedNode = activeNode.next;
    activeNode.next = null;
    this.tail = activeNode;
    this.length--;
    return removedNode;
  }

  /**
   * @params {any} value
   * @description Add new node to the start of the linked list.
   */
  unshift(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    return node;
  }

  /**
   * @description Remove first node of the linked list.
   */
  shift() {
    if (!this.head) return;

    const activeNode = this.head;
    this.head = this.head.next;
    activeNode.next = null;
    this.length--;
    return activeNode;
  }

  /**
   *
   * @param {any} value
   * @returns value, index
   */
  search(value) {
    let activeNode = this.head;
    let index = 0;

    while (activeNode) {
      if (activeNode.value === value) {
        return { value, index };
      }

      activeNode = activeNode.next;
      index++;
    }
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
}

const list = new LinkedList();

list.push(3);
list.push(5);
console.log(list.push(7));
console.log(list.unshift(9));
