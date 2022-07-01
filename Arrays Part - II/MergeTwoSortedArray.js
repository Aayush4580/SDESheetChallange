var nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
// final array will be of size m+n
var merge = function (nums1, nums2, m, n) {
  var j = 0;
  for (var i = m; i < m + n; i++) {
    nums1[i] = nums2[j];
    j++;
  }
  return nums1.sort((a, b) => a - b);
};

console.log(merge(nums1, nums2, m, n));
