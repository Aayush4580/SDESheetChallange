var coins = [1, 2, 5],
  amount = 11;
//3
var coinChange = (coins, amount) => {
  // create array with amount
  var table = Array(amount + 1).fill(Infinity);
  table[0] = 0;
  for (let coin of coins) {
    for (let i = 0; i < table.length; i++) {
      // i represents amount here
      // if coin amount is less than the table amount only then we accept
      if (coin <= i) {
        let index = i - coin;
        let potentialAmt = 1 + table[index];
        table[i] = Math.min(table[i], potentialAmt);
      }
    }
  }

  return table[table.length - 1] === Infinity ? -1 : table[table.length - 1];
};

console.log(coinChange(coins, amount));
