var leftViewOfBinaryTree = function (root) {
  if (!root) return [];
  var result = [];
  var level = 0;
  return helper(root, level, result);
};

const helper = (root, level, result) => {
  if (!root) return;
  result[level] = root.val;
  helper(root.left, level + 1, result);
  helper(root.right, level + 1, result);
  return result;
};
