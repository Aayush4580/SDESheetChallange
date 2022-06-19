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

var levelOrderTraversal = (root) => {
  if (!root) return;
  var result = [];
  var queue = [root];

  while (queue.length > 0) {
    let length = queue.length;
    var subArr = [];
    for (var i = 0; i < length; i++) {
      var currentNode = queue.shift();
      subArr.push(currentNode.data);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    result.push(subArr);
  }

  return result;
};

console.log(levelOrderTraversal(a));
