var nums = [1, 2, 3, 4, 5, 0];

var maxProductSubArray = (nums) => {
  var localMax = nums[0];
  var localMin = nums[0];
  var result = nums[0];

  for (var i = 1; i < nums.length; i++) {
    const args = [nums[i], localMax * nums[i], localMin * nums[i]];
    localMax = Math.max(...args);
    localMin = Math.min(...args);
    result = Math.max(localMax, result);
  }
  return result;
};

console.log(maxProductSubArray(nums));
