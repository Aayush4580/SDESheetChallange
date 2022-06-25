var topKFrequent = function (nums, k) {
  var hashMap = {};
  for (var i = 0; i < nums.length; i++) {
    if (!hashMap[nums[i]]) {
      hashMap[nums[i]] = 1;
    } else {
      hashMap[nums[i]]++;
    }
  }
  var keysSorted = Object.keys(hashMap).sort(function (a, b) {
    return hashMap[b] - hashMap[a];
  });
  //first we are getting the keys then sorting based on the value from the hashMap
  return keysSorted.slice(0, k);
};
var nums = [1, 2, 2, 3],
  k = 2;

console.log(topKFrequent(nums, k));
