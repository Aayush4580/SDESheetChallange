var findDuplicate = function (nums) {
  let brr = {};
  for (let num of nums) {
    if (brr[num] === true) return num;
    else brr[num] = true;
  }
};
var nums = [1, 3, 4, 2, 2];
console.log(findDuplicate(nums));
