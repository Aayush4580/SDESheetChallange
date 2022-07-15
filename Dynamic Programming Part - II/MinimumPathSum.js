var grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];

var breakPalindome = (grid) => {
  var row = grid.length;
  var column = grid[0].length;
  if (row === 0) return 0;

  //fill the first column
  for (let i = 1; i < row; i++) {
    grid[i][0] += grid[i - 1][0];
  }

  //fill the first row
  for (let i = 1; i < column; i++) {
    grid[0][i] += grid[0][i - 1];
  }

  for (var r = 1; r < grid.length; r++) {
    for (var c = 1; c < grid[0].length; c++) {
      grid[r][c] += Math.min(grid[r - 1][c], grid[r][c - 1]);
    }
  }
  return grid[row - 1][column - 1];
};

console.log(breakPalindome(grid));
//7
