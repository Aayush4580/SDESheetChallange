var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
var removeDuplicates = function (nums) {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
};

console.log(removeDuplicates(nums));
