const Queue = require('../../data-structure/queue');
const BST = require('../../data-structure/trees/BST');

function BFS(root) {
  const queue = new Queue();
  const data = [];
  queue.push(root);

  while (queue.length) {
    const node = queue.shift().value;
    data.push(node.value);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return data;
}

const bst = new BST();

bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(20);
bst.insert(3);
bst.insert(8);

console.log(BFS(bst.root));
