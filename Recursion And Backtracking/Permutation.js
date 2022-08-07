var permute = function (nums) {
  var result = [];
  return helper(0, nums, result);
};
var helper = (i, nums, result) => {
  if (i === nums.length) {
    result.push(nums.slice());
    return;
  }
  for (var j = i; j < nums.length; j++) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    helper(i + 1, nums, result);
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  return result;
};
var nums = [1, 2, 3];
console.log(permute(nums));
