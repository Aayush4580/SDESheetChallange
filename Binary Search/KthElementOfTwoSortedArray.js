function kthElement(A, B, n, m, k) {
  var res = A.concat(B).sort((a, b) => a - b);
  return res[k - 1];
}
