var arr = [6, -2, 2, -8, 1, 7, 4, -10];
function maxLenNaive(arr) {
  //code here
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    var sum = 0;
    for (var j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === 0) {
        max = Math.max(max, j - i + 1); //+1 as we are checking length
      }
    }
  }
  return max;
}

console.log(maxLenNaive(arr));

function maxLen(arr) {
  //code here
  var max = 0;
  var sum = 0;
  var hashMap = {};

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === 0) {
      //if sum is equal to zero we simply take the index+1 of it
      //+1 as we need the length of array
      max = Math.max(max, i + 1);
    } else {
      //if the sum exists in the map then new index is greater than the old one
      //hence the length of the subarray will be greater
      if (hashMap[sum]) {
        max = Math.max(max, i - hashMap[sum]);
      } else {
        //if sum not exists then add it in hashMap
        hashMap[sum] = i;
      }
    }
  }
  return max;
}

console.log(maxLen(arr));
