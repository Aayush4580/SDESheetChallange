var image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  sr = 1,
  sc = 1,
  color = 2;

var floodFill = (image, sr, sc, color) => {
  if (!image.length || image[sr][sc] === color) {
    return image;
  }
  var initialColor = image[sr][sc];
  var newColor = color;
  return helper(image, sr, sc, initialColor, newColor);
};

function helper(image, sr, sc, initialColor, newColor) {
  //boundCheck
  var rowInBound = 0 <= sr && sr < image.length;
  var colInBound = 0 <= sc && sc < image[0].length;
  if (!rowInBound || !colInBound) return;
  if (image[sr][sc] !== initialColor) return;
  image[sr][sc] = newColor;
  helper(image, sr + 1, sc, initialColor, newColor);
  helper(image, sr - 1, sc, initialColor, newColor);
  helper(image, sr, sc + 1, initialColor, newColor);
  helper(image, sr, sc - 1, initialColor, newColor);
  return image;
}
console.log(floodFill(image, sr, sc, color));
