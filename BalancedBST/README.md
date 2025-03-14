# Balanced Binary Search Tree

#### Build a Balanced BST with no duplicate values. Be sure to always remove duplicate values or check for an existing value before inserting.

- `buildTree(array)` function that takes an array of data (e.g., [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]) and turns it into a balanced binary tree full of Node objects appropriately placed. The buildTree function should return the level-0 root node.
- `insert(value)` insert the given value
- `deleteItem(value)` delete the given value
- `find(value)` returns the node with the given value
- `levelOrder()` levelOrder should traverse the tree in breadth-first level order
- `levelOrderRecursive()` levelOrder should traverse the tree in breadth-first level order
- `inOrder(root, resArr = [])` traverse the tree in their inOrder depth-first order
- `preOrder(root, resArr = [])` traverse the tree in their preOrder depth-first order
- `postOrder()` traverse the tree in their postOrder depth-first order
- `height(node)` returns the given node’s height. Height is defined as the number of edges in the longest path from a given node to a leaf node. An edge is a line or connection that links two nodes, representing a parent-child relationship
- `depth(node)` returns the given node’s depth. Depth is defined as the number of edges in the path from a given node to the tree’s root node.
- `isBalanced()` checks if the tree is balanced. A balanced tree is one where the difference between heights of the left subtree and the right subtree of every node is not more than 1.
- `rebalance()` rebalances an unbalanced tree. Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.
