var s = "  -42 with words";

var myAtoi = (s) => {
  s = s.trim();
  let sign = 1;
  if (s[0] === "-") {
    sign = -1;
    s = s.slice(1);
  }
  var digit = 0;
  for (var i of s) {
    var curr = getInt(i);
    if (curr !== -1) {
      digit = digit * 10 + curr;
    } else {
      break;
    }
  }
  return digit * sign;
};

var getInt = (val) => {
  switch (val) {
    case "0":
      return 0;
    case "1":
      return 1;
    case "2":
      return 2;
    case "3":
      return 3;
    case "4":
      return 4;
    case "5":
      return 5;
    case "6":
      return 6;
    case "7":
      return 7;
    case "8":
      return 8;
    case "9":
      return 9;
    default:
      return -1;
  }
};
console.log(myAtoi(s));
