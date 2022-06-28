class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const g = new Node("g");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = g;

//for a balanced binary tree the total sum of left and right subtree should be 0 or more than 1
//check AVL tree for reference
var balancedBinaryTree = (root) => {
  if (!root) return false;
  return helper(root, 0) >= 0;
};

const helper = (root, height) => {
  if (!root) return 0;
  var left = helper(root.left, height + 1);
  var right = helper(root.right, height + 1);
  if (left === -1 || right === -1 || Math.abs(right - left) > 1) return -1;
  return Math.max(left, right);
};

console.log(balancedBinaryTree(a));
