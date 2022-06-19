var inorderTraversal = function (root) {
  if (!root) return [];
  var result = [];
  return helper(root, result);
};

const helper = (root, result) => {
  if (!root) return;
  result.push(root.val);
  helper(root.left, result);
  helper(root.right, result);
  return result;
};
