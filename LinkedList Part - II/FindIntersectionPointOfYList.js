var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  while (headB) {
    var temp = headA;
    while (temp) {
      if (headB === temp) return headB;
      temp = temp.next;
    }
    headB = headB.next;
  }
  return null;
};
