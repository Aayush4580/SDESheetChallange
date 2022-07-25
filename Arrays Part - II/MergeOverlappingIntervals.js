var mergeIntervals = (intervals) => {
  var res = [intervals[0]];
  for (var [s2, e2] of intervals) {
    var s1 = res[res.length - 1][0];
    var e1 = res[res.length - 1][1];
    if (s2 <= e1) {
      res[res.length - 1][0] = Math.min(s1, s2);
      res[res.length - 1][1] = Math.max(e1, e2);
    } else {
      res.push([s2, e2]);
    }
  }
  return res;
};
var intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(mergeIntervals(intervals));
