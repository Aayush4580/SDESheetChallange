var stack = [9, -7, 2, -4, 1];
function quickSort(stack) {
  if (stack.length <= 1) {
    return stack;
  }
  var left = [];
  var right = [];

  var pivot = stack.pop();
  for (var i = 0; i < stack.length; i++) {
    if (stack[i] < pivot) {
      left.push(stack[i]);
    } else {
      right.push(stack[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(stack));
