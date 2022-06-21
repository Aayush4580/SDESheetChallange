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

const x = new Node("a");
const y = new Node("b");
const z = new Node("c");
x.left = y;
x.right = z;

var isIdentical = (root1, root2) => {
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;
  else if (root1 && root2) {
    return (
      root1.data === root2.data &&
      isIdentical(root1.left, root2.left) &&
      isIdentical(root1.right, root2.right)
    );
  }
};

console.log(isIdentical(a, a));
