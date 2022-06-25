var start = [1, 3, 0, 5, 8, 5],
  end = [2, 4, 5, 7, 9, 9];

var activitySelection = (start, end) => {
  //main thing to remember is the end should sorted ascending order
  //if not sort then do sort
  var res = [[start[0], end[0]]];
  for (var i = 1; i < end.length; i++) {
    var e1 = end[i - 1];
    var s2 = start[i];
    if (e1 <= s2) res.push([start[i], end[i]]);
  }
  return res.length;
};

console.log(activitySelection(start, end));
