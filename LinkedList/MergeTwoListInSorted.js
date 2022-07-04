class LinkedList {
  constructor(data, next = null) {
    (this.data = data), (this.next = null);
  }
}
// list1 = [6,8,10]
const d = new LinkedList(10);
const c = new LinkedList(8);
c.next = d;
const b = new LinkedList(6);
b.next = c;
// list2 = [1,3,4]
const g = new LinkedList(4);
const f = new LinkedList(3);
f.next = g;
const e = new LinkedList(1);
e.next = f;

var mergeTwoList = (l1, l2) => {
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1.data < l2.data) {
    l1.next = mergeTwoList(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoList(l1, l2.next);
    return l2;
  }
};

console.log(mergeTwoList(b, e));
