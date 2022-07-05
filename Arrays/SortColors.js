var sortColors = function (nums) {
  let hashMap = {};
  var i = 0;
  for (let ele of nums) {
    hashMap[ele] = (hashMap[ele] || 0) + 1;
  }

  while (hashMap[0] > 0) {
    nums[i] = 0;
    i++;
    hashMap[0] -= 1;
  }
  while (hashMap[1] > 0) {
    nums[i] = 1;
    i++;
    hashMap[1] -= 1;
  }
  while (hashMap[2] > 0) {
    nums[i] = 2;
    i++;
    hashMap[2] -= 1;
  }
  return nums;
};

var nums = [2, 1, 1, 0, 2, 1];
console.log(sortColors(nums));
