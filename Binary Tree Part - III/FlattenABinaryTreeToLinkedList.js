/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) return;

  //we need to take the left side of the tree
  //assign a null to it
  //and merge it to the right
  //connect other right part the right

  var tempLeft = root.left;
  var tempRight = root.right;
  root.left = null;

  flatten(tempLeft);
  flatten(tempRight);

  root.right = tempLeft;

  // now go to end of this new root
  var current = root;
  while (current.right) {
    current = current.right;
  }
  current.right = tempRight;
};
