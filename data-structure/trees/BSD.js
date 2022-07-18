class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BSD {
  coustructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return node;
    }
    let activeNode = this.root;

    while (true) {
      if (value < activeNode.value) {
        if (!activeNode.left) {
          activeNode.left = node;
          return node;
        }
        activeNode = activeNode.left;
      } else {
        if (!activeNode.right) {
          activeNode.right = node;
          return node;
        }
        activeNode = activeNode.right;
      }
    }
  }

  find(value, root = this.root) {
    if (!root) return false;

    if (root.value === value) return true;
    else if (value < root.value) return this.find(value, root.left);
    return this.find(value, root.right);
  }
}

const bsd = new BSD();

bsd.insert(5);
bsd.insert(1);
bsd.insert(3);
bsd.insert(2);
bsd.insert(4);

console.log(bsd);

console.log(bsd.find(5));
