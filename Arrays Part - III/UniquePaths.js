// Input: m = 3, n = 7
// Output: 28
var uniquePaths = function (m, n) {
  var memo = Array(m).fill(Array(n).fill(1));
  //need to create a dummy matrix of m x n and fill with 1
  //we will start iteration from position 1 as the robot is already on
  //position 0 and next step is 1 in both row and column
  for (var row = 1; row < m; row++) {
    for (var col = 1; col < n; col++) {
      memo[row][col] = memo[row - 1][col] + memo[row][col - 1];
      // next step will be the sum of previous row and column calue
    }
  }
  return memo[m - 1][n - 1];
};

console.log(uniquePaths(m, n));
