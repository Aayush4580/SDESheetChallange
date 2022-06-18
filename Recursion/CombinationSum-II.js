// Input: (candidates = [2, 5, 2, 1, 2]), (target = 5);
// Output: [[1, 2, 2], [5]];

var combinationSum2 = function (candidates, target) {
  if (!candidates || candidates.length === 0) return [];
  candidates.sort((a, b) => a - b);
  var subArr = [];
  var res = [];
  return dfs(candidates, target, subArr, 0, res);
};

const dfs = (candidates, target, subArr, index, res) => {
  if (target < 0) return;
  if (target === 0) {
    res.push(subArr.slice());
    return;
  }
  for (let i = index; i < candidates.length; i++) {
    if (i > index && candidates[i] === candidates[i - 1]) continue; // avoid repeated calculations if previous number was the same

    subArr.push(candidates[i]);
    dfs(candidates, target - candidates[i], subArr, i + 1, res);
    subArr.pop();
  }
  return res;
};
var candidates = [2, 5, 2, 1, 2],
  target = 5;
console.log(combinationSum2(candidates, target));
