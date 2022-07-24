var nums = [5, 4, -1, 7, 8];
var maxSubArray = (nums) => {
  var max = 0;
  var currmax = 0;
  for (let i of nums) {
    currmax += i;
    if (currmax < 0) {
      currmax = 0;
    }
    max = Math.max(currmax, max);
  }

  return max;
};
console.log(maxSubArray(nums));
