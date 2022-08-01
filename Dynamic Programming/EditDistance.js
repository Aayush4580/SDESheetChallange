var word1 = "horse",
  word2 = "ros";
var editDistance = (word1, word2) => {
  var grid = [];
  // we are taking length+1 as we will check string from ""
  for (let i = 0; i < word1.length + 1; i++) {
    var row = [];
    for (let j = 0; j < word2.length + 1; j++) {
      row.push(j);
    }
    row[0] = i;
    grid.push(row);
  }
  for (let i = 1; i < word1.length; i++) {
    for (let j = 1; j < word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        grid[i][j] = grid[i - 1][j - 1];
      } else {
        grid[i][j] =
          1 + Math.min(grid[i - 1][j - 1], grid[i - 1][j], grid[i][j - 1]);
      }
    }
  }

  return grid[word1.length][word2.length];
};
console.log(editDistance(word1, word2));
