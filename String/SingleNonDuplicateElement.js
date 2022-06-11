function findSingleElement(nums) {
  var left = 0;
  while (left < nums.length) {
    if (nums[left] === nums[left + 1]) {
      //checking if two consequtive elements are matching or not
      //if matching then skip 2 steps
      left += 2;
    } else {
      //if not match then first left is ans (as in before step we are skipping two steps and array is sorted)
      return nums[left];
    }
  }
}
var nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];
console.log(findSingleElement(nums));
