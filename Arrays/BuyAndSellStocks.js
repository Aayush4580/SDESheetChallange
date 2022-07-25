var prices = [7, 1, 5, 3, 6, 4];
var stockBuyAndSell = (prices) => {
  var profit = 0;
  var buyIndex = prices[0];
  for (let i of prices) {
    if (i < buyIndex) {
      buyIndex = i;
    }
    var currProfit = i - buyIndex;
    profit = Math.max(currProfit, profit);
  }

  return profit;
};
console.log(stockBuyAndSell(prices));
