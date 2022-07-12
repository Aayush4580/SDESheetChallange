var grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

var countIslands = (grid) => {
  var set = new Set();
  var res = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (helper(grid, r, c, set)) {
        res++;
      }
    }
  }
  return res;
};
var helper = (grid, r, c, set) => {
  var rInbound = 0 <= r && r < grid.length;
  var cInbound = 0 <= c && c < grid[0].length;
  if (!rInbound || !cInbound) return false;
  if (grid[r][c] === "0") return false;
  var position = String(r, c);
  if (set.has(position)) return false;
  set.add(position);
  helper(grid, r + 1, c, set);
  helper(grid, r - 1, c, set);
  helper(grid, r, c + 1, set);
  helper(grid, r, c - 1, set);
  return true;
};
console.log(countIslands(grid));
//3
