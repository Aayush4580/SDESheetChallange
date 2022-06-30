// Input: m = 3, n = 7
// Output: 28
var uniquePaths = function (m, n) {
  var memo = Array(m).fill(Array(n).fill(1));
  for (var row = 1; row < m; row++) {
    for (var col = 1; col < n; col++) {
      memo[row][col] = memo[row - 1][col] + memo[row][col - 1];
    }
  }
  return memo[m - 1][n - 1];
};

console.log(uniquePaths(m, n));
