var matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

var setMatrixToZero = (matrix) => {
  var row = Array(matrix.length).fill(1);
  var column = Array(matrix[0].length).fill(1);
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (matrix[r][c] === 0) {
        row[r] = 0;
        column[c] = 0;
      }
    }
  }
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (row[r] === 0 || column[c] === 0) {
        matrix[r][c] = 0;
      }
    }
  }

  return matrix;
};
console.log(setMatrixToZero(matrix));
