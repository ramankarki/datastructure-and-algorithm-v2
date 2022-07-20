const Stack = require('../../data-structure/stacks');
const BST = require('../../data-structure/trees/BST');

function PreOrder(root) {
  const stack = new Stack();
  const data = [];
  stack.push(root);

  while (stack.length) {
    const node = stack.pop().value;
    data.push(node.value);

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return data;
}

function PostOrder(root) {
  const data = [];

  function stack(node) {
    if (node.left) stack(node.left);
    if (node.right) stack(node.right);
    data.push(node.value);
  }
  stack(root);

  return data;
}

const bst = new BST();

bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(20);
bst.insert(3);
bst.insert(8);

console.log(PostOrder(bst.root));
