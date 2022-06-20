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

var diameterOfBinaryTree = (root) => {
  if (!root) return 0;
  const center = countDiameter(root.left) + countDiameter(root.right);
  const left = diameterOfBinaryTree(root.left);
  const right = diameterOfBinaryTree(root.right);
  return Math.max(center, left, right);
};

const countDiameter = (root) => {
  if (!root) return 0;
  return 1 + Math.max(countDiameter(root.left), countDiameter(root.right));
};

console.log(diameterOfBinaryTree(a));
