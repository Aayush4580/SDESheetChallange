var knapsack = (profits, weights, capacity) => {
  return knapsackAux(profits, weights, capacity, 0);
}; //end of method

var knapsackAux = (profits, weights, capacity, currentIndex) => {
  if (capacity <= 0 || currentIndex < 0 || currentIndex >= profits.length)
    //Base case
    return 0;

  var profit1 = 0;
  if (weights[currentIndex] <= capacity)
    // Taking current element
    profit1 =
      profits[currentIndex] +
      knapsackAux(
        profits,
        weights,
        capacity - weights[currentIndex],
        currentIndex + 1
      );

  var profit2 = knapsackAux(profits, weights, capacity, currentIndex + 1); // Not taking current element
  return Math.max(profit1, profit2);
}; //end of method

var profits = [5, 4, 8, 6];
var weights = [1, 2, 4, 5];
console.log(knapsack(profits, weights, 5));
