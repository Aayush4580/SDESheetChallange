var nums = [1, 1, 0, 1, 1, 1];
var houseRobberII = (nums) => {
  var count = 0;
  var maxCount = 0;
  for (let i of nums) {
    if (i === 0) {
      count = 0;
    } else {
      count++;
    }
    maxCount = Math.max(count, maxCount);
  }
  return maxCount;
};
console.log(houseRobberII(nums));
