var leftViewOfBinaryTree = function (root) {
  if (!root) return [];
  var result = [];
  var maxLevel = 0;
  var level = 1;
  return helper(root, level, maxLevel, result);
};

const helper = (root, level, maxLevel, result) => {
  if (!root) return;
  if (maxLevel < level) {
    result.push(root.val);
    maxLevel = level;
  }

  helper(root.left, level + 1, maxLevel, result);
  helper(root.right, level + 1, maxLevel, result);
  return result;
};
