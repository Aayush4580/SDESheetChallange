function findMedian(A) {
  var res = [].concat(...A).sort((a, b) => a - b);
  return res[Math.floor(res.length / 2)];
}

var A = [
  [1, 3, 5],
  [2, 6, 9],
  [3, 6, 9],
];

console.log(findMedian(A));
