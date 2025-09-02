/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  let stack = [];
  let finalPrice = [];
  for (let n = prices.length - 1; n >= 0; n--) {
    if (stack.length === 0) {
      finalPrice.push(0);
    } else if (stack.length > 0 && stack[stack.length - 1] <= prices[n]) {
      finalPrice.push(stack[stack.length - 1]);
    } else if (stack.length > 0 && stack[stack.length - 1] > prices[n]) {
      while (stack[stack.length - 1] > prices[n] && stack.length != 0) {
        stack.pop();
      }
      if (stack.length === 0) {
        finalPrice.push(0);
      } else {
        finalPrice.push(stack[stack.length - 1]);
      }
    }

    stack.push(prices[n]);
  }
  finalPrice = finalPrice.reverse();
  for (let i = 0; i < finalPrice.length; i++) {
    finalPrice[i] = prices[i] - finalPrice[i];
  }
  return finalPrice;
};

let prices = [8, 4, 6, 2, 3];
console.log(finalPrices(prices));
