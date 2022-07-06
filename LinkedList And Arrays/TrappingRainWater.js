var trappingRainWater = function (height) {
  var leftArr = [];
  var maxLeft = 0;
  for (var i of height) {
    if (i > maxLeft) {
      maxLeft = i;
    }
    leftArr.push(maxLeft);
  }
  console.log(leftArr);
  var rightArr = [];
  var maxRight = 0;
  for (var j = height.length - 1; j >= 0; j--) {
    if (height[j] > maxRight) {
      maxRight = height[j];
    }
    rightArr.unshift(maxRight);
  }
  console.log(rightArr);
  var tappedWater = 0;
  for (var k = 0; k < height.length; k++) {
    tappedWater += Math.min(leftArr[k], rightArr[k]) - height[k];
  }
  return tappedWater;
};

var height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trappingRainWater(height));
//6
