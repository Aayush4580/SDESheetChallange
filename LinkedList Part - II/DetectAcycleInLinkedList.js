var hasCycle = function (head) {
  let map = new Map();
  while (head) {
    if (map.has(head)) {
      return true;
    } else {
      map.set(head, 1);
    }
    head = head.next;
  }
  return false;
};
