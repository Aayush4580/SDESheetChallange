var validParentheses = (s) => {
  var stack = [];
  for (var i of s) {
    if (i === "(" || i === "{" || i === "[") {
      stack.push(i);
    }
    if (!stack.length) return false;
    switch (i) {
      case ")":
        {
          let check = stack.pop();
          if (check !== "(") return false;
        }
        break;
      case "}":
        {
          let check = stack.pop();
          if (check !== "{") return false;
        }
        break;
      case "]":
        {
          let check = stack.pop();
          if (check !== "[") return false;
        }
        break;
      default:
        break;
    }
  }
  return stack.length === 0;
};
var s = "()[]{}";
console.log(validParentheses(s));
