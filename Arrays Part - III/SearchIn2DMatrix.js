var longestConsecutive = function (matrix, target) {
  var row = 0;
  var column = matrix[row].length - 1;
  while (column >= 0 && row < matrix.length) {
    if (matrix[row][column] === target) return true;
    if (matrix[row][column] < target) {
      row++;
    } else {
      column--;
    }
  }
  return false;
};

var matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target = 3;
console.log(longestConsecutive(matrix, target));
