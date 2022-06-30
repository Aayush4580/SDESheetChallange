var majorityElement = function (nums) {
  if (nums.length <= 1) return nums[0];
  var element = 0;
  var hashMap = {};
  for (var i of nums) {
    hashMap[i] = (hashMap[i] || 0) + 1;
  }
  var majorityCount = Math.floor(nums.length / 2);
  for (var j in hashMap) {
    if (hashMap[j] > majorityCount) element = j;
  }
  return element;
};

var nums = [4, 4, 2, 4, 3, 4, 4, 3, 2, 4];
console.log(majorityElement(nums));
