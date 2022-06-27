var nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];

var singleNonDuplicate = (nums) => {
  for (let i = 0; i < nums.length; i + 2) {
    if (nums[i] !== nums[i + 1]) return nums[i];
  }
};

console.log(singleNonDuplicate(nums));
