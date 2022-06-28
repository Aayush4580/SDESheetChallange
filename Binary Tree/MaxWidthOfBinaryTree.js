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
const f = new Node("f");
const g = new Node("g");

a.left = b;
a.right = c;
b.left = d;
d.left = e;
c.right = f;
f.left = g;
// root = [a,b,c,d,null,null,f,e,null,g]
//         (node:a,pos:0)
//        / \
//       b   (node:c,pos:2*0+1)
//      /     \
//     d       f
//    /       /
//   e       g

var maxWidthOfBinaryTree = (root) => {
  if (!root) return;
  var max = 0;
  // lets add a new parameter position with root
  var queue = [[root, 0]];
  while (queue.length > 0) {
    let length = queue.length;
    let first = queue[0][1];
    let last = queue[queue.length - 1][1];

    for (var i = 0; i < length; i++) {
      var [node, position] = queue.shift();
      const subIdx = position - first;
      if (node.left) queue.push([node.left, subIdx * 2 + 1]); // find next left idx & node
      if (node.right) queue.push([node.right, subIdx * 2 + 2]); // find next right idx & node
    }
    const width = last - first + 1; // add 1, 0-index based
    max = Math.max(max, width);
  }

  return max;
};

console.log(maxWidthOfBinaryTree(a));
