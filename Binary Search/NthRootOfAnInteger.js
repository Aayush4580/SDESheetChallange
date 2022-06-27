const multiply = (num, times) => {
  var res = 1;
  for (var i = 0; i < times; i++) {
    res *= num;
  }
  return res;
};
const findNthRoot = (n, m) => {
  var low = 1;
  var high = m;
  var eps = 1e-6;
  //as we have to take the result till 6 decimal place
  while (high - low > eps) {
    var mid = (low + high) / 2.0;
    if (multiply(mid, n) < m) {
      low = mid;
    } else {
      high = mid;
    }
  }
  return low;
};
console.log(findNthRoot(2, 16));
