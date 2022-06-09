// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221

var countAndSay = function (n) {
  var str = "1";
  for (var i = 1; i < n; i++) {
    var temp = str;
    var count = 1;
    str = "";
    for (var j = 0; j < temp.length; j++) {
      if (temp[j] !== temp[j + 1]) {
        str += String(count) + String(temp[j]);
        count = 1;
      } else {
        count++;
      }
    }
  }
  return str;
};

console.log(countAndSay(4));
