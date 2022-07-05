var removeNthFromEnd = function (head, n) {
  let fast = head;
  let slow = head;
  var count = 0;
  while (fast) {
    fast = fast.next;
    count++;
  }
  //get the total count
  var first = count - n;
  //get the difference
  if (n === 0) return head;
  if (first === 0) return head.next;
  //inbound check
  while (first > 1) {
    slow = slow.next;
    first--;
  }
  //iterate the slow till the difference
  slow.next = slow.next.next;
  //skip the next to next.next
  return head;
};
