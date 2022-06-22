// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
var nums = [-1, 0, 1, 2, -1, -4];
var threeSum = function (nums) {
  var res = [];
  if (!nums.length) return res;
  nums.sort((a, b) => a - b);
  var seen = new Set();
  for (var i = 0; i < nums.length; i++) {
    var left = i + 1;
    var right = nums.length - 1;
    var mid = i;
    while (left < right) {
      //this should be less than
      var sum = nums[left] + nums[mid] + nums[right];
      if (sum === 0) {
        var arr = `${nums[left]}, ${nums[mid]}, ${nums[right]}`;
        if (!seen.has(arr)) {
          res.push([nums[left], nums[mid], nums[right]]);
          seen.add(arr);
        }
        left++;
        right--;
      }
      if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return res;
};

console.log(threeSum(nums));
