var candidates = [2, 3, 6, 7],
  target = 7;

var combinationSum = function (candidates, target) {
  var res = [];
  var subSet = [];
  var index = 0;
  return helper(candidates, index, target, subSet, res);
};

function helper(candidates, index, target, subSet, res) {
  if (target < 0) return;
  if (target === 0) {
    res.push(subSet.slice());
  }
  for (var i = index; i < candidates.length; i++) {
    subSet.push(candidates[i]);
    helper(candidates, i, target - candidates[i], subSet, res);
    subSet.pop();
  }

  return res;
}
console.log(combinationSum(candidates, target));
