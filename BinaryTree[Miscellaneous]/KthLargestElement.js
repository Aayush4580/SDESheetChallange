var findKthLargest = function (nums, k) {
  nums.sort((a, b) => a - b);
  return nums[nums.length - k];
};

var nums = [3, 2, 1, 5, 6, 4],
  k = 2;
console.log(findKthLargest(nums, k));
// Output: 5
