# Tree Traversal

## BFS (Breadth First Search)

<img src="./BFS.png">

<br>

- Use queue.
- Start with pushing root node to queue.
- Loop until queue is empty.
  - Shift node from queue and check for its value.
  - Push every child node to queue.
  - Repeat.

<br>

## DFS (Depth First Search)

<img src="./DFS.png">

<br>

## Types of DFS

Use Stack - Iteratively or Recursively

### PreOrder

- Start with the root node and check its value.
- Visit all the left node.
- Visit all the right node.

<br>

### PostOrder

- Visit all the left node.
- Visit all the right node.
- Finally check the value of node and move from down to up.

<br>

### InOrder

- Visit all the left node.
- Check the value of current node.
- Visit all the right node.

<br>

# Use case for BFS, DFS

Time complexity for BFS and DFS is same. So we will look for space complexity.

<br>

### If tree is narrow, Consider BFS

<img src="./BFS-usecase.png">

<br>

### If tree is wider, Consider DFS

<img src="./DFS-usecase.png">

<br>

# Use case for PreOrder, PostOrder, InOrder

## PreOrder

It can be used to copy or re-construct new tree from old tree.

<br>

## PostOrder

If we want to start looking from the leaves.

<br>

## InOrder

It can be used to get sorted data with BST.
