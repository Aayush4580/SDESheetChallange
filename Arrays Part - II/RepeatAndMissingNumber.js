function repeatedNum(nums) {
  var min = Math.min(...nums, 1);
  var max = Math.max(...nums, nums.length);
  var hashMap = {};
  for (let i = min; i <= max; i++) {
    hashMap[i] = 0;
  }
  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]]++;
  }
  let repeatedNumber, missingNumber;
  for (let i in hashMap) {
    if (hashMap[i] === 0) missingNumber = i;
    if (hashMap[i] > 1) repeatedNumber = i;
  }
  return [parseInt(repeatedNumber), parseInt(missingNumber)];
}
var nums = [2, 2];
console.log(repeatedNum(nums));
