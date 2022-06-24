// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]

var nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;
var maxSlidingWindow = function (nums, k) {
  var res = [];
  var subArr = [];
  for (var i = 0; i < nums.length; i++) {
    subArr.push(nums[i]);
    if (subArr.length === 3) {
      res.push(Math.max(...subArr));
      subArr.shift();
    }
  }
  return res;
};

console.log(maxSlidingWindow(nums, k));
