var nums = [3, 2, 4],
  target = 6;

var twoSum = (nums, target) => {
  var res = [];
  if (!nums.length) return res;
  nums.sort((a, b) => a - b);
  var left = 0;
  var right = nums.length - 1;
  while (left < right) {
    var sum = nums[left] + nums[right];

    if (sum === target) {
      res.push(left, right);
      left++;
      right--;
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return res;
};

console.log(twoSum(nums, target));
