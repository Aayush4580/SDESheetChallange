var grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];
// Output: 4
var rottenOranges = (grid) => {
  var m = grid.length;
  var n = grid[0].length;
  var freshCount = 0;
  var rottenQueue = [];
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === 1) freshCount++;
      if (grid[r][c] === 2) rottenQueue.push([r, c]);
    }
  }
  var minute = -1;
  if (freshCount === 0 && rottenQueue.length === 0) return minute;
  while (rottenQueue.length) {
    let size = rottenQueue.length;
    for (let i = 0; i < size; i++) {
      var [row, col] = rottenQueue.shift();
      for (const [x, y] of DIR) {
        let newRow = row + x;
        let newCol = col + y;
        if (newRow < 0 || newRow >= m || newCol < 0 || newCol >= n) continue;
        if (grid[newRow][newCol] === 1) {
          freshCount--;
          grid[newRow][newCol] = 2;
          rottenQueue.push([newRow, newCol]);
        }
      }
    }
    minute++;
  }

  return freshCount === 0 ? minute : -1;
};
var DIR = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
console.log(rottenOranges(grid));
