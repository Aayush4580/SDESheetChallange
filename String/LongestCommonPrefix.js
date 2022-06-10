// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var strs = ["flower", "flow", "flight"];

var longestCommonPrefix = (strs) => {
  var str = "";
  var current = strs[0];
  for (var i = 0; i < current.length; i++) {
    var found = false;
    for (var j = 1; j < strs.length; j++) {
      var currentLetter = current[i];
      found = currentLetter === strs[j][i];
    }
    if (found) str += current[i];
  }
  return str;
};
console.log(longestCommonPrefix(strs));
