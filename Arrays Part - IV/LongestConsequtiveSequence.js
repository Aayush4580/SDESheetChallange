var longestConsecutive = function (nums) {
  if (!nums.length) return 0;
  nums.sort((a, b) => a - b);
  var res = 1;
  var max = 1;
  var prev = nums[0];

  for (var i = 1; i < nums.length; i++) {
    var current = nums[i];

    if (prev + 1 === current) {
      res++;
    } else if (prev !== current) {
      res = 1;
    }
    max = Math.max(max, res);
    prev = nums[i];
  }
  return max;
};

var nums = [100, 4, 200, 1, 3, 2];
// var  nums = [0,3,7,2,5,8,4,6,0,1]
console.log(longestConsecutive(nums));
