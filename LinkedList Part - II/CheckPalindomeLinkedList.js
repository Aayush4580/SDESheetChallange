var isPalindrome = function (head) {
  if (!head) return head;
  var current = head;
  var result = [];
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return checkPalindrome(result);
};

var checkPalindrome = (arr) => {
  for (var i = 0; i < Math.floor(arr.length / 2); i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) return false;
  }
  return true;
};
