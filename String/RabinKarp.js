// Input: a = "abcd", b = "cdabcdab"
// Output: 3
// Explanation: We return 3 because by repeating a three times "abcdabcdabcd", b is a substring of it.

var a = "abcd",
  b = "cdabcdab";

var repeatedStringMatch = function (a, b) {
  for (let i = 1; i <= Math.ceil(b.length / a.length) + 1; i++) {
    if (a.repeat(i).includes(b)) return i;
  }

  return -1;
};
console.log(repeatedStringMatch(a, b));
