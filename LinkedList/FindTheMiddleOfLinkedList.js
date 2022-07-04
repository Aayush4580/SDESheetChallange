var middleNodeApproach1 = function (head) {
  var fast = head;
  var slow = head;
  var count = 0;
  while (fast) {
    fast = fast.next;
    count++;
  }
  //getting the length of the linkedlist
  var mid = Math.floor(count / 2);
  //find the middle of the lenght
  //iterating till that point
  for (var i = 0; i < mid; i++) {
    slow = slow.next;
  }
  return slow;
};

var middleNodeApproach2 = function (head) {
  var fast = head;
  var slow = head;
  while (fast && fast.next) {
    //if fast or fast.next is null that means fast is at end and slow is in middle
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
