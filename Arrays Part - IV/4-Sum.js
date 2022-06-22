var arr = [1, 0, -1, 0, -2, 2],
  target = 0;

var fourSum = (arr, target) => {
  var res = [];
  if (!arr.length) return res;
  arr.sort((a, b) => a - b);
  var set = new Set();
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      var left = j + 1;
      var mid1 = i;
      var mid2 = j;
      var right = arr.length - 1;
      while (left < right) {
        var sum = arr[left] + arr[mid1] + arr[mid2] + arr[right];
        var arr1 = `${arr[left]},${arr[mid1]},${arr[mid2]},${arr[right]}`;
        if (sum === target) {
          if (!set.has(arr1)) {
            set.add(arr1);
            res.push([arr[left], arr[mid1], arr[mid2], arr[right]]);
          }
          left++;
          right--;
        }
        if (sum > target) {
          right--;
        } else {
          left++;
        }
      }
    }
  }

  return res;
};

console.log(fourSum(arr, target));
