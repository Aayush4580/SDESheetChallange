var kthSmallest = function (root, k) {
  //do a in-order traversal (which will return sorted array)
  //create an array
  //return the kth(1 indexed) note
  var result = [];
  helper(root, result);
  return result[k - 1];
};

var helper = (root, result) => {
  if (!root) return;

  helper(root.left, result);
  result.push(root.val);
  helper(root.right, result);
};
