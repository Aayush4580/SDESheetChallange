var findMedianSortedArrays = function (arr1, arr2) {
  var result = [...arr1, ...arr2].sort((a, b) => a - b);
  if (result.length % 2 === 0) {
    var m1 = Math.floor(result.length / 2);
    var m2 = m1 - 1;
    return (result[m1] + result[m2]) / 2;
  } else {
    return result[Math.floor(result.length / 2)];
  }
};
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
