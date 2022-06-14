var lengthOfLongestSubstring = function (s) {
  var longest = 0;
  for (var i = 0; i < s.length; i++) {
    var set = new Set();
    for (var j = i; j < s.length; j++) {
      if (set.has(s[j])) {
        break;
      } else {
        set.add(s[j]);
      }
    }
    longest = Math.max(set.size, longest);
  }

  return longest;
};
var s =
  // "abcabcbb"
  // "bbbbb"
  "pwwkew";
console.log(lengthOfLongestSubstring(s));
