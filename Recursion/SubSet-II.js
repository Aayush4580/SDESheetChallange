var subsetsWithDup = function (arr) {
  var unique = new Set();
  arr.sort((a, b) => a - b);
  //have to do a sort so that the unique will have proper data to look through for same entry
  var res = [];
  var subset = [];
  var index = 0;
  return helper(index, arr, subset, unique, res);
};

const helper = (index, arr, subset, unique, res) => {
  if (index >= arr.length) {
    if (!unique.has(subset.toString())) {
      unique.add(subset.toString());
      res.push(subset.slice());
    }
    return;
  }
  //pick current
  subset.push(arr[index]);
  helper(index + 1, arr, subset, unique, res);
  //dont pick current and skip to next one
  subset.pop();
  helper(index + 1, arr, subset, unique, res);
  return res;
};

// Input: array = [1,2,2]
// Output: [ [ ],[1],[1,2],[1,2,2],[2],[2,2] ]

var array = [1, 2, 2];
console.log(subsetsWithDup(array));
