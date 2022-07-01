// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]
var rotateMatrix = (matrix) => {
  var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  for (var r = 0; r < matrix.length; r++) {
    for (var c = r; c < matrix[r].length; c++) {
      [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
    }
  }

  for (var j = 0; j < matrix.length; j++) {
    matrix[j] = matrix[j].reverse();
  }
  return matrix;
};
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(rotateMatrix(matrix));
