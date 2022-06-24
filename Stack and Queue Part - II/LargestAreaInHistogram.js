var heights = [2, 1, 5, 6, 2, 3];
var largestRectangleAreaNaive = function (heights) {
  var res = [];
  for (var i = 0; i < heights.length; i++) {
    var left = i;
    var right = i;
    while (heights[left] >= heights[i]) {
      left--;
    }
    while (heights[right] >= heights[i]) {
      right++;
    }

    var area = (right - left - 1) * heights[i];
    //-1 as right goes till array length
    res.push(area);
  }
  console.log(res);
  return Math.max(...res);
};
//Time complexity O(n^2)
console.log(largestRectangleAreaNaive(heights));
