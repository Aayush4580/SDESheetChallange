// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

var nextGreaterElement = function (nums1, nums2) {
  var result = [];
  for (var i = 0; i < nums1.length; i++) {
    var index = -1;
    var found = false;
    for (var j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        found = true;
      }
      if (found && nums1[i] < nums2[j]) {
        index = nums2[j];
        break;
      }
    }
    result.push(index);
  }

  return result;
};
var nums1 = [4, 1, 2],
  nums2 = [1, 3, 4, 2];
console.log(nextGreaterElement());
