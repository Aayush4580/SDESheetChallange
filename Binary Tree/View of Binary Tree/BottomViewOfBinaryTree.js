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

//         a
//        / \
//       b   c
//      / \   \
//     d   e   g

// output: d b e c g

var levelOrderTraversal = (root) => {
  if (!root) return;
  var result = [];
  root.hd = 0;
  // lets add a new parameter horizontal distance hd to root
  var queue = [root];
  var map = new Map();
  while (queue.length > 0) {
    let length = queue.length;
    var subArr = [];
    for (var i = 0; i < length; i++) {
      var currentNode = queue.shift();
      var currentHd = currentNode.hd;
      subArr.push(currentNode.data);
      // if (!map.has(currentNode.hd)) {
      map.set(currentNode.hd, currentNode.data);
      // }
      //the if statement has been removed so that the updated value can be stored in key
      if (currentNode.left) {
        currentNode.left.hd = currentHd - 1;
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        currentNode.right.hd = currentHd + 1;
        queue.push(currentNode.right);
      }
    }
  }
  let arr = Array.from(map);
  console.log(...map);
  arr.sort((a, b) => a[0] - b[0]);
  //sort based on the 0th parameter i.e hd
  for (var [hd, value] of arr) {
    result.push(value);
  }
  return result;
};

console.log(levelOrderTraversal(a));
