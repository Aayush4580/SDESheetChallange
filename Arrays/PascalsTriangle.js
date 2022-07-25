var setMatrixToZero = (n) => {
  var matrix = [];
  for (let r = 0; r < n; r++) {
    var subArr = [];
    for (let c = 0; c < r + 1; c++) {
      if (c === 0 || c === r) {
        subArr.push(1);
      } else {
        var sum = matrix[r - 1][c] + matrix[r - 1][c - 1];
        subArr.push(sum);
      }
    }
    matrix.push(subArr);
  }

  return matrix;
};
console.log(setMatrixToZero(5));
