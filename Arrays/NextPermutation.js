var nextPermutation = function (arr) {
  var peak = 0;
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > arr[i - 1]) {
      peak = i;
      break;
    }
  }
  for (var j = arr.length - 1; j >= 0; j--) {
    if (arr[j] > arr[peak - 1]) {
      [arr[j], arr[peak - 1]] = [arr[peak - 1], arr[j]];
      break;
    }
  }
  var arrlength = arr.length - 1;
  while (peak < arrlength) {
    [arr[peak], arr[arrlength]] = [arr[arrlength], arr[peak]];
    peak++;
    arrlength--;
  }
  return arr;
};
// Input: nums = [1,1,5]
// Output: [1,5,1]
