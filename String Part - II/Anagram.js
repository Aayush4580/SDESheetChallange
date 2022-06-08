// Input: s = "anagram", t = "nagaram"
// Output: true

var isAnagram = function (s, t) {
  var hashMap = {};
  if (s.length !== t.length) return false;
  for (var i of s) {
    hashMap[i] = hashMap[i] + 1 || 1;
  }
  console.log(hashMap);
  for (var j of t) {
    if (hashMap[j]) {
      hashMap[j]--;
    }
  }

  for (var k of s) {
    if (hashMap[k] > 0) {
      return false;
    }
  }

  return true;
};
