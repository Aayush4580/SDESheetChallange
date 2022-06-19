var inorderTraversal = function (root) {
  if (!root) return [];
  var result = [];
  return helper(root, result);
};

const helper = (root, result) => {
  if (!root) return;

  helper(root.left, result);
  helper(root.right, result);
  result.push(root.val);
  return result;
};
