var nums = [4, 5, 6, 7, 0, 1, 2],
  target = 0;
var findIndex = (nums, target) => {
  var low = 0;
  var high = nums.length - 1;

  while (low <= high) {
    var mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    // checking the left thand side
    if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target <= nums[mid]) {
        //checking if the target resides in between left side 0 and mid point
        //mid is getting higher hence decrease high value
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (nums[mid] <= target && target <= nums[high]) {
        //mid is getting higher hence decrease high value
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
};
console.log(findIndex(nums, target));
