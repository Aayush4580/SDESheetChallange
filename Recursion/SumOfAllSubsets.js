var arr = [5, 2, 1];

var sumOfAllSubsets = (arr) => {
  var subset = [];
  var sum = 0;
  var index = 0;
  return helper(index, sum, arr, subset);
};
const helper = (index, sum, arr, subset) => {
  if (index >= arr.length) {
    subset.push(sum);
    return;
  }
  //pick current
  helper(index + 1, sum + arr[index], arr, subset);
  //dont pick current and skip to next one
  helper(index + 1, sum, arr, subset);
  return subset.sort();
};
console.log(sumOfAllSubsets(arr));
