var inorderTraversal = function (root) {
  if (!root) return [];
  var result = [];
  return helper(root, result);
};

const helper = (root, result) => {
  if (!root) return;
  helper(root.left, result);
  result.push(root.val);
  helper(root.right, result);
  return result;
};
