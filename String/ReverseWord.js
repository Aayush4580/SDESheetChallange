var s = " a   hello world  ";

var reverseString = (s) => {
  var sArr = s.trim().split(" ");
  var res = [];
  for (let str = sArr.length - 1; str >= 0; str--) {
    if (sArr[str].length) {
      res.push(sArr[str]);
    }
  }

  return res.join(" ");
};

console.log(reverseString(s));
