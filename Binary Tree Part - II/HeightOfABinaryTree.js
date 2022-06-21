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

var heightOfTree = (root) => {
  if (!root) return 0;
  return helper(root, 0);
};
var helper = (root, height) => {
  if (!root) return 0;
  var left = helper(root.left, height + 1);
  var right = helper(root.right, height + 1);
  return 1 + Math.max(left, right);
};

console.log(heightOfTree(a));
