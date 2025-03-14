class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  //   buildTree(array) function that takes an array of data (e.g., [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]) and turns it into a balanced binary tree full of Node objects appropriately placed. The buildTree function should return the level-0 root node.
  buildTree(array) {
    array = [...new Set(array)].sort((a, b) => a - b); // Remove duplicates and sort
    return this.sortedArrayToBST(array);
  }
  sortedArrayToBST(array) {
    if (!array.length) return null;

    const mid = Math.floor(array.length / 2);
    const root = new Node(array[mid]);

    root.left = this.sortedArrayToBST(array.slice(0, mid));
    root.right = this.sortedArrayToBST(array.slice(mid + 1));
    return root;
  }

  //   insert(value) insert the given value
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  //   deleteItem(value) delete the given value
  deleteItem(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(node, value) {
    if (!node) {
      return null;
    }

    if (value < node.data) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.data) {
      node.right = this.deleteNode(node.right, value);
    } else {
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      }

      node.data = this.minNode(node.right);
      node.right = this.deleteNode(node.right, node.data);
    }
    return node;
  }

  //   minNode(node) given a node, find the smallest child
  minNode(node) {
    let currentNode = node;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  //   find(value) returns the node with the given value
  find(value) {
    return this.findItem(this.root, value);
  }

  findItem(node, value) {
    if (node) {
      if (node.data === value) {
        return node;
      } else if (value < node.data) {
        return this.findItem(node.left, value);
      } else if (value > node.data) {
        return this.findItem(node.right, value);
      }
    } else {
      console.log(`${value} not found.`);
      return null;
    }
  }

  //   levelOrder() levelOrder should traverse the tree in breadth-first level order
  levelOrder() {
    let levelOrderResult = [];
    if (!this.root) {
      return null;
    }

    const queue = [this.root]; // Using array as queue for FIFO
    while (queue.length > 0) {
      const currentNode = queue.shift(); // remove and return the first element in the array (here queue)
      levelOrderResult.push(currentNode.data);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return levelOrderResult;
  }

  //   levelOrderRecursive() levelOrder should traverse the tree in breadth-first level order
  levelOrderRecursive() {
    let levelOrderResult = [];
    if (!this.root) {
      return [];
    }

    function traverse(node, level) {
      if (!node) {
        return;
      }

      if (!levelOrderResult[level]) {
        levelOrderResult[level] = [];
      }

      levelOrderResult[level].push(node.data);

      traverse(node.left, level + 1);
      traverse(node.right, level + 1);
    }

    traverse(this.root, 0);

    return levelOrderResult;
  }

  //   inOrder(root, resArr = []) traverse the tree in their inOrder depth-first order
  inOrder(root, resArr = []) {
    if (root === null) {
      return;
    }

    this.inOrder(root.left, resArr);
    resArr.push(root.data);
    this.inOrder(root.right, resArr);

    return resArr;
  }

  //   preOrder(root, resArr = []) traverse the tree in their preOrder depth-first order
  preOrder(root, resArr = []) {
    if (root === null) {
      return;
    }

    resArr.push(root.data);
    this.preOrder(root.left, resArr);
    this.preOrder(root.right, resArr);

    return resArr;
  }
  //   postOrder() traverse the tree in their postOrder depth-first order
  postOrder(root, resArr = []) {
    if (root === null) {
      return;
    }

    this.postOrder(root.left, resArr);
    this.postOrder(root.right, resArr);
    resArr.push(root.data);

    return resArr;
  }

  //   height(node) returns the given node’s height. Height is defined as the number of edges in the longest path from a given node to a leaf node. An edge is a line or connection that links two nodes, representing a parent-child relationship
  height(node) {
    // if the tree is empty return -1
    if (!node) {
      return -1;
    } else {
      const leftHeight = this.height(node.left);
      const rightHeight = this.height(node.right);

      return Math.max(leftHeight, rightHeight) + 1;
    }
  }

  //   depth(node) returns the given node’s depth. Depth is defined as the number of edges in the path from a given node to the tree’s root node.
  depth(node) {
    let distance = 0;
    let currentNode = this.root;
    while (currentNode.data !== node.data) {
      if (node.data < currentNode.data) {
        currentNode = currentNode.left;
        distance++;
      } else if (node.data > currentNode.data) {
        currentNode = currentNode.right;
        distance++;
      }
    }
    return distance;
  }

  //   isBalanced() checks if the tree is balanced. A balanced tree is one where the difference between heights of the left subtree and the right subtree of every node is not more than 1.
  isBalanced() {
    let balanced = true;
    const allNodes = this.getAllTheNodes(this.root);
    for (let i = 0; i < allNodes.length; i++) {
      const leftSubtreeHeight = this.height(allNodes[i].left);
      const rightSubtreeHeight = this.height(allNodes[i].right);
      if (Math.abs(leftSubtreeHeight - rightSubtreeHeight) > 1) {
        balanced = false;
      }
    }
    return balanced;
  }

  getAllTheNodes(root, array = []) {
    if (!root) {
      return;
    }
    array.push(root);
    this.getAllTheNodes(root.left);
    this.getAllTheNodes(root.right);

    return array;
  }

  //   rebalance() rebalances an unbalanced tree. Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.
  rebalance() {
    const treeArray = this.levelOrder();
    this.root = this.buildTree(treeArray);
    return this.root;
  }

  //   prettyPrint() function that will console.log your tree in a structured format. This function will expect to receive the root of your tree as the value for the node parameter.

  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }
}

module.exports = Tree;
