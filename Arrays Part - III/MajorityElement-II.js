var majorityElement = function (nums) {
  if (nums.length === 1) return nums;
  var res = [];

  var n = Math.floor(nums.length / 3);
  var hashMap = {};
  for (var i of nums) {
    hashMap[i] = hashMap[i] + 1 || 1;
  }

  for (var j of Object.keys(hashMap)) {
    if (hashMap[j] > n) res.push(parseInt(j, 0));
  }
  return res;
};

var nums = [3, 2, 3];
console.log(majorityElement(nums));
//[3]
