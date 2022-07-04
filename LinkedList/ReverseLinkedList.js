class LinkedList {
  constructor(data, next = null) {
    (this.data = data), (this.next = null);
  }
}
// head = [3,6,8,10]
const d = new LinkedList(10);
const c = new LinkedList(8);
c.next = d;
const b = new LinkedList(6);
b.next = c;
const a = new LinkedList(3);
a.next = b;

var reverseLinkedList = (root) => {
  var previousNode = null;
  var currentNode = root;
  while (currentNode) {
    [currentNode.next, previousNode, currentNode] = [
      previousNode,
      currentNode,
      currentNode.next,
    ];
  }
  return previousNode;
};

console.log(reverseLinkedList(a));
