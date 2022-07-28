var s = "LVIII";

var romanNumberToInt = (s) => {
  var hashMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  var res = 0;
  for (var i = 0; i < s.length; i++) {
    var currentNum = hashMap[s[i]];
    var nextNum = hashMap[s[i + 1]] || 0;
    if (nextNum > currentNum) {
      res += nextNum - currentNum;
      i++;
    } else {
      res += currentNum;
    }
  }
  return res;
};

console.log(romanNumberToInt(s));
