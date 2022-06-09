// Input: version1 = "1.0", version2 = "1.0.0"
// Output: 0
// Explanation: version1 does not specify revision 2, which means it is treated as "0".
// Example 3:

// Input: version1 = "0.1", version2 = "1.1"
// Output: -1
// Explanation: version1's revision 0 is "0", while version2's revision 0 is "1". 0 < 1, so version1 < version2.

var version1 = "1.01",
  version2 = "1.001";

var compareVersion = function (version1, version2) {
  var version1Arr = version1.split(".");
  var version2Arr = version2.split(".");
  var length = Math.max(version1Arr.length, version2Arr.length);
  for (var i = 0; i < length; i++) {
    var v1 = +version1Arr[i] || 0; //+ is shorthand for parseInt(verseion1Arr[i])
    var v2 = +version2Arr[i] || 0;
    if (v1 < v2) return -1;
    if (v1 > v2) return 1;
  }
  return 0;
};

console.log(compareVersion(version1, version2));
